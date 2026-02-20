import { Smartphone, Monitor, Tv, Apple, Chrome, Settings2 } from "lucide-react";

const devices = [
  { icon: Tv, name: "Smart TV", desc: "Samsung, LG, Sony" },
  { icon: Smartphone, name: "Android", desc: "Phone & Tablet" },
  { icon: Apple, name: "iOS", desc: "iPhone & iPad" },
  { icon: Monitor, name: "PC / Mac", desc: "Windows & macOS" },
  { icon: Settings2, name: "MAG Box", desc: "All MAG devices" },
  { icon: Chrome, name: "Chromecast", desc: "Google TV" },
];

const steps = [
  {
    number: "01",
    title: "Subscribe to a Plan",
    desc: "Choose your subscription plan and complete the purchase. You'll receive your credentials via email within minutes.",
  },
  {
    number: "02",
    title: "Download the App",
    desc: "Install our recommended IPTV player for your device (IPTV Smarters Pro, TiviMate, or VLC).",
  },
  {
    number: "03",
    title: "Enter Your Credentials",
    desc: "Open the app, enter your M3U URL or Xtream Codes credentials that we send to your email.",
  },
  {
    number: "04",
    title: "Start Streaming",
    desc: "Enjoy 17,000+ channels and 100,000+ VOD titles. Contact support if you need any help.",
  },
];

const InstallationPage = () => {
  return (
    <div className="min-h-screen section-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Setup Guide</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            Installation <span className="text-gradient-red">Tutorial</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started with PrimeIPTV is simple. Follow these easy steps to start streaming in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
          {steps.map((step) => (
            <div key={step.number} className="card-cinematic rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-6 text-7xl font-extrabold text-primary/5 select-none">
                {step.number}
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-4 relative z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Supported devices */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            Works on <span className="text-gradient-red">All Devices</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {devices.map((device) => {
              const Icon = device.icon;
              return (
                <div key={device.name} className="card-cinematic rounded-2xl p-5 text-center group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground text-sm">{device.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{device.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/#pricing" className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20">
            Subscribe & Get Access
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;
