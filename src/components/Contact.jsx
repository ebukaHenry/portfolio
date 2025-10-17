import { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        setLoading(true);

        try {
            const res = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {Accept: "application/json"},
        });

        if (res.ok) {
            form.reset();
            setSubmitted(true);
        }
        } catch (error) {
           console.error(error) 
        } finally {
            setLoading(false);
        }
    };

  return (
    <section id="contact" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12">
          I’d love to hear from you! Whether you want to talk about a project, a job opportunity, or just say hi 👋 — drop me a message below.
        </p>
        {submitted ?
         (
          <p className="text-center text-green-600 font-semibold">
            ✅ Message sent! I'll get back to you soon.
          </p>
        )
        : 
        (
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mblzqwpg"
          method="POST"
          className="bg-white shadow-md rounded-lg p-8 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending message..." : "Send Message"}
          </button>
        </form>
        )}
        <div className="mt-12 flex justify-center space-x-6">

  <a
    href="https://github.com/ebukaHenry"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 text-2xl transition duration-300"
  >
    <i className="fa-brands fa-github"></i>
  </a>

  <a
    href="https://linkedin.com/in/ebuka-henry-964655206"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 text-2xl transition duration-300"
  >
    <i className="fa-brands fa-linkedin"></i>
  </a>

  <a
    href="mailto:okaforebuka47@gmail.com"
    className="text-gray-600 hover:text-gray-900 text-2xl transition duration-300"
  >
    <i className="fa-solid fa-envelope"></i>
  </a>

  <a
    href="https://twitter.com/henrrySuccess"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 text-2xl transition duration-300"
  >
    <i className="fa-brands fa-x-twitter"></i>
  </a>
</div>

      </div>
    </section>
  );
}

export default Contact;
