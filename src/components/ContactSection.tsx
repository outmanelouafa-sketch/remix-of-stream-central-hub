import { MessageCircle, Send, Mail, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim() || form.message.length < 10) e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Support</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Get In <span className="text-gradient-red">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Our support team is available 24/7. Reach us through your preferred channel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Quick Contact */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Quick Contact</h3>

            <div className="space-y-4 mb-8">
              {/* WhatsApp */}
              <a
                href="https://wa.me/1234567890?text=Hello!%20I%20am%20interested%20in%20your%20IPTV%20subscription."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-whatsapp/20 bg-whatsapp/5 hover:bg-whatsapp/10 hover:border-whatsapp/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-whatsapp/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-whatsapp" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                </div>
                <span className="ml-auto text-xs px-3 py-1 rounded-full bg-whatsapp/20 text-whatsapp font-medium">
                  Online
                </span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/primeiptv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-telegram/20 bg-telegram/5 hover:bg-telegram/10 hover:border-telegram/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-telegram/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Send className="w-6 h-6 text-telegram" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telegram</p>
                  <p className="text-sm text-muted-foreground">Join our support channel</p>
                </div>
                <span className="ml-auto text-xs px-3 py-1 rounded-full bg-telegram/20 text-telegram font-medium">
                  24/7
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:support@primeiptv.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">support@primeiptv.com</p>
                </div>
              </a>
            </div>

            {/* Response time */}
            <div className="p-4 rounded-xl bg-surface-elevated border border-border">
              <p className="text-sm text-muted-foreground">
                ⚡ <span className="text-foreground font-medium">Average response time: under 5 minutes</span> via WhatsApp or Telegram.
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                  {errors.name && <p className="text-primary text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                  {errors.email && <p className="text-primary text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  />
                  {errors.message && <p className="text-primary text-xs mt-1">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-cta w-full py-4 rounded-xl font-bold text-sm shadow-lg shadow-primary/20">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
