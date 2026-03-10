import https from 'https';

https.get('https://rddigital.co.uk/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const hexRegex = /#[0-9a-fA-F]{3,6}/g;
        const colors = new Set(data.match(hexRegex));
        console.log('Colors from HTML inline styles & attributes:', [...colors]);
    });
});
