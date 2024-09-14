const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Footer Text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Madan Bhat. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
