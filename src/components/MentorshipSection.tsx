import { Users, Video, Star, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Private Lessons",
    description: "One-on-one sessions tailored to your level and goals, with personalized feedback.",
  },
  {
    icon: Users,
    title: "Group Workshops",
    description: "Intensive workshops covering technique, musicality, and partner connection.",
  },
  {
    icon: Star,
    title: "Competition Prep",
    description: "Specialized training for dancers preparing for competitions at any level.",
  },
  {
    icon: MessageCircle,
    title: "Ongoing Support",
    description: "Continuous guidance and practice materials between sessions to accelerate your growth.",
  },
];

const MentorshipSection = () => {
  return (
    <section id="mentorship" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Mentorship Program
        </h2>
        <p className="text-muted-foreground text-center font-body max-w-2xl mx-auto mb-16">
          A personalized journey designed to transform your dancing, whether you're just starting or competing on the world stage.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
