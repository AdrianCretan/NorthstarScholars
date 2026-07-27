import { useEffect, useState } from 'react';
import SeoHead from './components/SeoHead';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
    animatedElements.forEach(el => observer.observe(el));
  }, []);

  const navLinks = [
    { id: 'home', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'tutors', label: 'Our Tutors' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <>
      <SeoHead />
      <div className="bg-surface text-on-surface font-body-md antialiased overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container">
        {/* TopNavBar */}
        <header className="bg-surface border-b border-outline-variant fixed top-0 left-0 w-full z-50 flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <a className="block h-12 w-auto" href="#">
            <img src="/logo.png" alt="Northstar Scholars" className="h-full w-auto" />
          </a>
          <nav className="hidden md:flex gap-gutter items-center h-full">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveTab(link.id)}
                className={`font-label-md text-label-md h-full flex items-center transition-colors ${
                  activeTab === link.id
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>
        
        <main className="pt-20">
          {/* Section 1 (Hero/Home) */}
          <section className="min-h-[921px] flex items-center px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto" id="home">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              <div className="lg:col-span-7 space-y-stack-md reveal-left">
                <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary">
                  Pursuing Excellence in Scholarship
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                  Northstar Scholars provides elite academic tutoring and mentorship for high-achieving students seeking admission to top-tier universities. Our rigorous, customized curriculum is designed to foster intellectual growth and mastery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-lg text-center hover:bg-primary-container transition-all" href="#services">
                    Explore Services
                  </a>
                  <a className="border border-secondary text-primary font-label-md text-label-md px-8 py-4 rounded-lg text-center hover:bg-surface-container-low transition-all" href="#tutors">
                    Meet Our Tutors
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative reveal-right mt-12 lg:mt-0">
                <div className="aspect-[4/5] rounded-xl overflow-hidden border border-outline-variant relative">
                  <img alt="Library" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALN7hJ9zcHyj3oYS6IBBrG4__ORPhJJ4IG6CtItk0d9UOaVHSxfanynXyjthdg84G5prFOpF8ahjspZ0DgroF5qYEUBWm7AzrfCn2XJhLevZVCiM51qONMQNXyI_b9iK3vJJH2mPbXHYkueF-Pa5TC2C1NwQstYJFkG8hsbTDIHkytpGLb2xtqGt96CFGM_BR6Fyrq_gAGieybid63cCdP4ekXAJzspIapRI3uAjrLc0xUk_SXGOJaE1sjNFDRCOaddf34-Otho6g" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                </div>
                {/* Decorative Badge */}
                <div className="absolute -bottom-6 -left-6 bg-secondary-container p-6 rounded-xl border border-secondary shadow-[0_10px_30px_rgba(10,37,64,0.05)]">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    <div>
                      <p className="font-headline-md text-headline-md text-on-secondary-container">98%</p>
                      <p className="font-caption text-caption text-on-secondary-container">Elite University Admission</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 (Services) */}
          <section className="py-stack-lg bg-surface-container-low border-t border-outline-variant" id="services">
            <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-stack-lg reveal-up">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-4">Our Academic Offerings</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive mentorship programs tailored to the unique goals of ambitious scholars.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Service Card 1 */}
                <div className="bg-surface p-8 rounded-xl border border-outline-variant hover:shadow-[0_10px_30px_rgba(10,37,64,0.05)] transition-shadow group reveal-up" style={{ transitionDelay: '100ms' }}>
                  <span className="material-symbols-outlined text-primary mb-6 text-4xl group-hover:scale-110 transition-transform">school</span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">Subject Mastery</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">Deep-dive tutoring in advanced STEM, Humanities, and classical languages.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant">
                      <div className="w-1.5 h-1.5 bg-secondary"></div> AP &amp; IB Curriculum
                    </li>
                    <li className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant">
                      <div className="w-1.5 h-1.5 bg-secondary"></div> University Level Prep
                    </li>
                  </ul>
                </div>
                {/* Service Card 2 */}
                <div className="bg-primary p-8 rounded-xl border border-primary relative overflow-hidden reveal-up" style={{ transitionDelay: '200ms' }}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
                  <span className="material-symbols-outlined text-secondary mb-6 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                  <h3 className="font-headline-md text-headline-md text-on-primary mb-4">Admissions Consulting</h3>
                  <p className="font-body-md text-body-md text-on-primary/80 mb-6">Strategic guidance through the highly competitive collegiate application process.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 font-body-md text-body-md text-on-primary/90">
                      <div className="w-1.5 h-1.5 bg-secondary"></div> Essay Drafting
                    </li>
                    <li className="flex items-center gap-2 font-body-md text-body-md text-on-primary/90">
                      <div className="w-1.5 h-1.5 bg-secondary"></div> Interview Preparation
                    </li>
                  </ul>
                </div>
                {/* Service Card 3 */}
                <div className="bg-surface p-8 rounded-xl border border-outline-variant hover:shadow-[0_10px_30px_rgba(10,37,64,0.05)] transition-shadow group reveal-up" style={{ transitionDelay: '300ms' }}>
                  <span className="material-symbols-outlined text-primary mb-6 text-4xl group-hover:scale-110 transition-transform">menu_book</span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">Standardized Testing</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">Rigorous methodological preparation for premier standardized assessments.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant">
                      <div className="w-1.5 h-1.5 bg-secondary"></div> SAT / ACT Optimization
                    </li>
                    <li className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant">
                      <div className="w-1.5 h-1.5 bg-secondary"></div> Diagnostic Analysis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 (Our Tutors) */}
          <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="tutors">
            <div className="text-center max-w-3xl mx-auto mb-stack-lg reveal-up">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-4">Distinguished Faculty</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Our educators are alumni of the world's most prestigious institutions, bringing unparalleled expertise and academic rigor to every session.</p>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {/* Card 1 */}
              <article className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden group hover:shadow-[0_10px_30px_rgba(10,37,64,0.1)] hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 reveal-up" style={{ transitionDelay: '0.1s' }}>
                <div className="h-64 overflow-hidden bg-surface-variant relative">
                  <img alt="Tutor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8Y1pJ_FOAiiLGGRed_CLhHp7gUXc6uhwtjeKak-MiPtrVftM1G4I0LX2_CwTD7lCEKqQXCugp09U-3Sl3iEm7hlRyP_p_nGncBXSbTZ-FUxyYuKxOuMoc-OKKCLVKiwKQMBk5C3FVodxrSBHlzX4Lu6NE2-zi69INDzVlPJ6CrFFCHnO4KaccyQTTizyj6zC_wsk5lSQNwyHOvgRblrPjd-4n3OEG0vHBSdnSeqEd9GQ2C2o4tJ9S8-oBdOxhHHAOezbBlwpeDLg" />
                  <div className="absolute top-4 right-4 bg-secondary-fixed/90 px-3 py-1 rounded-full text-on-secondary-fixed-variant font-label-md text-label-md border border-secondary/20 shadow-sm backdrop-blur-sm">
                    Accepting Students
                  </div>
                </div>
                <div className="p-stack-md flex flex-col h-full">
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Dr. Eleanor Vance</h3>
                  <p className="font-body-md text-body-md text-secondary font-medium mb-4">Ph.D. Physics, Stanford University</p>
                  <div className="flex flex-wrap gap-2 mb-stack-md">
                    <span className="bg-surface-container py-1 px-3 rounded-full font-caption text-caption text-on-surface">Quantum Mechanics</span>
                    <span className="bg-surface-container py-1 px-3 rounded-full font-caption text-caption text-on-surface">Advanced Calculus</span>
                  </div>
                  <div className="mt-auto pt-stack-sm border-t border-outline-variant flex justify-between items-center">
                    <span className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>star</span> 4.9 (120 reviews)
                    </span>
                    <button className="text-primary hover:text-secondary transition-colors flex items-center gap-1 font-label-md text-label-md group/btn">
                      View Profile <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform" style={{ fontSize: '18px' }}>arrow_forward</span>
                    </button>
                  </div>
                </div>
              </article>
              {/* Card 2 */}
              <article className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden group hover:shadow-[0_10px_30px_rgba(10,37,64,0.1)] hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 reveal-up" style={{ transitionDelay: '0.2s' }}>
                <div className="h-64 overflow-hidden bg-surface-variant relative">
                  <img alt="Tutor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Wa89-rmtUqJIKhMjHofDi_qXQLo3N_aUcFZxcZba1WchDOAnwrHgC-jIPgDYu-HJy_8nOy7Vo5hnq-Ygyk56kUO1p4Nx2uqHv2vq_2GNXe1yABWSp5bzjB5sqH8A_fIAyRzRqfDlAywjrcYAXu2Vk611fhX_Qk5oYUjrgspdgswgho-No-pKyr_xRYVGGfhGza-BujXROmOlIhf_gcCImBOBJDnXkh_XVeHuCNkqJaz8sose_p8grLt3SG3_zk9lCv8Cd6lm9_A" />
                </div>
                <div className="p-stack-md flex flex-col h-full">
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Julian Thorne</h3>
                  <p className="font-body-md text-body-md text-secondary font-medium mb-4">M.A. Literature, Oxford University</p>
                  <div className="flex flex-wrap gap-2 mb-stack-md">
                    <span className="bg-surface-container py-1 px-3 rounded-full font-caption text-caption text-on-surface">Classical Literature</span>
                    <span className="bg-surface-container py-1 px-3 rounded-full font-caption text-caption text-on-surface">Rhetoric</span>
                  </div>
                  <div className="mt-auto pt-stack-sm border-t border-outline-variant flex justify-between items-center">
                    <span className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>star</span> 4.8 (95 reviews)
                    </span>
                    <button className="text-primary hover:text-secondary transition-colors flex items-center gap-1 font-label-md text-label-md group/btn">
                      View Profile <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform" style={{ fontSize: '18px' }}>arrow_forward</span>
                    </button>
                  </div>
                </div>
              </article>
              {/* Card 3 */}
              <article className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden group hover:shadow-[0_10px_30px_rgba(10,37,64,0.1)] hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 reveal-up" style={{ transitionDelay: '0.3s' }}>
                <div className="h-64 overflow-hidden bg-surface-variant relative">
                  <img alt="Tutor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9StC1fBWLZwtUEEYQxBLpJdmSfHtnb2xRy1CDx6hqcTNp9TlP_Qo14M1MGvQ3bFqIbo7WP01opliCKosHDFcR57rdQ61JGmgdG7xwM6totNZ9LJzYjRYp_QdnhSpb5Eyk10d_lNAjYF4HMLQbADFeAXznfHxvhpMkd-O2XQ49JArPb8Tw39EcfCdqeMunpbdq7187wLhKLtToxHbYmK0l2ezNA3H0XonRk9LgZYK3M5d0UxXLfKp9w-GwW6uFbh2c_CWmuquWCB8" />
                  <div className="absolute top-4 right-4 bg-secondary-fixed/90 px-3 py-1 rounded-full text-on-secondary-fixed-variant font-label-md text-label-md border border-secondary/20 shadow-sm backdrop-blur-sm">
                    Accepting Students
                  </div>
                </div>
                <div className="p-stack-md flex flex-col h-full">
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Marcus Chen</h3>
                  <p className="font-body-md text-body-md text-secondary font-medium mb-4">B.S. Computer Science, UC Berkeley</p>
                  <div className="flex flex-wrap gap-2 mb-stack-md">
                    <span className="bg-surface-container py-1 px-3 rounded-full font-caption text-caption text-on-surface">Algorithms</span>
                    <span className="bg-surface-container py-1 px-3 rounded-full font-caption text-caption text-on-surface">Linear Algebra</span>
                  </div>
                  <div className="mt-auto pt-stack-sm border-t border-outline-variant flex justify-between items-center">
                    <span className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>star</span> 5.0 (210 reviews)
                    </span>
                    <button className="text-primary hover:text-secondary transition-colors flex items-center gap-1 font-label-md text-label-md group/btn">
                      View Profile <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform" style={{ fontSize: '18px' }}>arrow_forward</span>
                    </button>
                  </div>
                </div>
              </article>
            </section>
          </section>

          {/* Pricing Section */}
          <section className="pt-stack-lg pb-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center reveal-up" id="pricing">
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary mb-stack-sm">
              Invest in Their Future
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Rigorous academic support tailored to every scholar's ambition. Choose the pathway that aligns with your institutional or personal goals.
            </p>
          </section>

          {/* Pricing Cards */}
          <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-stack-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-start">
              {/* Scholar Tier */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-3xl p-stack-md flex flex-col h-full hover:-translate-y-2 transition-all duration-300 reveal-up shadow-sm hover:shadow-md">
                <div className="mb-stack-md">
                  <h2 className="font-headline-md text-headline-md text-primary mb-2">Scholar</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Essential academic foundation.</p>
                </div>
                <div className="mb-stack-md">
                  <span className="font-headline-lg text-headline-lg text-primary">$450</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">/month</span>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-stack-sm font-body-md text-body-md text-on-surface">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-secondary shrink-0 rounded-full"></div>
                      <span>4 Hours of personalized tutoring per month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-secondary shrink-0 rounded-full"></div>
                      <span>Access to core study materials &amp; frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-secondary shrink-0 rounded-full"></div>
                      <span>Standard email support (48h response)</span>
                    </li>
                  </ul>
                </div>
                <button className="mt-stack-md w-full border border-secondary text-primary font-label-md text-label-md py-3 rounded hover:bg-surface-container transition-colors">
                  Select Scholar
                </button>
              </div>
              
              {/* Honors Tier */}
              <div className="bg-surface-container-lowest border-2 border-secondary rounded-3xl p-stack-md flex flex-col h-full custom-shadow glow-hover hover:-translate-y-4 transition-all duration-500 relative md:-mt-4 reveal-up" style={{ transitionDelay: '150ms' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-container text-on-secondary-container font-label-md text-label-md px-4 py-1 rounded-full border border-secondary shadow-sm">
                  Most Popular
                </div>
                <div className="mb-stack-md pt-4">
                  <h2 className="font-headline-md text-headline-md text-primary mb-2">Honors</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive support for high achievers.</p>
                </div>
                <div className="mb-stack-md">
                  <span className="font-headline-lg text-headline-lg text-primary">$800</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">/month</span>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-stack-sm font-body-md text-body-md text-on-surface">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-secondary shrink-0 rounded-full"></div>
                      <span>8 Hours of elite tutoring per month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-secondary shrink-0 rounded-full"></div>
                      <span>Premium curated materials &amp; past papers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-secondary shrink-0 rounded-full"></div>
                      <span>Priority support (24h response)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-secondary shrink-0 rounded-full"></div>
                      <span>Monthly progress consultation with faculty</span>
                    </li>
                  </ul>
                </div>
                <button className="mt-stack-md w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-md">
                  Select Honors
                </button>
              </div>

              {/* Elite Tier */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-3xl p-stack-md flex flex-col h-full hover:-translate-y-2 transition-all duration-300 reveal-up shadow-sm hover:shadow-md" style={{ transitionDelay: '300ms' }}>
                <div className="mb-stack-md">
                  <h2 className="font-headline-md text-headline-md text-primary mb-2">Elite</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Bespoke guidance for institutional excellence.</p>
                </div>
                <div className="mb-stack-md">
                  <span className="font-headline-lg text-headline-lg text-primary">$1,500</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">/month</span>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-stack-sm font-body-md text-body-md text-on-surface">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-secondary shrink-0 rounded-full"></div>
                      <span>Unlimited consultation hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-secondary shrink-0 rounded-full"></div>
                      <span>Exclusive access to institutional archives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-secondary shrink-0 rounded-full"></div>
                      <span>24/7 dedicated academic advisor</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-secondary shrink-0 rounded-full"></div>
                      <span>University admissions strategy &amp; essay review</span>
                    </li>
                  </ul>
                </div>
                <button className="mt-stack-md w-full border border-secondary text-primary font-label-md text-label-md py-3 rounded hover:bg-surface-container transition-colors">
                  Inquire Elite
                </button>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="products">
            <div className="text-center max-w-3xl mx-auto mb-stack-lg reveal-up">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-4">Academic Products</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Self-study materials designed for rigorous independent preparation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Product 1 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 flex flex-col h-full hover:shadow-[0_10px_30px_rgba(10,37,64,0.05)] transition-all reveal-up">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">auto_stories</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Elite SAT Prep Vault</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">Comprehensive question banks and strategy guides.</p>
                <div className="mb-4">
                  <span className="font-headline-md text-headline-md text-primary">$99</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">/module</span>
                </div>
              </div>
              {/* Product 2 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 flex flex-col h-full hover:shadow-[0_10px_30px_rgba(10,37,64,0.05)] transition-all reveal-up" style={{ transitionDelay: '100ms' }}>
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">account_balance</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">World-Class Academic Syllabus</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">Comprehensive, globally-recognized curricula designed for mastery at the world's most prestigious institutions.</p>
                <div className="mb-4">
                  <span className="font-headline-md text-headline-md text-primary">$149</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">/course</span>
                </div>
              </div>
              {/* Product 3 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 flex flex-col h-full hover:shadow-[0_10px_30px_rgba(10,37,64,0.05)] transition-all reveal-up" style={{ transitionDelay: '200ms' }}>
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">science</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">STEM Mastery Modules</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">Interactive problem sets for physics and calculus.</p>
                <div className="mb-4">
                  <span className="font-headline-md text-headline-md text-primary">$199</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">/bundle</span>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-secondary/20 text-center reveal-up">
              <p className="font-headline-md italic text-on-surface-variant max-w-2xl mx-auto">Please contact us for more details about our academic products and to purchase.</p>
              <div className="mt-4 w-12 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-surface-container-low py-stack-lg px-margin-mobile md:px-margin-desktop">
            <div className="max-w-3xl mx-auto reveal-up">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-outline-variant pb-4 p-4 -mx-4 rounded-xl faq-item cursor-pointer group reveal-up">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-body-lg text-body-lg text-primary font-semibold group-hover:text-secondary transition-colors">How does billing work?</h3>
                    <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-transform group-hover:rotate-180 duration-300">expand_more</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">Billing is processed monthly on the anniversary date of your enrollment. We accept all major credit cards and institutional bank transfers.</p>
                </div>
                <div className="border-b border-outline-variant pb-4 p-4 -mx-4 rounded-xl faq-item cursor-pointer group reveal-up" style={{ transitionDelay: '100ms' }}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-body-lg text-body-lg text-primary font-semibold group-hover:text-secondary transition-colors">Can unused hours roll over to the next month?</h3>
                    <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-transform group-hover:rotate-180 duration-300">expand_more</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">To maintain rigorous scheduling with our faculty, standard tutoring hours do not roll over. We encourage consistent weekly engagement for optimal results.</p>
                </div>
                <div className="border-b border-outline-variant pb-4 p-4 -mx-4 rounded-xl faq-item cursor-pointer group reveal-up" style={{ transitionDelay: '200ms' }}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-body-lg text-body-lg text-primary font-semibold group-hover:text-secondary transition-colors">Is it possible to switch tiers during the academic year?</h3>
                    <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-transform group-hover:rotate-180 duration-300">expand_more</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">Yes, scholars may upgrade or downgrade their tier at the end of any billing cycle. Upgrades can be pro-rated if immediate increased support is required.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Us Section */}
          <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant" id="contact">
            <div className="max-w-4xl mx-auto text-center reveal-up">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-stack-md">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
                <div className="flex flex-col items-center p-6">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">location_on</span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Visit Us</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">123 Scholar Way<br/>Academic District</p>
                </div>
                <div className="flex flex-col items-center p-6">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">mail</span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Email Us</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">contact@northstarscholars.edu</p>
                </div>
                <div className="flex flex-col items-center p-6">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">phone</span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Call Us</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">+1 800-SCHOLAR</p>
                </div>
              </div>
              <div className="mt-stack-md flex justify-center gap-6">
                <a className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-label-md text-label-md" href="#">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
                  TikTok
                </a>
                <a className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-label-md text-label-md" href="#">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                  Instagram
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-primary w-full py-stack-lg px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-stack-md mt-stack-lg border-t-4 border-secondary">
          <div>
            <div className="mb-4 h-12">
              <a className="block h-full w-auto" href="#">
                <img src="/logo.png" alt="Northstar Scholars" className="h-full w-auto invert" />
              </a>
            </div>
            <p className="font-caption text-caption text-on-primary/80 max-w-sm">© 2024 Northstar Scholars. All rights reserved. Pursuing Excellence in Scholarship.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 max-w-2xl">
            <a className="font-label-md text-label-md text-on-primary/60 hover:text-on-primary transition-opacity" href="#">Academic Integrity</a>
            <a className="font-label-md text-label-md text-on-primary/60 hover:text-on-primary transition-opacity" href="#">Privacy Policy</a>
            <a className="font-label-md text-label-md text-on-primary/60 hover:text-on-primary transition-opacity" href="#">Terms of Service</a>
            <a className="font-label-md text-label-md text-on-primary/60 hover:text-on-primary transition-opacity" href="#">Faculty Portal</a>
            <a className="font-label-md text-label-md text-on-primary/60 hover:text-on-primary transition-opacity" href="#">Institutional Partners</a>
            <a className="font-label-md text-label-md text-on-primary/60 hover:text-on-primary transition-opacity" href="#">Contact Us</a>
          </div>
        </footer>
      </div>
    </>
  );
}
