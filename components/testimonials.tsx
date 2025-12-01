"use client";

import { useState, useEffect } from "react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  // Attach event listeners for buttons with id="contactus"
  useEffect(() => {
    const btns = document.querySelectorAll<HTMLElement>("#contactus");
    const open = () => setIsOpen(true);
    btns.forEach((b) => b.addEventListener("click", open));
    return () => btns.forEach((b) => b.removeEventListener("click", open));
  }, []);

  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // Handle form input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form to FormSubmit via fetch
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("subject", form.subject);
    formData.append("message", form.message);
    formData.append("_subject", `New Inquiry: ${form.subject}`);
    formData.append("_captcha", "false");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/hammad.shekhani@serenetowel.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  // Reset success message when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setStatus("idle"), 300);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-4 relative sm:max-h-[90vh] sm:overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-[#a67c52] text-xl"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-2">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-2 text-[#a67c52]">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-4">
                  Reach out via form or directly with the details below.
                </p>

                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>
                    <strong>📍 Address:</strong> Plot R-890, Sector 20-A,
                    Gulzar-e-Hijri, Karachi, Pakistan.
                  </li>
                  <li>
                    <strong>📞 Phone:</strong>{" "}
                    <a
                      href="tel:+923352787275"
                      className="text-[#a67c52] hover:underline"
                    >
                      +92 335-2787-275
                    </a>
                  </li>
                  <li>
                    <strong>📧 Email:</strong>{" "}
                    <a
                      href="mailto:sales@serenetowel.com"
                      className="text-[#a67c52] hover:underline"
                    >
                      sales@serenetowel.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Form */}
              <div>
                {status === "success" ? (
                  <div className="text-center py-10">
                    <h3 className="text-2xl font-bold text-[#a67c52] mb-2">
                      ✅ Message Sent!
                    </h3>
                    <p className="text-gray-700">
                      Thank you for reaching out. We’ll get back to you soon.
                    </p>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="mt-6 bg-[#a67c52] text-white px-6 py-3 rounded-lg hover:bg-[#8b623e] transition"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2">
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
                      required
                    />

                    <textarea
                      name="message"
                      placeholder="Your message..."
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#a67c52] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
                      required
                    />

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className={`${
                        status === "sending"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#a67c52] hover:bg-[#8b623e]"
                      } text-white px-6 py-3 rounded-lg transition w-full`}
                    >
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "error" && (
                      <p className="text-red-600 text-sm text-center">
                        ❌ Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
