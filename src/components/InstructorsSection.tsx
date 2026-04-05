import pedroPic from "@/assets/instructor-pedro.jpg";
import anaPic from "@/assets/instructor-ana.jpg";

const InstructorsSection = () => {
  return (
    <section id="instructors" className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground text-center mb-4">
          Meet Your Instructors
        </h2>
        <p className="text-secondary-foreground/70 text-center font-body max-w-2xl mx-auto mb-16">
          World champions with over 10 years of experience dedicated to sharing the beauty of Brazilian Zouk and Lambada.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Pedro */}
          <div className="flex flex-col items-center text-center">
            <img
              src={pedroPic}
              alt="Pedro - Brazilian Zouk Instructor"
              className="w-64 h-64 rounded-full object-cover mb-6 border-4 border-primary/30"
              loading="lazy"
              width={640}
              height={800}
            />
            <h3 className="font-display text-2xl font-semibold text-secondary-foreground mb-2">Pedro</h3>
            <p className="text-primary font-body text-sm font-semibold mb-3">Lead Instructor & Choreographer</p>
            <p className="text-secondary-foreground/70 font-body text-sm leading-relaxed max-w-xs">
              With a deep understanding of body mechanics and musicality, Pedro brings energy and precision to every class. His innovative teaching style makes complex moves accessible to all levels.
            </p>
          </div>

          {/* Ana */}
          <div className="flex flex-col items-center text-center">
            <img
              src={anaPic}
              alt="Ana - Brazilian Zouk Instructor"
              className="w-64 h-64 rounded-full object-cover mb-6 border-4 border-primary/30"
              loading="lazy"
              width={640}
              height={800}
            />
            <h3 className="font-display text-2xl font-semibold text-secondary-foreground mb-2">Ana</h3>
            <p className="text-primary font-body text-sm font-semibold mb-3">Lead Instructor & Performer</p>
            <p className="text-secondary-foreground/70 font-body text-sm leading-relaxed max-w-xs">
              Ana's grace and expressiveness on the dance floor are unmatched. She focuses on connection, flow, and helping students discover their own unique dance voice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
