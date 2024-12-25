import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-primary-dark py-4 shadow-dark-glow">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-accent-gold font-bold text-2xl hover:text-light-gold transition duration-300">
          Future City
        </Link>
        <div className="space-x-6">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/mission', label: 'Mission' },
            { href: '/vision', label: 'Vision' },
            { href: '/listings', label: 'Listings' },
            { href: '/contact', label: 'Contact' }
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-foreground hover:text-accent-gold 
              transition duration-300 
              hover:scale-110 
              inline-block"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
