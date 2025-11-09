import Header from "@/components/Header";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
                About Televisor Connect
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A trusted partner in telecommunications transformation, combining technical excellence 
                with strategic insight to deliver exceptional results.
              </p>
            </div>
          </div>
        </section>
        
        <Expertise />
        
        {/* Mission Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Televisor Connect, we believe that telecommunications infrastructure should be a strategic 
                asset, not a technical burden. Our mission is to empower organizations with the connectivity 
                and communication systems they need to thrive in an increasingly digital world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We achieve this by combining deep technical expertise with a consultative approach that puts 
                your business objectives first. Every solution we deliver is tailored to your unique needs, 
                scalable for future growth, and backed by our commitment to excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're optimizing existing infrastructure, embarking on digital transformation, or 
                building new capabilities from the ground up, we're here to guide you every step of the way.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how our expertise can help transform your telecommunications infrastructure
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
