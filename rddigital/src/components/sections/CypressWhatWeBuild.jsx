const features = [
    {
        icon: "https://rd-cms.do.recognisedesign.com/uploads/layout_1_2_704ce29dc4.webp",
        title: "Front End Features",
        description: "Deliver sleek, responsive, and accessible designs that engage users on any device. We focus on usability and aesthetics to create experiences that convert."
    },
    {
        icon: "https://rd-cms.do.recognisedesign.com/uploads/layout_1_2_704ce29dc4.webp",
        title: "Key User Journeys",
        description: "Map and optimise the paths your users take. From first click to final action, we ensure every journey is seamless, intuitive, and aligned with your business goals."
    },
    {
        icon: "https://rd-cms.do.recognisedesign.com/uploads/layout_1_2_704ce29dc4.webp",
        title: "Forms & Flows",
        description: "Streamline data capture and simplify interactions with smart forms and workflows. Our designs reduce friction, improve accuracy, and drive higher completion rates."
    },
    {
        icon: "https://rd-cms.do.recognisedesign.com/uploads/layout_1_2_704ce29dc4.webp",
        title: "Site Speed",
        description: "Faster sites win more users. We optimize for performance—minimizing load times, improving SEO, and creating a smooth, reliable experience across all platforms."
    }
];

export default function CypressWhatWeBuild() {
    return (
        <section className="bg-white px-4 pt-8 pb-12 lg:p-16 lg:px-10 mx-auto xl:container 3xl:max-w-[50%]">
            <div className="relative mx-auto lg:top-0 z-10 text-left lg:text-left">
                <div className="flex max-sm:flex-col max-sm:gap-5 gap-2 justify-between items-end mb-8">
                    <div className="flex flex-row justify-between items-center text-center lg:text-start w-full lg:py-2">
                        <div>
                            <h2 className="font-semibold text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D]">
                                What We Build
                            </h2>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 gap-5">
                    {features.map((feature, index) => (
                        <div key={index} className="rounded-2xl flex flex-col justify-start p-6 py-4 bg-[#175070] border-t border-white/5 backdrop-blur-[3px] relative hover:brightness-110 transition-all duration-300">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url(/images/Card.png)] bg-repeat bg-[length:1.5%] opacity-[0.05]"></div>
                            <img loading="lazy" src={feature.icon} alt={feature.title} className="size-10" />
                            <h3 className="font-medium text-white leading-[140%] text-2xl capitalize mt-2.5">
                                {feature.title}
                            </h3>
                            <span className="flex flex-col flex-1 gap-2 mb-auto mt-1.5">
                                <div className="text-[#DADADD] leading-[150%] text-sm">
                                    {feature.description}
                                </div>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
