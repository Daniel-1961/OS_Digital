import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mailto fallback
    const subject = encodeURIComponent(`New enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\n${formData.message}`
    );
    window.location.href = `mailto:hello@rddigital.co.uk?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

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
            alt="Contact Hero"
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
          <h1 className="text-4xl font-semibold leading-tight">Book a Call</h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="xl:container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Left — info */}
            <div className="flex flex-col gap-8 lg:w-2/5">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#175070] mb-4">
                  Ready to scale faster?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We work with companies across the UK and Europe to build secure, high-performance digital products.
                  Get in touch and let's talk about what you're building.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="1.25em" height="1.25em" className="shrink-0 mt-1 text-primary">
                    <g fill="none" stroke="currentColor">
                      <circle cx="6" cy="5" r="1.5" />
                      <path strokeLinejoin="round" d="M6 .5a4.39 4.39 0 0 0-4.5 4.27c0 1.59.72 2.42 1.64 3.58s2 2.18 2.86 3.14c.87-1 2-2 2.85-3.14s1.65-2 1.65-3.58A4.59 4.59 0 0 0 6 .5z" />
                    </g>
                  </svg>
                  <div>
                    <p className="font-semibold text-[#081F2D] text-sm">Address</p>
                    <a
                      href="https://www.google.com/maps/place/7+Peerglow+Centre"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-600 text-sm hover:text-primary transition-colors"
                    >
                      7 Peerglow Centre, Marsh Lane<br />
                      Ware, Hertfordshire, SG12 9QL
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 mt-0.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#081F2D] text-sm">Email</p>
                    <a href="mailto:hello@rddigital.co.uk" className="text-gray-600 text-sm hover:text-primary transition-colors">
                      hello@rddigital.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-2xl shadow-sm p-8 lg:w-3/5">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#081F2D]">Thanks for reaching out!</h3>
                  <p className="text-gray-600">Your email client should open now. We'll get back to you within 1 business day.</p>
                  <Link to="/" className="mt-4 text-primary font-semibold hover:underline">← Back to Home</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-[#081F2D]">Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-[#081F2D]">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-sm font-medium text-[#081F2D]">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company (optional)"
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-[#081F2D]">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    Send message
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path stroke="#fff" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
