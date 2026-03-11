import { Link } from 'react-router-dom';

const projects = [
    {
        id: 'ecc',
        industry: 'EV',
        logo: 'https://rd-cms.do.recognisedesign.com/uploads/image_52_1_cea5ad58f1.webp',
        image: 'https://rd-cms.do.recognisedesign.com/uploads/ecc_image_945b1e2c99.webp',
        tags: [
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/g10_1_8a761390bc.webp', text: 'WORDPRESS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/90f055ad402163c56fd28230f85dd2d463d8aeb8_89479a68aa.webp', text: 'NODE JS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/figma_6bd0cf8789.webp', text: 'UX/UI DESIGN' },
        ],
        desc: 'ECC, a prominent EV industry player, had a subpar website. We revamped their online presence, enhancing its visual appeal and ranking it among the top three search results for over ten relevant keywords.',
        link: '/portfolio/ecc'
    },
    {
        id: 'columbus-assicurazioni',
        industry: 'Insurance',
        logo: 'https://rd-cms.do.recognisedesign.com/uploads/image_53_8e9ee46437.webp',
        image: 'https://rd-cms.do.recognisedesign.com/uploads/columbus_img_5b9a4cb614.webp',
        tags: [
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/824ee05a881cdd6e37dcdbe3de4d56ecde62b872_1_9f6806e7ec.webp', text: 'UMBRACO' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/7c76f41a83c7153d0f3b69ef73b4cf5a38d5d767_1_0787964f31.webp', text: '.NET' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/figma_6bd0cf8789.webp', text: 'UX/UI DESIGN' },
        ],
        desc: 'Columbus Assicurazioni, the Italian brand of Collinson Insurance Solutions Europe Ltd, specializes in travel insurance. Operating since 1988 with over 10 million insured travelers, the company aimed to revamp its digital presence to better reflect its rebrand.',
        link: '/portfolio/columbus-assicurazioni'
    },
    {
        id: 'columbus-direct',
        industry: 'Insurance',
        logo: 'https://rd-cms.do.recognisedesign.com/uploads/columbus_direct_logo_cc47dd74de.webp',
        image: 'https://rd-cms.do.recognisedesign.com/uploads/columbus_direct_a53964d3b7.webp',
        tags: [
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/g10_1_8a761390bc.webp', text: 'WORDPRESS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/90f055ad402163c56fd28230f85dd2d463d8aeb8_89479a68aa.webp', text: 'NODE JS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/figma_6bd0cf8789.webp', text: 'UX/UI DESIGN' }
        ],
        desc: 'Columbus Direct, a UK travel insurance provider founded in 1988, was one of the pioneers in offering online insurance policies. With over 15 million travelers covered, it is known for its flexible plans, 24/7 support, and award-winning service.',
        link: '/portfolio/columbus-direct'
    },
    {
        id: 'berkeley-square-medical',
        industry: 'Health',
        logo: 'https://rd-cms.do.recognisedesign.com/uploads/Berkeley_Square_Medical_1_5a5e4d48e5.webp',
        image: 'https://rd-cms.do.recognisedesign.com/uploads/berkely_square_medical_34cf9ae853.webp',
        tags: [
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/g10_1_8a761390bc.webp', text: 'WORDPRESS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/90f055ad402163c56fd28230f85dd2d463d8aeb8_89479a68aa.webp', text: 'NODE JS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/figma_6bd0cf8789.webp', text: 'UX/UI DESIGN' }
        ],
        desc: 'Berkeley Square Medical is a Harley Street–based private clinic specializing in cosmetic surgery. Their website serves as a crucial touchpoint for prospective patients making emotionally charged, high-value healthcare decisions.',
        link: '/portfolio/berkeley-square-medical'
    },
    {
        id: 'virtue-gymnastics',
        industry: 'Sport',
        logo: 'https://rd-cms.do.recognisedesign.com/uploads/image_58_1_8faa54f2c5.webp',
        image: 'https://rd-cms.do.recognisedesign.com/uploads/Image_5_a8fda31808.webp',
        tags: [
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/215d4d5482184a7f07d6ea2a75c0d7e6b68b617c_067c9e3557.webp', text: 'STRAPI' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/90f055ad402163c56fd28230f85dd2d463d8aeb8_89479a68aa.webp', text: 'NODE JS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/figma_6bd0cf8789.webp', text: 'UX/UI DESIGN' }
        ],
        desc: 'ECC, a prominent EV industry player, had a subpar website. We revamped their online presence, enhancing its visual appeal and ranking it among the top three search results for over ten relevant keywords.',
        link: '/portfolio/virtue-gymnastics'
    },
    {
        id: 'sim1',
        industry: 'Simulator',
        logo: 'https://rd-cms.do.recognisedesign.com/uploads/sim1_dark_d3f716634c.webp',
        image: 'https://rd-cms.do.recognisedesign.com/uploads/image_6_fc2e47cef4.webp',
        tags: [
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/g10_1_8a761390bc.webp', text: 'WORDPRESS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/90f055ad402163c56fd28230f85dd2d463d8aeb8_89479a68aa.webp', text: 'NODEJS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/figma_6bd0cf8789.webp', text: 'UX/UI DESIGN' }
        ],
        desc: 'ECC, a prominent EV industry player, had a subpar website. We revamped their online presence, enhancing its visual appeal and ranking it among the top three search results for over ten relevant keywords.',
        link: '/portfolio/sim1'
    },
    {
        id: 'hobbs',
        industry: 'Ecommerce',
        logo: 'https://rd-cms.do.recognisedesign.com/uploads/hobbs_dark_ffa120d7ea.webp',
        image: 'https://rd-cms.do.recognisedesign.com/uploads/web_portfolio_mockup_10_54fdad48c8.webp',
        tags: [
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/g10_1_8a761390bc.webp', text: 'WORDPRESS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/90f055ad402163c56fd28230f85dd2d463d8aeb8_89479a68aa.webp', text: 'NODE JS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/figma_6bd0cf8789.webp', text: 'UX/UI DESIGN' }
        ],
        desc: 'Hobbs is a British fashion brand known for timeless style, premium quality, and refined craftsmanship. With a focus on contemporary womenswear, the brand blends elegance with everyday versatility, offering clothing, footwear designed to last.',
        link: '/portfolio/hobbs'
    },
    {
        id: 'parent-map',
        industry: 'Real Estate',
        logo: 'https://rd-cms.do.recognisedesign.com/uploads/atmp_dark_1225efef04.webp',
        image: 'https://rd-cms.do.recognisedesign.com/uploads/web_portfolio_mockup_10_1_4f278c9455.webp',
        tags: [
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/g10_1_8a761390bc.webp', text: 'WORDPRESS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/90f055ad402163c56fd28230f85dd2d463d8aeb8_89479a68aa.webp', text: 'NODE JS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/figma_6bd0cf8789.webp', text: 'UX/UI DESIGN' }
        ],
        desc: 'Helping families find homes near top UK schools — because the right school can make all the difference.',
        link: '/portfolio/parent-map'
    },
    {
        id: 'natasha',
        industry: 'Portfolio',
        logo: 'https://rd-cms.do.recognisedesign.com/uploads/natasha_22ecaad156.webp',
        image: 'https://rd-cms.do.recognisedesign.com/uploads/web_portfolio_mockup_10_2_41d2d7cdea.webp',
        tags: [
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/g10_1_8a761390bc.webp', text: 'WORDPRESS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/90f055ad402163c56fd28230f85dd2d463d8aeb8_89479a68aa.webp', text: 'NODE JS' },
            { icon: 'https://rd-cms.do.recognisedesign.com/uploads/figma_6bd0cf8789.webp', text: 'UX/UI DESIGN' }
        ],
        desc: 'A transformation of Natasha Mahtani’s digital presence, creating a serene, professional, and mobile-optimized platform that reflects her brand ethos and connects with her audience seamlessly.',
        link: '/portfolio/natasha'
    }
];

