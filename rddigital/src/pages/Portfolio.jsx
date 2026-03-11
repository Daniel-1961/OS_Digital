import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "columbus",
    title: "Columbus Assicurazioni",
    category: "Umbraco • Azure • Insurance",
    image: "https://rd-cms.do.recognisedesign.com/uploads/columbus_img_94f83b379a.webp",
    bullets: [
      "Adapted the platform for the Italian market.",
      "Full Umbraco build with Azure hosting.",
      "Supports thousands of users daily.",
    ],
    link: "https://columbusassicurazioni.it",
  },
  {
    slug: "ecc",
    title: "Electric Car Chargers UK",
    category: "Web App • Mobile • Operations",
    image: "https://rd-cms.do.recognisedesign.com/uploads/ecc_image_fadf009002.webp",
    bullets: [
      "Designed and developed a web and mobile app.",
      "Helped teams handle installations, customer data, and scheduling.",
      "Cut time spent on admin significantly.",
    ],
    link: "https://electriccarchargersuk.co.uk/",
  },
  {
    slug: "berkeley",
    title: "Berkeley Square Medical",
    category: "Healthcare • Compliance • UX",
    image: "https://rd-cms.do.recognisedesign.com/uploads/berkely_square_medical_e0182599fe.webp",
    bullets: [
      "Upgraded the site for private surgery in Harley Street.",
      "Improved booking experience for patients.",
      "Met strict design and compliance standards.",
    ],
    link: "https://www.berkeleysquaremedical.com/",
  },
];

const products = [
  {
    slug: "optiloom",
    title: "Optiloom",
    tag: "A/B Testing Platform",
    image: "https://rd-cms.do.recognisedesign.com/uploads/001_4f50c54833.webp",
    description: "Run A/B tests directly on your live site. Track results. Make confident changes backed by data.",
  },
  {
    slug: "observe-iq",
    title: "Observe IQ",
    tag: "Page Monitoring",
    image: "https://rd-cms.do.recognisedesign.com/uploads/002_f652239bb9.webp",
    description: "Track any webpage for changes and get instant alerts. Whether it's a price drop, job posting, or competitor update — Observe IQ keeps you informed.",
  },
  {
    slug: "ragger",
    title: "Ragger",
    tag: "AI Commerce Assistant",
    image: "https://rd-cms.do.recognisedesign.com/uploads/Ragger_S_Vg_22ddd33dda.webp",
    description: "AI-powered conversational commerce assistant that integrates with existing APIs to deliver live quotes, real-time prices, and instant bookings.",
  },
];

export default function Portfolio() {
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
            alt="Portfolio Hero"
            className="object-cover w-full h-full absolute top-0 left-0 object-top"
          />
        </div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, RGB(17, 50, 70) 0%, rgba(23, 80, 112, 0.73) 40%, rgba(23, 80, 112, 0) 100%)",
          }}
        />
        <div className="relative top-10 lg:top-0 xl:container xl:mx-auto z-10 text-left pt-20 text-white px-8 max-w-2xl">
          <h1 className="text-4xl font-semibold leading-tight">Our Work</h1>
        </div>
      </section>

      {/* Client Projects */}
      <section className="bg-white px-4 pt-12 pb-16 lg:p-16 lg:px-10 mx-auto xl:container">
        <h2 className="font-semibold text-2xl lg:text-5xl text-[#081F2D] mb-10">Client Projects</h2>
        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 lg:h-96 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{project.category}</span>
                <h3 className="text-3xl font-bold text-[#081F2D]">{project.title}</h3>
                <ul className="flex flex-col gap-3">
                  {project.bullets.map((b) => (
                    <li key={b} className="flex gap-3 items-start text-gray-600">
                      <svg className="shrink-0 mt-1 text-primary" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mt-2"
                >
                  Visit project
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path stroke="#175070" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#f5f5f5] px-4 py-16 lg:p-16 lg:px-10 mx-auto xl:container">
        <h2 className="font-semibold text-2xl lg:text-5xl text-[#081F2D] mb-10">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.slug} className="rounded-2xl bg-white border border-black/10 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <img src={product.image} alt={product.title} className="w-full h-52 object-cover" loading="lazy" />
              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">{product.tag}</span>
                <h3 className="text-xl font-bold text-[#081F2D]">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{product.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm mt-2"
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path stroke="#175070" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
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
            <p className="text-white font-light leading-none mb-1">
              Need a partner that works across tech and compliance?
            </p>
            <Link
              to="/contact"
              className="group items-center gap-2 bg-white text-primary py-2 font-medium px-8 rounded-md flex w-fit hover:shadow-[inset_0_0_0_2px_rgba(23,80,112,1)] duration-150 transition-all"
            >
              Let's talk
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path stroke="#175070" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <img
            src="https://rd-cms.do.recognisedesign.com/uploads/Background_1_afb0a8dfd1.webp"
            alt="CTA"
            className="rounded-xl h-[150px] max-w-[300px] object-cover"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
