import { Mail, Globe } from "lucide-react";

const ContactBar = () => {
  return (
    <section className="bg-contact-bar py-10" id="contact">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-8">
        <a href="mailto:pedroandanadancers@gmail.com" className="flex items-center gap-3 text-secondary font-body text-sm hover:text-primary transition-colors">
          <Mail size={20} />
          pedroandanadancers@gmail.com
        </a>
        <a href="https://instagram.com/pedroandanadance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary font-body text-sm hover:text-primary transition-colors">
          <Globe size={20} />
          @pedroandanadance
        </a>
      </div>
    </section>
  );
};

export default ContactBar;