export default function PortfolioProjects() {
    return (
        <div className="bg-white xl:container px-4 lg:px-10 mx-auto 3xl:max-w-[50%] py-10 lg:py-20">
            <div className="lg:w-full mb-4 lg:mb-10 lg:mt-14">
                <div className="flex justify-center items-center gap-3 lg:pr-10">
                    <h2 className="font-semibold text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D]">
                        Our Projects
                    </h2>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-6 gap-y-8 gap-x-14 lg:mt-8">
                {projects.map((project) => (
                    <div key={project.id} className="rounded-2xl border border-black/10 flex flex-col gap-2 p-2 bg-[#F5F5F5] hover:bg-[#127EBA] transition-all duration-300">
                        <img loading="lazy" src={project.image} alt={project.industry} className="h-[17.0625rem] object-cover bg-white rounded-lg" />
                        <span className="flex flex-col justify-between flex-1 gap-3 bg-white rounded-lg p-2">
                            <span className="bg-[#D6C2874D] w-fit rounded-lg p-2 text-xs border border-[#D6C2871A] text-black font-medium">
                                {project.industry}
                            </span>
                            <img loading="lazy" src={project.logo} alt="brand logo" className="h-[2rem] w-auto mr-auto object-contain" />
                            
                            <div className="flex flex-row items-center flex-wrap gap-3">
                                {project.tags.map((tag, i) => (
                                    <div key={i} className="flex items-center gap-1 flex-row bg-[#F5F5F5] rounded-lg p-2">
                                        <img src={tag.icon} alt={tag.text} className="size-4 object-contain" />
                                        <p className="text-black text-xs whitespace-nowrap uppercase">
                                            {tag.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="text-[#041925] leading-[150%] text-sm">
                                <p>{project.desc}</p>
                            </div>
                            
                            <Link to={project.link} className="group relative h-10 items-center justify-center gap-2.5 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 text-white transition-all text-lg font-medium flex capitalize hover:brightness-110 mt-auto">
                                View Case Study
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                                    <path className="stroke-white" stroke="#fff" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </Link>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
