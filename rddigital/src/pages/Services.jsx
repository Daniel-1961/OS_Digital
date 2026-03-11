import React from "react";
import { Link, useParams } from "react-router-dom";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke="#175070" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const services = [
  {
    slug: "web-app-development",
    title: "Web and App Development",
    image: "https://rd-cms.do.recognisedesign.com/uploads/Frame_1000002961_7e2a22be63.webp",
    description: "We build fast, secure, and user-friendly web applications. From custom front-ends to full-stack solutions, our team crafts digital products that scale with your business using the latest frameworks and best practices.",
  },
  {
    slug: "marketing-analytics",
    title: "Marketing Analytics with GA4 and Tag Manager",
    image: "https://rd-cms.do.recognisedesign.com/uploads/Frame_1000002961_1_32dba48e55.webp",
    description: "Understand your users and improve your conversions. We set up GA4, Google Tag Manager, and custom event tracking so you have clean, actionable data to make the right decisions.",
  },
  {
    slug: "azure",
    title: "Secure Hosting and Architecture with Microsoft Azure",
    image: "https://rd-cms.do.recognisedesign.com/uploads/AI_web_design_46b8921782.webp",
    description: "We design and manage Azure infrastructure that is reliable, secure, and scalable. From App Services and Azure SQL to CI/CD pipelines and monitoring — we handle the cloud so you don't have to.",
  },
  {
    slug: "automated-testing-with-cypress",
    title: "Automated Testing with Cypress",
    image: "https://rd-cms.do.recognisedesign.com/uploads/Frame_1000002961_2_1ce51bc4d9.webp",
    description: "Reduce regression bugs and ship with confidence. We write automated end-to-end tests using Cypress that run on every deployment, catching issues before they reach your users.",
  },
  {
    slug: "aI-powered-workflows",
    title: "AI-Powered Workflows",
    image: "https://rd-cms.do.recognisedesign.com/uploads/AI_web_design_46b8921782.webp",
    description: "We integrate AI tools and LLMs into your business workflows to save time, automate repetitive tasks, and unlock new capabilities — from document processing to intelligent chat assistants.",
  },
  {
    slug: "Umbraco-Website-Development",
    title: "Umbraco Website Development",
    image: "https://rd-cms.do.recognisedesign.com/uploads/Frame_1000002961_7e2a22be63.webp",
    description: "We build websites using Umbraco CMS — a powerful .NET-based platform ideal for enterprises. Clean architecture, easy content editing, and seamless Azure hosting.",
  },
  {
    slug: "customer-acquisition-journeys",
    title: "High-Conversion Customer Acquisition Journeys",
    image: "https://rd-cms.do.recognisedesign.com/uploads/Frame_1000002961_2_1ce51bc4d9.webp",
    description: "We design and build landing pages and conversion funnels that turn visitors into leads and leads into customers. Every step is data-informed and tested.",
  },
];

