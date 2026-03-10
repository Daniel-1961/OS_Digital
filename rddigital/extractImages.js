import https from 'https';
import fs from 'fs';
import path from 'path';

// Helper to fetch text content
function fetchPageText(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

// Download image helper
function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        // Check if relative protocol
        if (url.startsWith('//')) {
            url = 'https:' + url;
        } else if (url.startsWith('/')) {
            url = 'https://rddigital.co.uk' + url;
        }

        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            // Redirection handling
            if (response.statusCode === 301 || response.statusCode === 302) {
                return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

const imagesDir = path.join(process.cwd(), 'public', 'assets', 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

async function scrapeImages() {
    try {
        console.log('Fetching homepage HTML...');
        const html = await fetchPageText('https://rddigital.co.uk/');

        // Simple regex to extract image sources
        const imgRegex = /<img[^>]+src="([^">]+)"/g;
        let match;
        const imageUrls = new Set();

        while ((match = imgRegex.exec(html)) !== null) {
            imageUrls.add(match[1]);
        }

        console.log(`Found ${imageUrls.size} images.`);

        for (const url of imageUrls) {
            // Filter out data URIs or empty src
            if (url.startsWith('data:') || !url) continue;

            const fileName = url.split('/').pop().split('?')[0]; // simple base name
            if (!fileName) continue;

            const destPath = path.join(imagesDir, fileName);
            console.log(`Downloading: ${url} -> ${fileName}`);
            try {
                await downloadFile(url, destPath);
            } catch (err) {
                console.warn(`Failed to download ${url}: ${err.message}`);
            }
        }

        console.log('Image extraction complete.');
    } catch (err) {
        console.error('Extraction failed:', err);
    }
}

scrapeImages();
