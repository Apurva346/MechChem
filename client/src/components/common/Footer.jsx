import React, { useState } from 'react'
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, ChevronRight, Zap, Target, Settings, ShieldCheck, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const socialLinks = [
    { Icon: Facebook, link: 'https://www.facebook.com/inaxlaser' },
    { Icon: Youtube, link: 'https://www.youtube.com/@inaxlaser' },
    { Icon: Instagram, link: 'https://www.instagram.com/mechchemengineeringservices' }
  ]

  const ourMachines = [
    'Lathe Machine',
    'Milling Machine',
    'Drilling Machine',
    'Workholding Tools',
    'Grinding Machines',
    'Finishing & Coating Machines',
    'Bandsaw Machines'
  ]

  return (
    <footer className='w-full mt-16 relative font-sans text-white bg-[#000a14] select-none'>
      
      {/* ----------------- 1. TOP RED BLOCK (IDENTITY & ALL CONTACTS) ----------------- */}
      {/* अपूर्वा, इथे py-8 ऐवजी py-10 केलंय आणि मोबाईलसाठी gap-10 दिलंय जेणेकरून दोन ब्लॉक मध्ये अंतर दिसेल */}
      <div className='w-full bg-gradient-to-r from-[#8b1d31] to-[#a3223a] text-white py-10 border-b border-white/10 shadow-xl relative z-10'>
        <div className='max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start'>
          
          {/* Logo, Title & Tagline */}
          <div className='space-y-4 lg:border-r border-white/10 lg:pr-6 h-full flex flex-col justify-center'>
            <div className='flex items-center gap-3'>
              <Link to='/' className='inline-block bg-white p-1.5 rounded shadow-md shrink-0 transform hover:scale-105 transition-transform'>
                <img
                  src='/images/mech-chem-logo.png'
                  alt='Mech Chem Engineering Services'
                  className='h-11 w-auto object-contain'
                />
              </Link>
              <h2 className='text-xs font-black tracking-wider uppercase leading-tight'>
                Mech Chem <br/> Engineering Services
              </h2>
            </div>
            <p className='text-[11px] text-white/80 font-medium leading-relaxed italic border-l-2 border-white/30 pl-3 py-0.5'>
              "Delivering reliable industrial machinery solutions with precision, performance, and trusted service."
            </p>
          </div>

          {/* Addresses (Main Office + Experience Center) */}
          {/* इथे space-y-6 वापरून दोन्ही ॲड्रेस मध्ये मोबाईलवर योग्य स्पेस दिली आहे */}
          <div className='space-y-6 lg:border-r border-white/10 lg:pr-6 h-full text-xs font-medium'>
            {/* Main Office */}
            <div className='flex items-start gap-3.5 group'>
              <MapPin size={18} className='text-white/80 shrink-0 mt-0.5 group-hover:scale-110 transition-transform' />
              <div className='space-y-1 min-w-0'>
                <span className='text-[9px] uppercase font-black tracking-widest text-white/60 block'>Main Office Address</span>
                <p className='text-white/90 leading-relaxed break-words'>
                  Plot No.27, shop No. 1, Nathuji Pise Complex, SPT Market, Great Nag Road, Nagpur-440003, Maharashtra.
                </p>
              </div>
            </div>

            {/* Experience Center */}
            <div className='flex items-start gap-3.5 group border-t border-white/10 pt-5'>
              <MapPin size={18} className='text-white shrink-0 mt-0.5 group-hover:scale-110 transition-transform animate-pulse' />
              <div className='space-y-1 min-w-0'>
                <span className='text-[9px] uppercase font-black tracking-widest text-white/70 block'>New i-NAX™ Experience Center Coming Soon At:</span>
                <p className='text-white font-bold leading-relaxed break-words'>
                  Plot No.11 NASA Ground, Nehru Nagar, Nagpur - 440015
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info (Phones & Email) */}
          {/* मोबाईलवर फोन आणि ईमेल विभाग व्यवस्थित सुटसुटीत दिसण्यासाठी pt-2 आणि pt-5 सह गॅप वाढवला आहे */}
          <div className='space-y-6 h-full flex flex-col justify-center text-xs font-bold pt-2 lg:pt-0'>
            {/* Phones */}
            <div className='flex items-start gap-3.5 group'>
              <Phone size={16} className='text-white/80 shrink-0 mt-0.5' />
              <div className='space-y-1'>
                <span className='text-[9px] uppercase font-black tracking-widest text-white/60 block font-medium mb-0.5'>Phone Numbers</span>
                <div className='space-y-1 tracking-wide text-sm'>
                  <p><a href='tel:+919960846786' className='hover:underline block'>+91-9960846786</a></p>
                  <p><a href='tel:+919226450455' className='hover:underline block'>+91-9226450455</a></p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className='flex items-start gap-3.5 group border-t border-white/10 pt-5'>
              <Mail size={16} className='text-white/80 shrink-0 mt-0.5' />
              <div className='break-all space-y-1'>
                <span className='text-[9px] uppercase font-black tracking-widest text-white/60 block font-medium mb-0.5'>Email Address</span>
                <a href='mailto:mechchemindia@gmail.com' className='hover:underline text-sm tracking-wide block'>
                  mechchemindia@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ----------------- 2. BOTTOM MAIN AREA (MACHINES & COMPACT FORM) ----------------- */}
      <div className='bg-gradient-to-b from-[#001224] to-[#000a14] pt-12 pb-8 relative overflow-hidden'>
        <div className='absolute bottom-0 right-1/4 w-80 h-40 bg-[#8b1d31]/5 rounded-full blur-3xl pointer-events-none'></div>

        <div className='max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10 items-start'>
          
          {/* Column A: Mech Chem Our Machines List */}
          <div>
            <h3 className='text-2xl font-black pb-1 border-b border-white/10 uppercase tracking-widest text-[#8b1d31] mb-4 w-fit pr-6'>
              Our Machines
            </h3>
            {/* अपूर्वा, इथे `grid-cols-1` ठेवून मोबाईलवर एकाखाली एक लिस्ट केली आहे, जेणेकरून नावे मोठी असली तरी स्क्रीनशॉट सारखी गर्दी होणार नाही */}
            <ul className='grid grid-cols-1 gap-2.5 text-xs text-gray-400 font-medium'>
              {ourMachines.map(machine => (
                <li
                  key={machine}
                  className='flex items-center gap-2 hover:text-white hover:translate-x-1.5 transition-all duration-300 cursor-pointer group'
                >
                  <ChevronRight size={13} className='text-[#8b1d31] opacity-50 group-hover:opacity-100 transition-opacity' />
                  <span>{machine}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column B: i-NAX CNC & Laser Machines Card */}
          <div className='bg-white/[0.01] p-4 rounded-xl border border-white/5 shadow-xl backdrop-blur-sm h-full'>
            <h3 className='text-sm font-black tracking-tight text-white italic mb-1.5 uppercase'>
              i-NAX™ <span className='text-[#8b1d31] font-bold not-italic text-[10px] tracking-normal bg-[#8b1d31]/10 px-1.5 py-0.5 rounded ml-1 uppercase'>CNC & Laser</span>
            </h3>
            <p className='text-[11px] text-gray-400 mb-4 leading-relaxed font-medium'>
              i-NAX™ is our advanced brand offering modern CNC and laser cutting machines designed for precision and speed.
            </p>

            <div className='grid grid-cols-1 gap-1.5'>
              {[
                { Icon: Zap, text: 'Fiber Laser Cutting Machine' },
                { Icon: Target, text: 'Laser Welding Machine' },
                { Icon: Settings, text: 'CNC Press Brake Machine' },
                { Icon: ShieldCheck, text: 'CNC Laser Pipe Cutting Machine' }
              ].map((item, idx) => (
                <div key={idx} className='flex items-center gap-2 bg-[#001122]/70 p-2 rounded border border-white/5 hover:border-[#8b1d31]/30 transition-colors duration-200'>
                  <item.Icon size={12} className='text-[#8b1d31]' />
                  <span className='text-[9px] font-black uppercase tracking-wider text-gray-300'>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column C: Ultra Compact Enquiry Form */}
          <div className='bg-white/[0.02] p-4 rounded-xl border border-white/5 shadow-2xl backdrop-blur-sm'>
            {isSubmitted ? (
              <div className='py-8 text-center space-y-2 animate-fadeIn'>
                <CheckCircle size={32} className='text-emerald-500 mx-auto' />
                <h4 className='text-xs font-black text-white uppercase tracking-wider'>Enquiry Sent!</h4>
                <p className='text-[11px] text-gray-400 leading-relaxed font-medium px-2'>
                  Thank you! Our team will get in touch shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className='text-[10px] font-black uppercase text-[#8b1d31] hover:text-red-400 underline pt-2 block mx-auto'
                >
                  Send Again
                </button>
              </div>
            ) : (
              <div className='space-y-3'>
                <div>
                  <h4 className='text-xs font-black uppercase tracking-wider text-white'>Send Us a Message</h4>
                  <p className='text-[10px] text-gray-400 italic mt-0.5'>Quick requirement or enquiry?</p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-2'>
                  <input required type='text' placeholder='Full Name' className='w-full px-3 py-2 bg-[#001122] border border-white/5 rounded-md text-xs font-semibold text-white focus:border-[#8b1d31] outline-none transition-colors' />
                  
                  {/* अपूर्वा, मोबाईल स्क्रीनवर 'Phone' आणि 'Email' चे इनपुट बॉक्स लहान होऊन दाटीवाटीचे दिसत होते, ते आता मोबाईलवर एकाखाली एक (flex-col) आणि मोठ्या स्क्रीनवर शेजारी (sm:grid) दिसतील */}
                  <div className='flex flex-col sm:grid sm:grid-cols-2 gap-2'>
                    <input required type='tel' placeholder='Phone' className='w-full px-3 py-2 bg-[#001122] border border-white/5 rounded-md text-xs font-semibold text-white focus:border-[#8b1d31] outline-none transition-colors' />
                    <input required type='email' placeholder='Email' className='w-full px-3 py-2 bg-[#001122] border border-white/5 rounded-md text-xs font-semibold text-white focus:border-[#8b1d31] outline-none transition-colors' />
                  </div>

                  <input required type='text' placeholder='Machine Required' className='w-full px-3 py-2 bg-[#001122] border border-white/5 rounded-md text-xs font-semibold text-white focus:border-[#8b1d31] outline-none transition-colors' />
                  <textarea required placeholder='Message' rows='1' className='w-full px-3 py-2 bg-[#001122] border border-white/5 rounded-md text-xs font-semibold text-white focus:border-[#8b1d31] outline-none resize-none h-10 transition-colors'></textarea>
                  
                  <button type='submit' className='w-full bg-[#8b1d31] hover:bg-red-800 text-white font-black py-2 rounded-md transition-colors text-xs uppercase tracking-widest shadow shadow-black/30 active:scale-[0.99]'>
                    Send Enquiry
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ----------------- 3. COPYRIGHT & SOCIAL BAR ----------------- */}
      <div className='w-full bg-[#00050a] py-5 border-t border-white/5 relative z-10'>
        <div className='max-w-7xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
          
          {/* Social Media Links */}
          <div className='flex gap-2'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white/[0.02] hover:bg-[#8b1d31] p-2.5 rounded-lg border border-white/5 hover:border-transparent transition-all duration-300 transform hover:-translate-y-0.5 group'
              >
                <social.Icon size={14} className='text-gray-400 group-hover:text-white transition-colors' />
              </a>
            ))}
          </div>

          {/* Copyright Statement */}
          <div className='text-center sm:text-right'>
            <p className='text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-relaxed'>
              &copy; {new Date().getFullYear()}{' '}
              <span className='text-[#8b1d31] tracking-normal font-black'>
                Mech Chem Engineering Services
              </span>
              . All Rights Reserved.
            </p>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer