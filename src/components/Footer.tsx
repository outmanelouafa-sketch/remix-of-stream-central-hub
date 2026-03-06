import { Link } from "react-router-dom";
import { Tv, MessageCircle, Send, Mail, ChevronRight } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const Footer = () => {
  const { data: settings } = useSiteSettings();

  const whatsappUrl = `https://wa.me/${settings?.whatsapp_number || "1234567890"}`;

  const footerLinks = {
    "Pagina's": [
      { label: "Home", href: "/" },
      { label: "Installatiehandleiding", href: "/installation" },
      { label: "Zenderlijst", href: "/channels" },
    ],
    Support: [
      { label: "WhatsApp-support", href: whatsappUrl },
    ],
  };

  return (
    <footer className="border-t border-border section-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Tv className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Best<span className="text-primary">IPTV Deals</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Premium IPTV-deals met 17.000+ zenders, 100.000+ VOD-titels en 24/7 premium ondersteuning.
            </p>
            <div className="flex gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-whatsapp/10 border border-whatsapp/20 flex items-center justify-center hover:bg-whatsapp/20 transition-colors">
                <MessageCircle className="w-4 h-4 text-whatsapp" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") || link.href.startsWith("mailto") ? (
                      <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-primary" />
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-primary" />
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Best IPTV Deals. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
