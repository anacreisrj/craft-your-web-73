import mentorshipPhoto from "@/assets/mentorship-photo.png";
import { FileText, MessageCircle, Users } from "lucide-react";

const MentorshipSection = () => {
  return (
    <section id="mentorship" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
          P&A Mentorship
        </h2>
        <p className="text-muted-foreground text-center font-body text-lg mb-16">
          Made for your Dance Journey
        </p>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto mb-16">
          {/* Photo */}
          <div className="flex-1 flex justify-center">
            <img
              src={mentorshipPhoto}
              alt="Pedro and Ana dancing"
              className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20"
              loading="lazy"
              width={640}
              height={640}
            />
          </div>

          {/* Deals */}
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 italic">
              Exclusive Deals
            </h3>

            <div className="space-y-5">
              <div className="bg-card rounded-xl p-5 border border-border">
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">1h Online Private</h4>
                <p className="text-primary font-body font-semibold mb-2">25% OFF in Privates Packages</p>
                <p className="text-muted-foreground font-body text-xl font-bold">$200 USD/month</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground font-body text-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText size={16} className="text-primary" />
                  </div>
                  PDF summary
                </div>
                <div className="flex items-center gap-3 text-foreground font-body text-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={16} className="text-primary" />
                  </div>
                  Weekly Individual feedback
                </div>
                <div className="flex items-center gap-3 text-foreground font-body text-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users size={16} className="text-primary" />
                  </div>
                  Online community Membership
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Start Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
