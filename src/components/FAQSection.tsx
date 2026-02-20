import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What Is IPTV And How Does It Work?",
    answer:
      "IPTV (Internet Protocol Television) delivers TV content over the internet instead of traditional cable or satellite. You get live channels, movies, and series streamed directly to your device — Smart TV, phone, tablet, PC, or set-top box — with no dish or cable required.",
  },
  {
    question: "What Payment Methods Do You Accept?",
    answer:
      "We accept all major payment methods including credit/debit cards (Visa, Mastercard), PayPal, cryptocurrency (Bitcoin, USDT), and various other local payment options. All transactions are 100% secure and encrypted.",
  },
  {
    question: "How Fast Is My IPTV Subscription Activated?",
    answer:
      "Activation is instant! Once your payment is confirmed, your login credentials are sent to your email within minutes. You can start streaming immediately — 24/7, no waiting.",
  },
  {
    question: "Do I Need A Fast Internet Connection?",
    answer:
      "For SD content, a 10 Mbps connection is sufficient. For Full HD we recommend 20 Mbps, and for 4K Ultra HD streaming at least 50 Mbps. Most modern broadband or 4G/5G connections work perfectly.",
  },
  {
    question: "Can I Watch IPTV On Multiple Devices At The Same Time?",
    answer:
      "Yes! Depending on your plan, you can use 1, 2, or more simultaneous connections. Our Family and Premium plans support multiple screens so everyone in the household can stream at once.",
  },
  {
    question: "What If I'm Not Satisfied?",
    answer:
      "We offer a free trial before you commit. If you're not happy with our service after subscribing, contact our support team within 24 hours and we'll work to resolve any issues. Customer satisfaction is our top priority.",
  },
  {
    question: "What Is The Difference Between IPTV And Traditional Cable TV?",
    answer:
      "Traditional cable TV is delivered via physical cables and requires a satellite dish or cable box. IPTV uses your internet connection, giving you more channels, on-demand content, no contracts, and the freedom to watch on any device anywhere in the world — at a fraction of the cost.",
  },
  {
    question: "Which Devices Are Compatible With PrimeIPTV?",
    answer:
      "PrimeIPTV works on virtually every device: Smart TVs (Samsung, LG, Android TV), Amazon Firestick, Apple TV, Chromecast, smartphones and tablets (iOS & Android), Windows/Mac computers, MAG boxes, and more. We provide full setup guides for all devices.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 section-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-red">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about PrimeIPTV. Can't find the answer?
            Chat with our support team.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-surface hover:border-border/80 hover:bg-surface-elevated"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span
                    className={`text-base sm:text-lg font-semibold transition-colors duration-200 pr-4 ${
                      isOpen ? "text-primary" : "text-foreground group-hover:text-foreground"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-primary-foreground rotate-180"
                        : "bg-surface-elevated text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer panel */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm sm:text-base border-t border-border/40 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl border border-border bg-surface-elevated">
          <p className="text-foreground font-semibold mb-1">Still have questions?</p>
          <p className="text-muted-foreground text-sm mb-5">
            Our support team is available 24/7 on WhatsApp and Telegram.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hello!%20I%20have%20a%20question%20about%20PrimeIPTV."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm"
          >
            Chat With Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
