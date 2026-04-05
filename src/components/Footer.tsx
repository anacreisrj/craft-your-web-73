import { Mail, Globe, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xs">P&A</span>
              </div>
              <span className="font-display text-lg font-semibold text-primary">Pedro & Ana</span>
            </div>
            <p className="text-footer-foreground/70 text-sm leading-relaxed font-body">
              World champion Brazilian Zouk and Lambada instructors sharing our passion for dance through personalized mentorship and community.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-secondary-foreground">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:pedroandanadancers@gmail.com" className="flex items-center gap-3 text-footer-foreground/70 hover:text-primary transition-colors text-sm font-body">
                <Mail size={16} /> pedroandanadancers@gmail.com
              </a>
              <a href="https://instagram.com/pedroandanadance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-footer-foreground/70 hover:text-primary transition-colors text-sm font-body">
                <Globe size={16} /> @pedroandanadance
              </a>
              <p className="flex items-center gap-3 text-footer-foreground/70 text-sm font-body">
                <MapPin size={16} /> Based in the USA
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-secondary-foreground">Quick Links</h3>
            <div className="space-y-3">
              <a href="#instructors" className="block text-footer-foreground/70 hover:text-primary transition-colors text-sm font-body">Meet Your Instructors</a>
              <a href="#mentorship" className="block text-footer-foreground/70 hover:text-primary transition-colors text-sm font-body">Mentorship Program</a>
              <a href="#zoukmov" className="block text-footer-foreground/70 hover:text-primary transition-colors text-sm font-body">Zouk Mov Community</a>
            </div>
          </div>
        </div>

        <div className="border-t border-footer-foreground/10 mt-12 pt-8 text-center">
          <p className="text-footer-foreground/50 text-xs font-body">© 2026 Pedro & Ana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
