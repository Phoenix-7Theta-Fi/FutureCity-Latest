const Footer = () => {
  return (
    <footer className="bg-primary-dark py-6 text-center border-t border-secondary-dark">
      <div className="container mx-auto">
        <p className="text-accent-gold animate-subtle-pulse">
          &copy; 2023 Future City. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-foreground hover:text-accent-gold transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-foreground hover:text-accent-gold transition duration-300">
            Terms of Service
          </a>
          <a href="#" className="text-foreground hover:text-accent-gold transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
