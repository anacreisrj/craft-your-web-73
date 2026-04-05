import logo from "@/assets/logo-pa.png";

const InstructorsSection = () => {
  return (
    <section id="instructors" className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img src={logo} alt="P&A Logo" className="w-12 h-12 rounded-full object-cover" width={48} height={48} />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground">
            About Us
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-secondary-foreground/80 font-body leading-relaxed">
          <p>
            Pedro Castro and Ana Reis are renowned Brazilian Zouk World Champions, All-Stars in Jack and Jill competitions, and certified judges with the Brazilian Zouk Dance Council (BZDC).
          </p>
          <p>
            Originally from Rio de Janeiro, Brazil, Pedro and Ana have over 20 years of combined dance training, with a background in Contemporary Dance, Jazz, and Classical Ballet. This diverse training has deeply influenced their mastery of Brazilian Zouk, adding a rich level of artistry, expression, and precision in their performances and teaching. With extensive experience teaching at Alex de Carvalho's Dance School in Brazil, they have refined an engaging and accessible teaching style for students of all levels.
          </p>
          <p>
            Now based in the USA, Pedro and Ana are known for their dynamic performances and impressive achievements, including multiple podium finishes in Brazilian Zouk dance competitions. They have earned a reputation for delivering world-class instruction while promoting Brazilian Zouk culture globally. They are highly sought after for their classes and have taught at premier Zouk festivals in Canada, the USA, Brazil, and Europe.
          </p>
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Book Now!
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
