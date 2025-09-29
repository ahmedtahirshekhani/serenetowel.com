"use client";

import { useState, useEffect } from "react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Listen for clicks on ANY button with id="contactus"
  useEffect(() => {
    const btns = document.querySelectorAll<HTMLElement>("#contactus");
    const open = () => setIsOpen(true);

    btns.forEach((b) => b.addEventListener("click", open));

    return () => {
      btns.forEach((b) => b.removeEventListener("click", open));
    };
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (Connect this to your email backend)");
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8 relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#a67c52] text-xl"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact info */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-[#a67c52]">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-6">
                  Reach out via form or directly with the details below.
                </p>

                <ul className="space-y-4 text-gray-700">
                  <li>
                    <strong>📍 Address:</strong> Plot R-890, Sector 20-A,
                    Gulzar-e-Hijri, Karachi, Pakistan.
                  </li>
                  <li>
                    <strong>📞 Phone:</strong>{" "}
                    <a
                      href="tel:+923552787275"
                      className="text-[#a67c52] hover:underline"
                    >
                      +92 355-2787-275
                    </a>
                  </li>
                  <li>
                    <strong>📧 Email:</strong>{" "}
                    <a
                      href="mailto:sales@selenetowel.com"
                      className="text-[#a67c52] hover:underline"
                    >
                      sales@selenetowel.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#a67c52] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#a67c52] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#a67c52] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#a67c52] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
                  />
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#a67c52] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#a67c52] text-white px-6 py-3 rounded-lg hover:bg-[#8b623e] transition w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
