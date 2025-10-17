function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center mt-16">
      <p className="text-sm">
        © {new Date().getFullYear()} Ebuka Henry. All rights reserved.
      </p>

      <p className="text-xs mt-2">
        Built with ❤️ using React & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;
