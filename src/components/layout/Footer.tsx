import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex flex-col items-start">
              <span className="font-serif text-2xl font-semibold tracking-wide">
                ZUNITE STYLE
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-70 -mt-1">
                Elevate Your Elegance
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              Premium fashion for the modern individual. Quality craftsmanship meets timeless design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              {['Men', 'Women', 'Kids', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-sm opacity-70">Shipping & Returns</span>
              </li>
              <li>
                <span className="text-sm opacity-70">Privacy Policy</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">
              Connect
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm opacity-70">
              Subscribe for exclusive offers and updates.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} ZUNITE STYLE. All rights reserved.
          </p>
          <p className="text-xs opacity-60">
            Designed with passion for timeless elegance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
