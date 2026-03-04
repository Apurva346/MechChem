import React from 'react';
import { Settings, Wrench, ShieldCheck, CheckCircle2, Factory, Users, Target, Eye, PhoneCall, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION - Full Width with Background Overlay */}
      <section className="relative w-full h-[500px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 to-[#003366]/70"></div>
        </div>
        
        <div className="relative z-10 w-full px-8 md:px-20 lg:px-32 text-center md:text-left">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm border-b-2 border-orange-500 pb-1">
            About Mech Chem Engineering Services
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight uppercase tracking-tighter">
            Trusted Industrial Machine Supplier <br />
            <span className="text-orange-500">Experts Since 2012</span>
          </h1>
        </div>
      </section>

      {/* 2. INTRODUCTION - Full Width Layout */}
      <section className="w-full py-20 px-8 md:px-20 lg:px-32 bg-gray-50 border-b">
        <div className="w-full flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-black text-[#003366] mb-8 border-l-8 border-orange-500 pl-6">WHO WE ARE</h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-medium">
              <p>
                Mech Chem Engineering Services is a reliable name in industrial machinery sales and services, established in 2012 in Nagpur, Maharashtra.
              </p>
              <p>
                With over a decade of practical industry experience, we support manufacturing units, workshops, and industrial facilities with dependable machinery solutions and professional technical services.
              </p>
              <p>
                From machine selection to installation, maintenance, and after-sales support, we focus on delivering solutions that improve productivity, reduce downtime, and ensure long-term performance.
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5 bg-white p-10 shadow-2xl rounded-xl border-t-4 border-orange-500">
            <p className="text-[#003366] font-bold italic text-xl mb-6">
              "Our strength lies in combining hands-on technical expertise with a customer-first approach."
            </p>
            <p className="text-gray-600 font-medium">
              Over the years, Mech Chem Engineering Services has built long-term relationships with clients by consistently delivering quality workmanship, honest guidance, and reliable support.
            </p>
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP - Full Width Dark Theme */}
      <section className="w-full py-20 bg-[#003366] text-white px-8 md:px-20 lg:px-32">
        <h2 className="text-3xl font-black mb-16 text-center tracking-widest uppercase italic">Leadership</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center border-4 border-orange-500 text-6xl font-black">AP</div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-4xl font-black text-orange-500 uppercase">Atul Pise</h3>
            <p className="text-xl font-bold text-gray-300 mt-2 mb-8 uppercase tracking-widest">Managing Director & CEO</p>
            <div className="space-y-4 text-gray-200 text-lg font-medium leading-relaxed">
              <p>With over a decade of experience in industrial machinery sales, service, and engineering solutions, Atul Pise leads Mech Chem Engineering Services with a strong emphasis on reliability, technical excellence, and customer satisfaction.</p>
              <p>Since its establishment in 2012, the company has grown under his leadership into a trusted partner for manufacturers, delivering dependable machinery solutions supported by long-term service and technical expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO & i-NAX - Two Column Full Width */}
      <section className="w-full py-24 flex flex-col lg:flex-row">
        {/* What We Do */}
        <div className="w-full lg:w-1/2 bg-white px-8 md:px-20 lg:pl-32 lg:pr-16 py-12">
          <h2 className="text-3xl font-black text-[#003366] mb-10 uppercase tracking-tighter italic">What We Do</h2>
          <div className="space-y-4">
            {[
              "Industrial machinery sales",
              "Machine installation & commissioning",
              "Preventive and breakdown maintenance",
              "Repair and troubleshooting services",
              "Genuine spare parts support"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 border-r-4 border-[#003366] hover:bg-[#003366] hover:text-white transition-all group">
                <Settings className="text-orange-500" size={20} />
                <span className="font-bold uppercase text-sm tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* i-NAX Evolution */}
        <div className="w-full lg:w-1/2 bg-orange-500 px-8 md:px-20 lg:pr-32 lg:pl-16 py-16 flex flex-col justify-center text-white">
          <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-8">Our Evolution – Introducing i-NAX™</h2>
          <p className="text-lg font-bold leading-relaxed mb-6">
            As part of our continuous growth and commitment to innovation, we proudly introduced i-NAX™, our premium brand of advanced CNC and precision industrial machinery.
          </p>
          <p className="text-white/90 font-medium">
            Built on the strong foundation of Mech Chem Engineering Services, i-NAX™ represents our vision for modern manufacturing—offering machines that deliver precision, performance, and reliability for today’s industrial needs.
          </p>
        </div>
      </section>

      {/* 5. WHY CHOOSE US & INDUSTRIES - Full Width Split Grid */}
      <section className="w-full py-20 bg-[#003366] px-8 md:px-20 lg:px-32 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-black mb-10 border-b-4 border-orange-500 w-fit pb-2">WHY CHOOSE US?</h2>
            <div className="space-y-6">
              {[
                "Established in 2012 with proven industry experience",
                "Strong technical and service expertise",
                "Reliable after-sales support",
                "Customer-focused engineering solutions",
                "Trusted partner for industrial machinery"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={24} />
                  <p className="text-lg font-bold uppercase tracking-tight">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black mb-10 border-b-4 border-orange-500 w-fit pb-2 uppercase">Industries We Serve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Manufacturing Units",
                "Engineering Workshops",
                "Automotive & Components",
                "Fabrication & Tool Rooms",
                "Industrial Production"
              ].map((ind, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 rounded-lg hover:border-orange-500 transition-all">
                  <ChevronRight className="text-orange-500" size={18} />
                  <span className="font-bold text-sm uppercase">{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MISSION & VISION - Full Width Side by Side */}
      <section className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-gray-100 p-16 md:p-24 text-center">
          <Target className="mx-auto text-orange-500 mb-8" size={60} />
          <h2 className="text-3xl font-black text-[#003366] mb-6 uppercase">Our Mission</h2>
          <p className="text-lg font-medium text-gray-600 leading-relaxed">
            To deliver reliable industrial machinery solutions and professional services that help businesses operate efficiently, safely, and profitably.
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-white p-16 md:p-24 text-center border-l border-gray-100">
          <Eye className="mx-auto text-orange-500 mb-8" size={60} />
          <h2 className="text-3xl font-black text-[#003366] mb-6 uppercase">Our Vision</h2>
          <p className="text-lg font-medium text-gray-600 leading-relaxed">
            To be a trusted engineering solutions provider, known for quality, technical expertise, and long-term customer relationships.
          </p>
        </div>
      </section>

      {/* 7. CTA - Full Width Bottom Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#003366] to-[#004d99] text-center text-white px-8">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Let’s Build Together</h2>
        <p className="max-w-3xl mx-auto text-xl font-medium text-gray-300 mb-12">
          If you are looking for dependable industrial machinery or expert service support, Mech Chem Engineering Services is here to help.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="bg-orange-500 hover:bg-white hover:text-[#003366] text-white px-10 py-5 rounded-md font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3">
            <PhoneCall size={20} /> Contact Us Today
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-[#003366] text-white px-10 py-5 rounded-md font-black uppercase tracking-widest transition-all">
            Explore i-NAX™ Brand
          </button>
        </div>
        
        <div className="mt-24 pt-10 border-t border-white/10">
          <h3 className="text-xl font-black uppercase tracking-widest">Mech Chem Engineering Services</h3>
          <p className="text-orange-500 font-bold mt-2">Nagpur, Maharashtra</p>
          <p className="text-gray-400 text-sm mt-1 uppercase tracking-tighter">Industrial Machinery Sales • Service • Support</p>
        </div>
      </section>

    </div>
  );
};

export default About;