export default function Services() {
  const { slug } = useParams();

  // If slug matches a specific service, show detail view
  const service = slug ? services.find((s) => s.slug === slug) : null;

  if (service) {
    return (
      <div className="bg-white overflow-x-hidden">
        {/* Hero */}
        <section
          className="relative h-[20rem] lg:h-[25rem] lg:-mt-32 flex items-center justify-start"
          style={{ zIndex: 1 }}
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full absolute top-0 left-0 object-top"
            />
          </div>
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: "linear-gradient(90deg, RGB(17, 50, 70) 0%, rgba(23, 80, 112, 0.73) 40%, rgba(23, 80, 112, 0) 100%)",
            }}
          />
          <div className="relative top-10 lg:top-0 xl:container xl:mx-auto z-10 text-left pt-20 text-white px-8 max-w-2xl">
            <h1 className="text-4xl font-semibold leading-tight">{service.title}</h1>
          </div>
        </section>

        {/* Content */}
        <section className="xl:container mx-auto px-6 lg:px-10 py-16">
          <div className="max-w-3xl">
            <p className="text-gray-600 text-lg leading-relaxed mb-10">{service.description}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white py-3 px-8 rounded-lg font-medium hover:brightness-110 transition-all"
            >
              Book a Call
              <ArrowIcon />
            </Link>
          </div>
        </section>

        {/* Other Services */}
        <section className="bg-[#f5f5f5] py-16">
          <div className="xl:container mx-auto px-6 lg:px-10">
            <h2 className="text-3xl font-semibold text-[#081F2D] mb-10">Other Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.filter((s) => s.slug !== slug).map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="rounded-3xl border border-black/10 flex flex-col p-4 bg-white hover:shadow-md transition-shadow"
                >
                  <img src={s.image} alt={s.title} className="h-48 w-full object-cover rounded-2xl" />
                  <h3 className="font-medium text-lg text-[#2b3c45] pt-4 mb-4">{s.title}</h3>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                    Read more <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary w-full">
          <div className="xl:mx-auto bg-primary py-10 sm:py-20 flex max-sm:gap-5 max-sm:flex-col justify-between items-center gap-3 px-5 md:px-10 lg:w-[95vw]">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl sm:text-[40px] uppercase font-normal text-white leading-[1.4] sm:leading-none">
                Want to reduce time spent chasing fixes?
              </h2>
              <p className="text-white font-light leading-none mb-1">Need a partner that works across tech and compliance?</p>
              <Link to="/contact" className="group items-center gap-2 bg-white text-primary py-2 font-medium px-8 rounded-md flex w-fit hover:shadow-[inset_0_0_0_2px_rgba(23,80,112,1)] duration-150 transition-all">
                Let's talk <ArrowIcon />
              </Link>
            </div>
            <img src="https://rd-cms.do.recognisedesign.com/uploads/Background_1_afb0a8dfd1.webp" alt="CTA" className="rounded-xl h-[150px] max-w-[300px] object-cover" loading="lazy" />
          </div>
        </section>
      </div>
    );
  }

  // Services listing page
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero */}
      <section
        className="relative h-[20rem] lg:h-[25rem] lg:-mt-32 flex items-center justify-start"
        style={{ zIndex: 1 }}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="https://rd-cms.do.recognisedesign.com/uploads/aboutus_hero_mobile_2_caec21da94.webp"
            alt="Services Hero"
            className="object-cover w-full h-full absolute top-0 left-0 object-top"
          />
        </div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(90deg, RGB(17, 50, 70) 0%, rgba(23, 80, 112, 0.73) 40%, rgba(23, 80, 112, 0) 100%)",
          }}
        />
        <div className="relative top-10 lg:top-0 xl:container xl:mx-auto z-10 text-left pt-20 text-white px-8 max-w-2xl">
          <h1 className="text-4xl font-semibold leading-tight">Our Services</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white px-4 pt-8 pb-16 lg:p-16 lg:px-10 mx-auto xl:container">
        <div className="flex flex-row justify-between items-center mb-10">
          <h2 className="font-semibold text-2xl lg:text-5xl leading-[120%] text-[#081F2D]">What we do</h2>
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-primary text-white py-3 px-6 rounded-[10px] font-medium hover:brightness-110 transition-all"
          >
            Book a Call <ArrowIcon />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service) => (
            <div key={service.slug} className="rounded-3xl border border-black/10 flex flex-col p-4 bg-white">
              <img
                loading="lazy"
                src={service.image}
                alt={service.title}
                className="h-full w-full max-h-56 object-cover object-top rounded-[1.25rem]"
              />
              <span className="flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-xl text-[#2b3c45] leading-[120%] pt-4">{service.title}</h3>
                </div>
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative h-10 items-center justify-center gap-2.5 rounded-[10px] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 text-white transition-all text-sm font-medium flex capitalize hover:brightness-110 px-4"
                >
                  Read more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="stroke-white" stroke="#fff" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary w-full">
        <div className="xl:mx-auto bg-primary py-10 sm:py-20 flex max-sm:gap-5 max-sm:flex-col justify-between items-center gap-3 px-5 md:px-10 lg:w-[95vw]">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl sm:text-[40px] uppercase font-normal text-white leading-[1.4] sm:leading-none">
              Want to reduce time spent chasing fixes?
            </h2>
            <p className="text-white font-light leading-none mb-1">Need a partner that works across tech and compliance?</p>
            <Link to="/contact" className="group items-center gap-2 bg-white text-primary py-2 font-medium px-8 rounded-md flex w-fit hover:shadow-[inset_0_0_0_2px_rgba(23,80,112,1)] duration-150 transition-all">
              Let's talk <ArrowIcon />
            </Link>
          </div>
          <img src="https://rd-cms.do.recognisedesign.com/uploads/Background_1_afb0a8dfd1.webp" alt="CTA" className="rounded-xl h-[150px] max-w-[300px] object-cover" loading="lazy" />
        </div>
      </section>
    </div>
  );
}
