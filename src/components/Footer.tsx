import {
  FaGithub,

  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4 lg:px-8">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-bold text-gray-900">
            <div className="brand-gradient flex h-7 w-7 items-center justify-center rounded-md text-xs text-white">
              DS
            </div>

            <span>
              Dev <span className="gradient-text">Stack</span>
            </span>
          </div>

          <p className="mt-4 max-w-xs text-xs leading-5 text-gray-500">
            Build a modern technology stack by exploring the tools
            and technologies that fit your next project.
          </p>

          <div className="mt-5 flex gap-3 text-gray-500">
            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-xs font-bold uppercase text-gray-900">
            Product
          </h3>

          <div className="mt-4 space-y-3 text-xs text-gray-500">
            <a href="#home" className="block hover:text-pink-500">
              Home
            </a>
            <a href="#technologies" className="block hover:text-pink-500">
              Technologies
            </a>
            <a href="#projects" className="block hover:text-pink-500">
              Projects
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-bold uppercase text-gray-900">
            Company
          </h3>

          <div className="mt-4 space-y-3 text-xs text-gray-500">
            <a href="#about" className="block hover:text-pink-500">
              About
            </a>
            <a href="#contact" className="block hover:text-pink-500">
              Contact
            </a>
            <a href="#" className="block hover:text-pink-500">
              Careers
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs font-bold uppercase text-gray-900">
            Legal
          </h3>

          <div className="mt-4 space-y-3 text-xs text-gray-500">
            <a href="#" className="block hover:text-pink-500">
              Privacy Policy
            </a>
            <a href="#" className="block hover:text-pink-500">
              Terms of Service
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-5 text-[10px] text-gray-400 sm:flex-row lg:px-8">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;