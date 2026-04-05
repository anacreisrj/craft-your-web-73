import communityImg from "@/assets/zouk-community.jpg";

const ZoukMovSection = () => {
  return (
    <section id="zoukmov" className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="flex-1">
            <img
              src={communityImg}
              alt="Zouk Mov dance community"
              className="w-full rounded-xl object-cover aspect-video"
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>
          <div className="flex-1">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Zouk Mov
            </h2>
            <p className="text-secondary-foreground/70 font-body leading-relaxed mb-6">
              More than a dance — it's a movement. Zouk Mov is our community dedicated to growing Brazilian Zouk culture through events, socials, and shared passion for the dance.
            </p>
            <ul className="space-y-3 text-secondary-foreground/80 font-body text-sm mb-8">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Regular social dance events
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Community workshops & intensives
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Connect with dancers nationwide
              </li>
            </ul>
            <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              Join the Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoukMovSection;
