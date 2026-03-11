import { Link } from 'react-router-dom';

export default function ProcessSteps() {
    return (
        <section className="bg-white px-4 pt-8 pb-12 lg:p-16 lg:px-10 mx-auto xl:container 3xl:max-w-[50%]">
            <div className="relative bg-primary mx-auto lg:top-0 z-10 text-left lg:text-left xl:container 3xl:max-w-[50%] py-10 px-4 lg:py-[4.5rem] lg:px-24">
                <div className="flex max-sm:flex-col max-sm:gap-5 gap-2 justify-between items-end mb-8">
                    <div className="flex flex-col lg:flex-row justify-between gap-6 lg:items-end text-start w-full lg:py-2">
                        <div className="flex flex-col gap-2 lg:gap-6 w-full lg:w-[50%]">
                            <h2 className="font-medium text-2xl lg:text-5xl leading-[2.125rem] lg:leading-[3.5rem] tracking-normal capitalize text-[#E6E6E9]">
                                Redefine how you access top-tier product
                            </h2>
                            <div className="text-[#CACACA] leading-[140%] text-sm lg:text-lg">
                                We make world-class digital products accessible without the complexity. From strategy and design to development and optimization, our team delivers scalable solutions that put performance, compliance, and user experience first—so you can focus on growth.
                            </div>
                        </div>
                        
                        <Link to="/contact" className="group relative h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-lg font-medium lg:flex w-full lg:w-44 block overflow-hidden mt-6 lg:mt-0">
                            <span className="relative flex-1 flex items-center justify-center overflow-hidden h-full">
                                <span className="transition-transform flex flex-row whitespace-nowrap items-center gap-2.5 duration-300 transform group-hover:-translate-y-full">
                                    Book a Call
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="stroke-white" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                                <span className="flex flex-row justify-center items-center whitespace-nowrap gap-2 absolute top-0 left-0 w-full h-full transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 text-white">
                                    Scale Faster
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="stroke-white" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2 lg:flex-row items-stretch mt-10 h-full">
                    {/* Step 1 */}
                    <div className="rounded-2xl flex flex-col gap-7 justify-start p-6 border-t border-white/5 backdrop-blur-[3px] relative flex-1">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url(/images/Card.png)] bg-repeat bg-[length:1.5%] opacity-[0.05]"></div>
                        <img loading="lazy" src="https://rd-cms.do.recognisedesign.com/uploads/brief_us_a4eea9ca11.png" alt=" Brief us" className="size-12" />
                        <h3 className="font-medium text-[#E6E6E9] leading-[140%] text-2xl capitalize mt-2.5">
                            1. Brief us
                        </h3>
                        <span className="flex flex-col flex-1 gap-2 mb-auto mt-1.5">
                            <div className="text-[#CACACE] leading-[150%] text-base">
                                <p>Start with a comprehensive briefing session to outline your project requirements. Our team is ready to bring it to life swiftly.</p>
                            </div>
                        </span>
                    </div>
                    
                    <svg width="133" height="13" viewBox="0 0 133 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden lg:block self-center shrink-0">
                        <line x1="0.666016" y1="5.55444" x2="50.666" y2="5.55444" stroke="white"></line>
                        <path d="M64.545 3.9335L66.667 0.0544434L68.787 3.9335L72.666 6.05558L68.787 8.17538L66.667 12.0544L64.545 8.17538L60.666 6.05558L64.545 3.9335Z" fill="white"></path>
                        <line x1="82.666" y1="5.55444" x2="132.666" y2="5.55444" stroke="white"></line>
                    </svg>
                    
                    {/* Step 2 */}
                    <div className="rounded-2xl flex flex-col gap-7 justify-start p-6 border-t border-white/5 backdrop-blur-[3px] relative flex-1">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url(/images/Card.png)] bg-repeat bg-[length:1.5%] opacity-[0.05]"></div>
                        <img loading="lazy" src="https://rd-cms.do.recognisedesign.com/uploads/mapping_ce282cad45.png" alt="Mapping" className="size-12" />
                        <h3 className="font-medium text-[#E6E6E9] leading-[140%] text-2xl capitalize mt-2.5">
                            2. Mapping
                        </h3>
                        <span className="flex flex-col flex-1 gap-2 mb-auto mt-1.5">
                            <div className="text-[#CACACE] leading-[150%] text-base">
                                <p>Dive into detailed project planning, ensuring aligns seamlessly. Send your request now for a journey that maps out success.</p>
                            </div>
                        </span>
                    </div>
                    
                    <svg width="133" height="13" viewBox="0 0 133 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden lg:block self-center shrink-0">
                        <line x1="0.666016" y1="5.55444" x2="50.666" y2="5.55444" stroke="white"></line>
                        <path d="M64.545 3.9335L66.667 0.0544434L68.787 3.9335L72.666 6.05558L68.787 8.17538L66.667 12.0544L64.545 8.17538L60.666 6.05558L64.545 3.9335Z" fill="white"></path>
                        <line x1="82.666" y1="5.55444" x2="132.666" y2="5.55444" stroke="white"></line>
                    </svg>
                    
                    {/* Step 3 */}
                    <div className="rounded-2xl flex flex-col gap-7 justify-start p-6 border-t border-white/5 backdrop-blur-[3px] relative flex-1">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url(/images/Card.png)] bg-repeat bg-[length:1.5%] opacity-[0.05]"></div>
                        <img loading="lazy" src="https://rd-cms.do.recognisedesign.com/uploads/work_together_0f2f0ce3a4.png" alt="Work Together" className="size-12" />
                        <h3 className="font-medium text-[#E6E6E9] leading-[140%] text-2xl capitalize mt-2.5">
                            3. Work Together
                        </h3>
                        <span className="flex flex-col flex-1 gap-2 mb-auto mt-1.5">
                            <div className="text-[#CACACE] leading-[150%] text-base">
                                <p>Your ideas, our expertise- a dynamic partnership for brilliant outcomes. Send your request this creative journey together.</p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
