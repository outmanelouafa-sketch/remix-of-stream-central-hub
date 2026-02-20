import { Link } from "react-router-dom";
import { Play, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import heroF1 from "@/assets/hero-f1.jpg";
import heroFootball from "@/assets/hero-football.jpg";
import heroBasketball from "@/assets/hero-basketball.jpg";
import heroMma from "@/assets/hero-mma.jpg";

const slides = [
  { src: heroBg, label: "🎬 Movies & Series" },
  { src: heroF1, label: "🏎️ Formula 1" },
  { src: heroFootball, label: "⚽ Football" },
  { src: heroBasketball, label: "🏀 Basketball" },
  { src: heroMma, label: "🥊 UFC / MMA" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setFading(false);
        setPrev(null);
      }, 1000); // crossfade duration
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setPrev(current);
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
      setPrev(null);
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {/* Previous slide (fading out) */}
        {prev !== null && (
          <img
            key={`prev-${prev}`}
            src={slides[prev].src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ opacity: fading ? 0 : 1, transition: "opacity 1s ease-in-out" }}
          />
        )}
        {/* Current slide (fading in) */}
        <img
          key={`curr-${current}`}
          src={slides[current].src}
          alt={slides[current].label}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            opacity: fading ? 0 : 1,
            transition: "opacity 1s ease-in-out",
            transform: fading ? "scale(1.03)" : "scale(1)",
            transitionProperty: "opacity, transform",
            transitionDuration: "1s",
            transitionTimingFunction: "ease-in-out",
          }}
          loading="eager"
        />
        <div className="absolute inset-0 overlay-hero" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pt-24 pb-16">
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

      {/* Slide indicators + labels */}
      <div className="absolute bottom-28 right-8 z-20 flex flex-col items-end gap-2">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`flex items-center gap-2 group transition-all duration-300 ${
              idx === current ? "opacity-100" : "opacity-40 hover:opacity-70"
            }`}
          >
            <span
              className={`text-xs font-medium text-foreground transition-all duration-300 ${
                idx === current ? "block" : "hidden group-hover:block"
              }`}
            >
              {slide.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-500 ${
                idx === current
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-foreground/50"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <div className="w-0.5 h-8 bg-gradient-to-b from-transparent to-muted-foreground rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;
