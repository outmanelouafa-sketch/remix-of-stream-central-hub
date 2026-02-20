import { Link } from "react-router-dom";
import { Play, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="IPTV Streaming Background"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 overlay-hero" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">#1 IPTV Subscription Provider</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
            <span className="text-foreground">BEST IPTV</span>
            <br />
            <span className="text-gradient-red">SUBSCRIPTION</span>
            <br />
            <span className="text-foreground">PROVIDER</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up delay-200">
            Access <strong className="text-foreground">17,000+ live channels</strong>, 
            100,000+ VOD titles, and premium sports coverage. Stream on any device, 
            anywhere in the world.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-10 animate-fade-in-up delay-300">
            {[
              { value: "17K+", label: "Live Channels" },
              { value: "100K+", label: "VOD Titles" },
              { value: "4K", label: "Ultra HD Quality" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
            <a
              href="#pricing"
              className="btn-cta flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold shadow-lg shadow-primary/30"
            >
              <Play className="w-5 h-5 fill-current" />
              Get Started Now
            </a>
            <a
              href="#pricing"
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border border-foreground/30 text-foreground hover:bg-foreground/10 transition-all duration-300"
            >
              View Plans
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <div className="w-0.5 h-8 bg-gradient-to-b from-transparent to-muted-foreground rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;
