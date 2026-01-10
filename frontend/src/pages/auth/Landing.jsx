import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  ChevronRight,
  CloudSun,
  TrendingUp,
  Users,
  Store,
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
  User,
  LayoutDashboard,
  Search,
  Leaf,
  MessageSquare,
  Lightbulb
} from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-fasika-dark min-h-screen text-white font-inter">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-fasika-dark/80 backdrop-blur-md border-b border-fasika-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-fasika-accent rounded-lg flex items-center justify-center">
              <Store size={20} className="text-fasika-dark" />
            </div>
            <span className="text-xl font-bold tracking-tight">Fasika Farmers' Connect</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-fasika-text-muted">
            <a href="#how-it-works" className="hover:text-fasika-accent transition-colors">How it works</a>
            <a href="#farmers" className="hover:text-fasika-accent transition-colors">For Farmers</a>
            <a href="#buyers" className="hover:text-fasika-accent transition-colors">For Buyers</a>
            <a href="#features" className="hover:text-fasika-accent transition-colors">Features</a>
            <a href="#about" className="hover:text-fasika-accent transition-colors">About</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="text-sm font-bold hover:text-fasika-accent transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/admin/login')}
              className="px-4 py-2 text-sm font-bold border border-purple-500/50 text-purple-400 rounded-lg hover:bg-purple-500/20 hover:border-purple-500 transition-all shadow-lg shadow-purple-500/10"
            >
              Admin Portal
            </button>
            <button
              onClick={() => navigate('/register')}
              className="bg-fasika-accent text-fasika-dark px-5 py-2 rounded-lg text-sm font-bold hover:bg-fasika-accent-hover hover:scale-105 active:scale-95 transition-all shadow-lg shadow-fasika-accent/20"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-fasika-accent/10 border border-fasika-accent/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-fasika-accent rounded-full animate-pulse" />
              <span className="text-xs font-bold text-fasika-accent uppercase tracking-wider">Empowering Ethiopia's Smallholder Farmers</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
              The Digital <br />
              <span className="text-fasika-accent">Grains</span> of <br />
              Progress.
            </h1>
            <p className="text-xl text-fasika-text-muted mb-12 max-w-xl leading-relaxed font-medium">
              Eliminate middlemen, check fair market prices, and get localized agricultural advice—all in one high-performance, low-data platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => navigate('/register')}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Join the Revolution <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Learn How it Works
              </button>
            </div>
          </div>

          <div className="relative group animate-in fade-in zoom-in-95 duration-1000 delay-200">
            <div className="absolute -inset-10 bg-fasika-accent/20 blur-[100px] rounded-full group-hover:bg-fasika-accent/30 transition-all duration-700" />
            <div className="relative glass-card border-none bg-fasika-card/40 backdrop-blur-3xl p-3 transform lg:rotate-3 group-hover:rotate-0 transition-all duration-700 shadow-[0_0_50px_rgba(0,223,130,0.1)]">
              <div className="rounded-2xl overflow-hidden bg-fasika-dark min-h-[500px] border border-fasika-border flex flex-col">
                {/* Simulated UI App Interface */}
                <div className="p-5 border-b border-fasika-border flex justify-between items-center bg-fasika-card/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-fasika-accent/20 flex items-center justify-center text-fasika-accent">
                      <Users size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-fasika-text-muted">Welcome back</p>
                      <p className="text-xs font-black">Abebe B. (Farmer)</p>
                    </div>
                  </div>
                  <CloudSun size={20} className="text-fasika-accent" />
                </div>

                <div className="flex-grow p-8 space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-fasika-card border border-fasika-border p-4 rounded-2xl">
                      <p className="text-[10px] font-black text-fasika-text-muted uppercase mb-1">Weather now</p>
                      <p className="text-2xl font-black">24°C</p>
                      <p className="text-[10px] text-fasika-accent">Perfect for Teff sowing</p>
                    </div>
                    <div className="bg-fasika-card border border-fasika-border p-4 rounded-2xl">
                      <p className="text-[10px] font-black text-fasika-text-muted uppercase mb-1">Market Trend</p>
                      <p className="text-2xl font-black text-fasika-accent">+12%</p>
                      <p className="text-[10px] text-fasika-text-muted">White Teff in Adama</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-black uppercase tracking-widest text-fasika-text-muted">Regional Market Prices</p>
                      <TrendingUp size={16} className="text-fasika-accent" />
                    </div>
                    {[
                      { crop: 'White Teff', price: '5,400 ETB/qt', market: 'Adama' },
                      { crop: 'Maize', price: '2,800 ETB/qt', market: 'Shashemene' }
                    ].map((m, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-fasika-accent/30 transition-all cursor-pointer">
                        <div>
                          <p className="text-sm font-bold">{m.crop}</p>
                          <p className="text-[10px] text-fasika-text-muted">{m.market}</p>
                        </div>
                        <p className="text-sm font-black text-fasika-accent">{m.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <button className="w-full bg-fasika-accent text-fasika-dark py-4 rounded-2xl font-black text-sm shadow-[0_10px_20px_rgba(0,223,130,0.2)] hover:scale-[1.02] transition-all">
                    Post My Produce Listing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 1. How it Works */}
      <section id="how-it-works" className="section-container border-t border-fasika-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-fasika-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">How it Works</h2>
          <p className="text-xl text-fasika-text-muted max-w-2xl mx-auto font-medium leading-relaxed">
            Our platform is designed to be as simple as possible, even for first-time digital users.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative z-10">
          {[
            {
              step: '01',
              title: 'Register',
              desc: 'Sign up in seconds with just your name and email.',
              icon: User
            },
            {
              step: '02',
              title: 'Select Role',
              desc: 'Choose to be a Farmer or a Buyer to unlock specific features.',
              icon: ShieldCheck
            },
            {
              step: '03',
              title: 'Access Dashboard',
              desc: 'Get your personalized command center for news and listings.',
              icon: LayoutDashboard
            },
            {
              step: '04',
              title: 'Trade & Connect',
              desc: 'Filter listings, send messages, and grow your business.',
              icon: Globe
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-card group hover:border-fasika-accent/50 transition-all duration-500 flex flex-col">
              <div className="mb-8 flex justify-between items-start">
                <div className="w-14 h-14 bg-fasika-accent/10 rounded-2xl flex items-center justify-center text-fasika-accent group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={28} />
                </div>
                <span className="text-4xl font-black text-white/5 group-hover:text-fasika-accent/10 transition-colors uppercase italic">{item.step}</span>
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-fasika-accent transition-colors">{item.title}</h3>
              <p className="text-fasika-text-muted leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. For Farmers */}
      <section id="farmers" className="py-24 bg-fasika-card/30 border-y border-fasika-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-fasika-accent/10 blur-[80px] rounded-full" />
              <div className="relative glass-card bg-fasika-dark p-10 border-fasika-accent/20">
                <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Built specifically for the <span className="text-fasika-accent italic">farming professional.</span></h3>
                <ul className="space-y-8">
                  {[
                    { title: 'Localized Agriculture Advice', desc: 'Get weather-smart tips on when to sow, fertilize, or harvest based on your specific region.', icon: CloudSun },
                    { title: 'Market Price Visibility', desc: 'Stop guessing. See what crops are selling for in your local and national markets in real-time.', icon: TrendingUp },
                    { title: 'Produce Management', desc: 'Create beautiful listings for your crops and manage them directly from your mobile dashboard.', icon: Store },
                    { title: 'Direct Communication', desc: 'Chat directly with potential buyers through our integrated messaging system.', icon: CheckCircle }
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-fasika-accent/5 border border-fasika-accent/10 flex items-center justify-center text-fasika-accent group-hover:bg-fasika-accent group-hover:text-fasika-dark transition-all duration-300 shrink-0">
                        <benefit.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                        <p className="text-fasika-text-muted leading-relaxed text-sm">{benefit.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-fasika-accent/10 border border-fasika-accent/20 rounded-full mb-6">
                <span className="text-xs font-bold text-fasika-accent uppercase tracking-wider">Farmer Benefits</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Empowering you to grow more than just crops.</h2>
              <p className="text-xl text-fasika-text-muted mb-10 leading-relaxed font-medium">
                We believe that when a farmer has access to information, they have the power to transform their community. Fasika Farmers Connect is your partner in growth.
              </p>
              <button
                onClick={() => navigate('/register')}
                className="btn-primary"
              >
                Sign up as a Farmer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. For Buyers */}
      <section id="buyers" className="section-container relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full -translate-x-1/2" />
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Buyer Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Source fresh produce with <span className="text-blue-500">total transparency.</span></h2>
            <p className="text-xl text-fasika-text-muted mb-10 leading-relaxed font-medium">
              Find exactly what you need, when you need it. Browse the largest digital network of verified Ethiopian smallholder farmers.
            </p>
            <div className="grid gap-6">
              {[
                { title: 'Advanced Marketplace Filtering', desc: 'Browse and filter listings by crop type, quality grade, quantity, and specific farm location.', icon: Search },
                { title: 'Verified Farmer Profiles', desc: 'Connect directly with real farmers. No brokers, no middlemen, just fresh produce.', icon: Users },
                { title: 'Freshness Guaranteed', desc: 'See real-time listings of produce recently posted to ensure you get the best quality.', icon: Leaf }
              ].map((cap, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <cap.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black mb-1">{cap.title}</h4>
                    <p className="text-sm text-fasika-text-muted leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative glass-card border-none bg-fasika-card/40 p-10 transform lg:-rotate-2">
              <div className="absolute -inset-2 border border-blue-500/20 rounded-3xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
                alt="Ethiopian Marketplace"
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
              <div className="mt-8">
                <blockquote className="text-lg font-medium italic text-fasika-text-muted leading-relaxed">
                  "Being able to find specific regional varieties of Teff directly from the source has transformed how we supply our bakeries."
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">M</div>
                  <p className="text-sm font-black">Mohammed K. <span className="text-xs font-medium text-fasika-text-muted ml-2">— Commercial Buyer</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Features */}
      <section id="features" className="py-24 bg-fasika-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Powerful Features</h2>
            <p className="text-xl text-fasika-text-muted max-w-2xl mx-auto font-medium">Designed for performance, built for impact.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Role-Based Dashboards', desc: 'Unique perspectives for Farmers, Buyers, and Admins with tailored widgets and insights.', icon: LayoutDashboard },
              { title: 'Smart Filtering', desc: 'Powerful search engine to find the exact produce or market information you need.', icon: Search },
              { title: 'Integrated Messaging', desc: 'Secure and direct real-time communication between marketplace participants.', icon: MessageSquare },
              { title: 'Expert Advisory', desc: 'Built-in farming advice channel connecting you with agricultural expertise.', icon: Lightbulb },
              { title: 'Low-Data Architecture', desc: 'Optimized for 2G and 3G networks to ensure accessibility across rural Ethiopia.', icon: Zap },
              { title: '24/7 Customer Support', desc: 'Dedicated escalation and support channels for account and listing issues.', icon: Users }
            ].map((f, i) => (
              <div key={i} className="glass-card p-10 group hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-fasika-accent/10 group-hover:text-fasika-accent transition-all">
                  <f.icon size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4">{f.title}</h3>
                <p className="text-fasika-text-muted leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About */}
      <section id="about" className="section-container border-t border-fasika-border bg-gradient-to-b from-transparent to-fasika-accent/[0.02]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-fasika-accent/10 border border-fasika-accent/20 rounded-full mb-6">
              <span className="text-xs font-bold text-fasika-accent uppercase tracking-wider">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Roots in tradition, eyes on the <span className="text-fasika-accent underline decoration-4 underline-offset-8">future.</span></h2>
            <div className="space-y-6 text-lg text-fasika-text-muted font-medium leading-relaxed">
              <p>
                Fasika Farmers Connect was born out of a simple observation: the digital divide in agriculture is the biggest barrier to rural prosperity.
              </p>
              <p>
                Our purpose is to bridge this gap by providing rural Ethiopian farmers and commercial buyers with a transparent, high-efficiency digital meeting place.
              </p>
              <p>
                We mission is to empower 1 million smallholder farmers across Ethiopia by 2030, ensuring every grain of progress benefits those who work the land.
              </p>
            </div>
            <div className="mt-12 flex gap-12">
              <div>
                <p className="text-4xl font-black text-white">50k+</p>
                <p className="text-xs font-black uppercase tracking-widest text-fasika-accent">Target Farmers</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white">100%</p>
                <p className="text-xs font-black uppercase tracking-widest text-fasika-accent">Transparent</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-20 bg-fasika-accent/5 blur-[120px] rounded-full" />
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80&w=400" alt="Farmer" className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="glass-card p-6 bg-fasika-accent text-fasika-dark">
                  <p className="text-3xl font-black">15+</p>
                  <p className="text-xs font-black uppercase tracking-widest">Regions Covered</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="glass-card p-6 border-fasika-accent">
                  <Globe size={32} className="text-fasika-accent mb-4" />
                  <p className="text-lg font-black">Localized for You</p>
                </div>
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400" alt="Crops" className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center border-t border-fasika-border bg-fasika-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-fasika-accent/[0.03] blur-[150px] rounded-full" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none">Ready to start <br /> growing?</h2>
          <p className="text-xl text-fasika-text-muted mb-12 max-w-2xl mx-auto font-medium">Join thousands of farmers and buyers already building the future of Ethiopian agriculture.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => navigate('/register')} className="btn-primary px-12 py-5 text-lg">Create Free Account</button>
            <button onClick={() => navigate('/login')} className="btn-secondary px-12 py-5 text-lg">Sign In</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-fasika-border py-20 bg-fasika-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-fasika-accent rounded-xl flex items-center justify-center">
                  <Store size={24} className="text-fasika-dark" />
                </div>
                <span className="text-2xl font-black tracking-tighter text-white">Fasika Farmers’ Connect</span>
              </div>
              <p className="text-fasika-text-muted max-w-xs leading-relaxed font-medium">
                The premier digital gateway for the Ethiopian agricultural ecosystem. Connecting the roots to the market.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase text-white tracking-[0.2em] mb-8">Platform</h4>
              <ul className="space-y-4 text-sm font-bold text-fasika-text-muted">
                <li><a href="#how-it-works" className="hover:text-fasika-accent transition-colors">How it works</a></li>
                <li><a href="#farmers" className="hover:text-fasika-accent transition-colors">For Farmers</a></li>
                <li><a href="#buyers" className="hover:text-fasika-accent transition-colors">For Buyers</a></li>
                <li><a href="#features" className="hover:text-fasika-accent transition-colors">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase text-white tracking-[0.2em] mb-8">Company</h4>
              <ul className="space-y-4 text-sm font-bold text-fasika-text-muted">
                <li><a href="#about" className="hover:text-fasika-accent transition-colors">About Mission</a></li>
                <li><a href="#" className="hover:text-fasika-accent transition-colors">Support Center</a></li>
                <li><a href="#" className="hover:text-fasika-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-fasika-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-fasika-border">
            <div className="text-xs font-bold text-fasika-text-muted">
              © 2024 Fasika Farmers’ Connect. Empowering Ethiopia.
            </div>
            <div className="flex gap-6 text-xs font-bold text-fasika-text-muted">
              Built with ❤️ in Addis Ababa
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;