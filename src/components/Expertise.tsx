const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "200+", label: "Projects Delivered" },
  { number: "50+", label: "Enterprise Clients" },
  { number: "99.9%", label: "Client Satisfaction" },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              Expertise You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in telecommunications consulting, Televisor Connect has helped businesses worldwide transform their communication infrastructure.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of certified professionals brings deep technical knowledge combined with strategic business insight to deliver solutions that drive real results.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground">Industry-leading certifications and partnerships</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground">Proven track record across multiple sectors</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground">Commitment to innovation and best practices</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-muted p-8 rounded-lg text-center hover:bg-blue-light transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
