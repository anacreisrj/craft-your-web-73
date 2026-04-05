import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-pa.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-nav text-nav-foreground sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="P&A Logo" className="w-11 h-11 rounded-full object-cover" width={44} height={44} />
          <span className="font-display text-xl font-semibold text-primary">Pedro & Ana</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#instructors" className="text-nav-foreground/90 hover:text-primary transition-colors text-sm font-medium">About Us</a>
          <a href="#mentorship" className="text-nav-foreground/90 hover:text-primary transition-colors text-sm font-medium">Mentorship</a>
          <a href="#zoukmov" className="text-nav-foreground/90 hover:text-primary transition-colors text-sm font-medium">Zouk Mov</a>
          <a href="#contact" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">Start Now</a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-nav-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-nav border-t border-nav-foreground/10 px-4 pb-4 flex flex-col gap-3">
          <a href="#instructors" className="text-nav-foreground/90 py-2 text-sm" onClick={() => setMobileOpen(false)}>About Us</a>
          <a href="#mentorship" className="text-nav-foreground/90 py-2 text-sm" onClick={() => setMobileOpen(false)}>Mentorship</a>
          <a href="#zoukmov" className="text-nav-foreground/90 py-2 text-sm" onClick={() => setMobileOpen(false)}>Zouk Mov</a>
          <a href="#contact" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold text-center" onClick={() => setMobileOpen(false)}>Start Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
