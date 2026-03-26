import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, Globe, Shield, Zap, BarChart3, 
  Truck, Package, Ship, ArrowRight, CheckCircle2, 
  Star, Play, MapPin, Phone, Mail, Linkedin, Twitter
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <Zap className="text-navy fill-navy w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold text-white tracking-tighter">SYNAVIX</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Technology', 'Global Network', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-slate-300 hover:text-accent transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-white hover:text-accent transition-colors">Client Portal</button>
          <button className="bg-accent hover:bg-accent-hover text-navy font-bold py-2.5 px-6 rounded-full text-sm transition-all transform hover:scale-105">
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-navy p-6 md:hidden border-t border-white/10"
          >
            <div className="flex flex-col gap-4">
              {['Services', 'Technology', 'Global Network', 'About'].map((item) => (
                <a key={item} href="#" className="text-lg font-medium text-white">{item}</a>
              ))}
              <hr className="border-white/10" />
              <button className="text-white text-left">Client Portal</button>
              <button className="bg-accent text-navy font-bold py-3 px-6 rounded-lg text-center">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Next-Gen Global Logistics
          </div>
          <h1 className="text-5xl lg:text-7xl text-white leading-[1.1] mb-6">
            Supply Chain <span className="text-accent italic">Velocity</span> Reimagined.
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            Synavix integrates advanced AI-driven distribution with a global physical network to move your products faster, safer, and smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-accent hover:bg-accent-hover text-navy font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 group transition-all">
              Request Custom Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all">
              <Play className="w-5 h-5 fill-white" />
              Watch Network Tour
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">99.9%</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500">On-Time Delivery</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">140+</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500">Countries Served</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">2.4M</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500">Annual Shipments</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
              alt="Modern Warehouse" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
            
            {/* Floating UI Element */}
            <div className="absolute bottom-6 left-6 right-6 bg-navy/80 backdrop-blur-md border border-white/10 p-4 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Live Tracking</span>
                <span className="text-[10px] text-slate-400">ID: SNX-9942-B</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Truck className="text-accent w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-accent"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[10px] text-white font-medium">Singapore Hub</span>
                    <span className="text-[10px] text-white font-medium">Rotterdam Port</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-accent/30 rounded-bl-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
          Trusted by Global Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">
          {['FORBES', 'LOGITECH', 'MAERSK', 'AMAZON', 'SAMSUNG'].map((brand) => (
            <span key={brand} className="text-2xl font-black tracking-tighter text-navy">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Freight & Logistics",
      desc: "Multi-modal transport solutions across air, sea, and land with optimized routing algorithms.",
      features: ["Real-time visibility", "Customs brokerage", "Priority handling"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Distribution",
      desc: "Strategic warehousing and last-mile delivery networks in over 140 countries.",
      features: ["Inventory management", "Fulfillment centers", "Cross-docking"]
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Product Supply",
      desc: "End-to-end sourcing and procurement services to streamline your manufacturing pipeline.",
      features: ["Supplier auditing", "Quality control", "Just-in-time delivery"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Comprehensive Supply Chain Infrastructure</h2>
          <p className="text-slate-600 text-lg">
            We don't just move boxes; we engineer competitive advantages through logistics precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-navy text-accent rounded-xl flex items-center justify-center mb-8">
                {s.icon}
              </div>
              <h3 className="text-2xl mb-4">{s.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{s.desc}</p>
              <ul className="space-y-3">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm font-medium text-navy">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-10 text-navy font-bold flex items-center gap-2 group">
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 transform translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
            The Intelligence Behind the <span className="text-accent">Movement.</span>
          </h2>
          <div className="space-y-8">
            {[
              { 
                icon: <BarChart3 />, 
                title: "Predictive Analytics", 
                desc: "AI models that anticipate port congestion and weather disruptions before they happen." 
              },
              { 
                icon: <Zap />, 
                title: "Unified API Integration", 
                desc: "Connect your ERP directly to our global network for seamless data flow." 
              },
              { 
                icon: <Shield />, 
                title: "Blockchain Security", 
                desc: "Immutable ledger tracking for high-value assets and sensitive pharmaceutical cargo." 
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-accent">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-navy-light border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Synavix_Dashboard_v4.2</div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] text-slate-500 uppercase block mb-1">Active Routes</span>
                  <span className="text-2xl font-bold text-accent">1,284</span>
                </div>
                <div className="bg-navy p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] text-slate-500 uppercase block mb-1">Avg. Latency</span>
                  <span className="text-2xl font-bold text-white">12ms</span>
                </div>
              </div>
              
              <div className="bg-navy p-6 rounded-xl border border-white/5">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[10px] text-slate-500 uppercase">Global Load Distribution</span>
                  <span className="text-xs text-accent">Optimal</span>
                </div>
                <div className="flex items-end gap-2 h-32">
                  {[40, 70, 45, 90, 65, 80, 55, 75, 95, 60].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="flex-1 bg-accent/20 border-t-2 border-accent rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-accent text-navy p-6 rounded-2xl shadow-xl max-w-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 fill-navy" />
              <span className="text-xs font-bold uppercase">Award Winning</span>
            </div>
            <p className="text-sm font-bold leading-tight">Best Logistics Tech 2025 - SupplyChainX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuoteFunnel = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    volume: '',
    email: ''
  });

  const nextStep = () => setStep(s => s + 1);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200 shadow-sm relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-slate-200">
            <motion.div 
              className="h-full bg-accent"
              animate={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Get Your Custom Logistics Strategy</h2>
            <p className="text-slate-500">Step {step} of 3: {step === 1 ? 'Service Type' : step === 2 ? 'Volume Details' : 'Contact Info'}</p>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {['Freight', 'Distribution', 'Supply'].map(type => (
                  <button 
                    key={type}
                    onClick={() => { setFormData({...formData, type}); nextStep(); }}
                    className={`p-6 rounded-2xl border-2 transition-all text-left ${formData.type === type ? 'border-accent bg-accent/5' : 'border-slate-200 bg-white hover:border-accent/50'}`}
                  >
                    <div className="w-10 h-10 bg-navy text-accent rounded-lg flex items-center justify-center mb-4">
                      {type === 'Freight' ? <Truck /> : type === 'Distribution' ? <Globe /> : <Package />}
                    </div>
                    <span className="font-bold text-navy">{type}</span>
                  </button>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['< 100 Units/mo', '100-1000 Units/mo', '1000-5000 Units/mo', '5000+ Units/mo'].map(vol => (
                    <button 
                      key={vol}
                      onClick={() => { setFormData({...formData, volume: vol}); nextStep(); }}
                      className="p-4 rounded-xl border-2 border-slate-200 bg-white hover:border-accent transition-all text-left font-medium"
                    >
                      {vol}
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="text-slate-400 text-sm font-medium hover:text-navy">← Back to previous step</button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <input 
                  type="email" 
                  placeholder="Enter your corporate email"
                  className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-accent outline-none transition-all"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <button className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-navy/90 transition-all flex items-center justify-center gap-2">
                  Generate My Quote
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button onClick={() => setStep(2)} className="text-slate-400 text-sm font-medium hover:text-navy w-full text-center">← Back to previous step</button>
                <p className="text-[10px] text-slate-400 text-center">By submitting, you agree to our B2B Privacy Policy and Terms of Service.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Zap className="text-navy fill-navy w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">SYNAVIX</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Engineering the future of global commerce through intelligent logistics and distribution.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-navy transition-all"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-navy transition-all"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6">Services</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-accent transition-colors">Air Freight</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Ocean Freight</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Warehousing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Supply Sourcing</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Global Network</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Newsroom</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Contact</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-accent" /> Global HQ, Singapore</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-accent" /> +1 (800) SYNAVIX</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-accent" /> solutions@synavix.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2026 Synavix Logistics Global. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Technology />
      <QuoteFunnel />
      <Footer />
    </div>
  );
}
