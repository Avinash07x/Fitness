import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const KaleoWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#ranch', label: 'Ranch life' },
    { href: '#about', label: 'About us' },
    { href: '#events', label: 'Events' },
    { href: '#features', label: 'Directions' },
    { href: '#house', label: 'Houses' }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-2xl font-bold tracking-tight">
              <div className="w-12 h-12 bg-stone-900 text-stone-50 flex items-center justify-center rounded-sm">
                KL
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-stone-600 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-900 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <a
                href="#contact"
                className="bg-stone-900 text-stone-50 px-6 py-2 rounded-sm text-sm font-medium hover:bg-stone-700 transition-colors"
              >
                Book a Visit
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-medium hover:text-stone-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block bg-stone-900 text-stone-50 px-6 py-2 rounded-sm text-sm font-medium text-center hover:bg-stone-700 transition-colors"
              >
                Book a Visit
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-600">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm mx-auto mb-6 flex items-center justify-center rounded-sm">
              <span className="text-2xl font-bold">KL</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight">
            Kaleo
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed mb-12">
            Kaleo is a modern ranch retreat designed for quiet escapes, outdoor living, and meaningful gatherings. From scenic views to curated experiences, Kaleo offers a place to slow down, reconnect, and enjoy nature with intention.
          </p>
          <a
            href="#ranch"
            className="inline-block text-sm font-medium text-white hover:text-stone-300 transition-colors"
          >
            Discover ↓
          </a>
        </div>
      </section>

      {/* Ranch Life Section */}
      <section id="ranch" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">
              What Lives Here
            </p>
            <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl mx-auto">
              Kaleo is more than a home — it's a living rhythm. Open fields. Wooden fences weathered by time. Horses grazing at dawn. Smoke curling from the hearth as dusk settles in.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/5] bg-stone-200 rounded-sm overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-stone-400 to-stone-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          <h3 className="text-5xl md:text-7xl font-light uppercase mb-8 tracking-wide">
            Breath
          </h3>
          <a
            href="#contact"
            className="inline-block bg-white text-stone-900 px-8 py-3 rounded-sm text-sm font-medium hover:bg-stone-100 transition-colors"
          >
            Book a Visit
          </a>
        </div>
      </section>

      {/* Events/Location Section */}
      <section id="events" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">
              The Land, The Spirit, The Name
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
              Kaleo was born from the desire to return — to the land, to meaning, to something deeper than speed and noise.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stone-100 p-8 rounded-sm">
              <div className="w-12 h-12 bg-stone-900 flex items-center justify-center rounded-sm mb-6">
                <span className="text-white text-xl">KL</span>
              </div>
              <h3 className="text-2xl font-light uppercase mb-4">
                A return to slow mornings & open skies —
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Kaleo is a retreat built for those who long for peace, space, and simplicity. Set among quiet hills and endless skies, it invites you to slow down, breathe deeply, and rediscover a sense of presence.
              </p>
            </div>
            <div className="bg-stone-100 p-8 rounded-sm">
              <div className="w-12 h-12 bg-stone-900 flex items-center justify-center rounded-sm mb-6">
                <span className="text-white text-xl">KL</span>
              </div>
              <h3 className="text-2xl font-light uppercase mb-4">
                A return to rhythm, movement, and earth —
              </h3>
              <p className="text-stone-600 leading-relaxed">
                At Kaleo, life follows the land. Horses run free, silence speaks, and the wild reminds us who we are. This is where motion meets meaning, and presence becomes a way of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">
              The Things That Still Matter
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
              Kaleo invites you to slow down — to move with purpose, to remember what life feels like when it breathes with meaning.
            </h2>
          </div>

          {/* Feature 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
            <div className="aspect-[4/3] bg-stone-200 rounded-sm overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-amber-200 to-stone-300"></div>
            </div>
            <div>
              <h3 className="text-3xl font-light uppercase mb-6">The Land</h3>
              <div className="w-24 h-px bg-stone-300 mb-6"></div>
              <p className="text-stone-600 leading-relaxed text-lg">
                Kaleo begins with the land — the rolling fields, still mornings, and the quiet rhythms of nature. This is a place where sheep graze under golden light, where time slows, and the earth reminds us what it means to be rooted.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-light uppercase mb-6">The Spirit</h3>
              <div className="w-24 h-px bg-stone-300 mb-6"></div>
              <p className="text-stone-600 leading-relaxed text-lg">
                There's a spirit here that lives in the details — the warmth of shared meals, the honesty of hard work, the echo of footsteps on wooden floors. It's in the stories passed down, in the breath between tasks, in the care behind every simple act.
              </p>
            </div>
            <div className="aspect-[4/3] bg-stone-200 rounded-sm overflow-hidden order-1 md:order-2">
              <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-400"></div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
            <div className="aspect-[4/3] bg-stone-200 rounded-sm overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-stone-400 to-amber-300"></div>
            </div>
            <div>
              <h3 className="text-3xl font-light uppercase mb-6">The Vision</h3>
              <div className="w-24 h-px bg-stone-300 mb-6"></div>
              <p className="text-stone-600 leading-relaxed text-lg">
                Our vision is to protect what matters — space, silence, beauty, and belonging. Kaleo is not just a place to visit, but a way of being. We invite those who seek intention, wonder, and a deeper kind of wealth to return to what truly nourishes.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-block bg-stone-900 text-stone-50 px-8 py-3 rounded-sm text-sm font-medium hover:bg-stone-700 transition-colors"
            >
              Book a Visit
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="house" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-stone-800">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm mx-auto mb-8 flex items-center justify-center rounded-sm">
            <span className="text-2xl font-bold">KL</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-light uppercase mb-8 tracking-wide">
            Western Beauty
          </h3>
          <p className="text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Some moments speak louder than words — a trail through morning mist, a hand on a horse's mane, the shadow of trees dancing on an old wooden floor.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light text-white mb-6 leading-relaxed">
                We welcome kindred spirits. Whether you're looking for silence, space, or simply a change in pace — Kaleo is open.
              </h3>
              <a
                href="#contact"
                className="inline-block bg-white text-stone-900 px-8 py-3 rounded-sm text-sm font-medium hover:bg-stone-100 transition-colors"
              >
                Book a Visit
              </a>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Address</p>
                <p className="text-lg leading-relaxed">
                  Ranch — 1847 Dusty Creek Road<br />
                  Fredericksburg, TX 78624<br />
                  United States
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Phone</p>
                <a href="tel:+15125550198" className="text-lg hover:text-white transition-colors">
                  +1 (512) 555-0198
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-700 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="mb-4 md:mb-0">Copyright © Developed by Lucas Gusso • Powered by Webflow</p>
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-light">Kaleo</span>
              <div className="w-8 h-8 bg-stone-700 flex items-center justify-center rounded-sm">
                <span className="text-xs font-bold">KL</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KaleoWebsite;