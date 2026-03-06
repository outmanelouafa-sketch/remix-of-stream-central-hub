import { MessageCircle } from "lucide-react";

import testimonial1 from "@/assets/scraped/testimonial-1.jpg";
import testimonial2 from "@/assets/scraped/testimonial-2.jpg";
import testimonial3 from "@/assets/scraped/testimonial-3.jpg";
import testimonial4 from "@/assets/scraped/testimonial-4.jpg";
import testimonial5 from "@/assets/scraped/testimonial-5.jpg";
import testimonial6 from "@/assets/scraped/testimonial-6.jpg";
import testimonial7 from "@/assets/scraped/testimonial-7.jpg";
import testimonial8 from "@/assets/scraped/testimonial-8.jpg";

const testimonials = [
  { src: testimonial1, alt: "WhatsApp-gesprek met klant 1" },
  { src: testimonial2, alt: "WhatsApp-gesprek met klant 2" },
  { src: testimonial3, alt: "WhatsApp-gesprek met klant 3" },
  { src: testimonial4, alt: "WhatsApp-gesprek met klant 4" },
  { src: testimonial5, alt: "WhatsApp-gesprek met klant 5" },
  { src: testimonial6, alt: "WhatsApp-gesprek met klant 6" },
  { src: testimonial7, alt: "WhatsApp-gesprek met klant 7" },
  { src: testimonial8, alt: "WhatsApp-gesprek met klant 8" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 section-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-whatsapp/10 border border-whatsapp/20 mb-4">
            <MessageCircle className="w-7 h-7 text-whatsapp" />
          </div>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Echte klanten
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Wat onze klanten <span className="text-gradient-red">zeggen</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Echte WhatsApp-gesprekken met tevreden klanten. Bekijk hoe we onze klanten helpen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="aspect-[9/16] relative overflow-hidden bg-muted">
                <img
                  src={t.src}
                  alt={t.alt}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-xs text-muted-foreground font-medium">
                  Echt WhatsApp-gesprek
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
