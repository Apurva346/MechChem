import React from 'react'
import {
  Facebook,
  Youtube,
  Instagram,
  X,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, link: 'https://facebook.com' },
    { Icon: X, link: 'https://x.com' },
    { Icon: Youtube, link: 'https://youtube.com' },
    { Icon: Instagram, link: 'https://instagram.com' }
  ]

  return (
    <footer className='bg-[#001a33] text-white py-16 mt-12 border-t-4 border-orange-500'>
      <div className='w-full px-8 md:px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {/* 1. Company Info & Contact (Shifted Follow Us & Contact here) */}
        <div className='space-y-10 lg:col-span-1'>
          <div>
            {/* <div className="flex items-center gap-2 mb-6">
               <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-black italic text-[#001a33] text-xl">M</div>
               <h1 className="text-xl font-black tracking-tighter uppercase">MECH <span className="text-orange-500">CHEM</span></h1>
            </div> */}
            <div className='flex flex-col mb-6'>
              <Link to='/' className='inline-block mb-2'>
                <img
                  src='/images/mechlogo.jpeg'
                  alt='Mech Chem Engineering Services'
                  /* फुटरमध्ये लोगोची उंची डेस्कटॉपवर h-20 आणि मोबाईलवर h-16 ठेवली आहे */
                  className='h-16 md:h-20 w-auto object-contain bg-white p-1 rounded-sm'
                />
              </Link>
              <p className='text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase mt-1'>
                Engineering Solutions Since 2012
              </p>
            </div>
            <p className='text-[14px] text-gray-400 leading-relaxed font-medium'>
              Reliable Industrial Machinery Sales & Services Since 2012. We
              Provide quality machines, professional installation, and
              dependable after-sales support for manufacturing industries.
            </p>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className='text-[12px] font-black uppercase tracking-widest mb-4 text-orange-500'>
              Follow Us
            </h4>
            <div className='flex gap-3'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className='bg-white/10 hover:bg-orange-500 p-2.5 rounded-full transition-all duration-300 group'
                >
                  <social.Icon
                    size={18}
                    className='group-hover:text-[#001a33]'
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us Section - Now under Follow Us */}
          <div className='pt-2'>
            <h3 className='text-md font-black mb-6 border-b-2 border-orange-500 w-fit pr-4 uppercase tracking-wider italic'>
              Contact Us
            </h3>
            <div className='space-y-5 text-[14px] text-gray-400 font-bold'>
              <div className='flex items-start gap-3'>
                <MapPin size={20} className='text-orange-500 shrink-0 mt-1' />
                <span className='leading-snug'>
                  Plot No.11 NASA Ground, Nehru Nagar, Nagpur - 440015
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <Phone size={18} className='text-orange-500 shrink-0' />
                <span>+91-9960846786 / 9226450455</span>
              </div>
              <div className='flex items-center gap-3'>
                <Mail size={18} className='text-orange-500 shrink-0' />
                <span className='break-all'>mechchemindia@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div className='lg:pl-10'>
          <h3 className='text-md font-black mb-8 border-b-2 border-orange-500 w-fit pr-4 uppercase tracking-wider italic'>
            Quick Links
          </h3>
          <ul className='space-y-4 text-[14px] text-gray-400 font-bold'>
            <li>
              <a
                href='/'
                className='hover:text-orange-500 transition-colors uppercase'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/about'
                className='hover:text-orange-500 transition-colors uppercase'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href='/about'
                className='hover:text-orange-500 transition-colors uppercase leading-tight inline-block'
              >
                Our Industrial Machinery Range
              </a>
            </li>
            <li>
              <a
                href='/i-nax'
                className='hover:text-orange-500 transition-colors uppercase'
              >
                i-NAX Brand
              </a>
            </li>
            <li>
              <a
                href='/about'
                className='hover:text-orange-500 transition-colors uppercase'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='/contact'
                className='hover:text-orange-500 transition-colors uppercase'
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* 3. Our Products */}
        <div>
          <h3 className='text-md font-black mb-8 border-b-2 border-orange-500 w-fit pr-4 uppercase tracking-wider italic'>
            Our Products
          </h3>
          <ul className='space-y-3 text-[14px] text-gray-400 font-bold'>
            <li className='hover:text-orange-500 transition-colors cursor-default'>
              Drilling Machines
            </li>
            <li className='hover:text-orange-500 transition-colors cursor-default'>
              Lathe Machines
            </li>
            <li className='hover:text-orange-500 transition-colors cursor-default'>
              Milling Machines
            </li>
            <li className='hover:text-orange-500 transition-colors cursor-default'>
              Power Press Machines
            </li>
            <li className='hover:text-orange-500 transition-colors cursor-default'>
              Shearing Machines
            </li>
            <li className='hover:text-orange-500 transition-colors cursor-default'>
              Shaping Machines
            </li>
            <li className='hover:text-orange-500 transition-colors cursor-default'>
              Press Brake Machines
            </li>
            <li className='hover:text-orange-500 transition-colors cursor-default'>
              Slotting Machines
            </li>
            <li className='hover:text-orange-500 transition-colors cursor-default'>
              Lathe Machine Chucks
            </li>
          </ul>
        </div>

        {/* 4. Serving Industries */}
        <div>
          <h3 className='text-md font-black mb-8 border-b-2 border-orange-500 w-fit pr-4 uppercase tracking-wider italic'>
            Serving Industries
          </h3>
          <ul className='space-y-4 text-[14px] text-gray-400 font-bold uppercase tracking-tight'>
            <li className='flex items-center gap-2 italic border-l-2 border-orange-500 pl-3'>
              Automobile
            </li>
            <li className='flex items-center gap-2 italic border-l-2 border-orange-500 pl-3'>
              Fabrication
            </li>
            <li className='flex items-center gap-2 italic border-l-2 border-orange-500 pl-3'>
              Manufacturing
            </li>
            <li className='flex items-center gap-2 italic border-l-2 border-orange-500 pl-3'>
              Engineering Workshops
            </li>
            <li className='flex items-center gap-2 italic border-l-2 border-orange-500 pl-3'>
              MSMEs
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className='border-t border-white/10 mt-16 pt-8 text-center text-[12px] text-gray-500 uppercase tracking-[0.3em] font-black'>
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <span className='text-orange-500 font-bold'>
            Mech Chem Engineering Services
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
