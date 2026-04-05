import heroPhoto from "@/assets/hero-pedro-ana.png";
import logo from "@/assets/logo-pa.png";

const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Left */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <img src={logo} alt="P&A Logo" className="w-16 h-16 rounded-full object-cover" width={64} height={64} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight">
            Pedro & Ana
          </h1>
          <p className="text-foreground text-lg md:text-xl font-body">
            Passionated Brazilian zouk and lambada instructors
          </p>
          <ul className="text-muted-foreground font-body text-sm space-y-1">
            <li>Over 10 years of experience</li>
            <li>World Champions</li>
            <li>From Rio, Brazil</li>
            <li>Based in the USA</li>
          </ul>
          <a href="#contact" className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity mt-2">
            Book Now!
          </a>
        </div>

        {/* Right — image */}
        <div className="flex-1 max-w-lg w-full">
          <img
            src={heroPhoto}
            alt="Pedro and Ana - Brazilian Zouk World Champions"
            className="w-full h-auto rounded-lg object-cover aspect-[3/4]"
            width={800}
            height={1024}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
