// import React from 'react'
// import { Link } from 'react-router-dom'
// import {
//   Settings,
//   Wrench,
//   ShieldCheck,
//   Factory,
//   Zap,
//   Award,
//   Users,
//   Hammer,
//   CheckCircle2,
//   Phone,
//   Mail,
//   ChevronRight
// } from 'lucide-react'

// const Home = () => {
//   return (
//     <div className='bg-white w-full overflow-hidden font-sans'>
//       {/* 1. HERO SECTION */}
//       <section className='relative w-full min-h-[85vh] flex items-center bg-[#003366]'>
//         {/* Subtle Overlay Pattern */}
//         <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.istockphoto.com/photo/industrial-robot-gm164106765-23374159')]"></div>

//         <div className='container mx-auto px-6 md:px-12 lg:px-20 relative z-10'>
//           <div className='grid lg:grid-cols-2 gap-12 items-center'>
//             <div className='space-y-8'>
//               <div className='inline-block border-l-4 border-orange-500 pl-4'>
//                 <h1 className='text-white text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter'>
//                   Mech Chem <br />
//                   <span className='text-orange-500'>Engineering Services</span>
//                 </h1>
//               </div>

//               <h2 className='text-gray-300 text-2xl md:text-3xl font-bold uppercase tracking-wide'>
//                 Industrial Machinery Sales & Services Since 2012
//               </h2>

//               <div className='space-y-4 max-w-xl'>
//                 <p className='text-white text-xl font-extrabold italic'>
//                   Reliable Industrial Solutions. Trusted Engineering Expertise.
//                 </p>
//                 <p className='text-gray-400 text-lg leading-relaxed'>
//                   Mech Chem Engineering Services is a trusted name in industrial
//                   machinery sales, service, and support. Since our establishment
//                   in 2012 in Nagpur, Maharashtra, we have been delivering
//                   reliable engineering solutions that help industries operate
//                   efficiently and productively.
//                 </p>
//               </div>

//               <div className='flex flex-wrap gap-5 pt-4'>
//                 <Link
//                   to='/contact'
//                   className='bg-orange-500 text-white px-10 py-4 font-black hover:bg-white hover:text-[#003366] transition-all uppercase text-xs tracking-widest shadow-xl flex items-center gap-2'
//                 >
//                   Get in Touch <ChevronRight size={16} />
//                 </Link>
//                 <Link
//                   to='/i-nax'
//                   className='bg-transparent border-2 border-white text-white px-10 py-4 font-black hover:bg-white hover:text-[#003366] transition-all uppercase text-xs tracking-widest'
//                 >
//                   Discover i-NAX™
//                 </Link>
//               </div>
//             </div>

//             <div className='hidden lg:flex justify-end'>
//               <div className='relative p-4 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10'>
//                 <img
//                   src='https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1000&auto=format&fit=crop'
//                   alt='Industrial Machinery'
//                   className='relative w-full max-w-lg h-[450px] object-cover rounded-2xl shadow-2xl'
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. STATS BAR */}
//       <section className='w-full bg-gray-50 border-y'>
//         <div className='container mx-auto px-6 lg:px-20'>
//           <div className='grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200'>
//             {[
//               { label: 'Established', val: '2012' },
//               { label: 'Experience', val: '12+ Years' },
//               { label: 'Supplied', val: '100+ Machines' },
//               { label: 'Client Trust', val: 'Reliable' }
//             ].map((stat, i) => (
//               <div key={i} className='py-10 text-center'>
//                 <p className='text-[#003366] text-3xl font-black'>{stat.val}</p>
//                 <p className='text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1'>
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. i-NAX™ BRAND HIGHLIGHT */}
//       {/* <section className="w-full py-24 bg-white">
//         <div className="container mx-auto px-6 lg:px-20">
//           <div className="bg-[#003366] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-gray-100">
//             <div className="lg:w-1/2 p-12 md:p-16 space-y-6">
//               <h2 className="text-orange-500 text-sm font-black tracking-[0.4em] uppercase">Introducing Our Premium Brand</h2>
//               <h3 className="text-white text-6xl md:text-8xl font-black italic tracking-tighter uppercase">i-NAX™</h3>
//               <p className="text-white text-2xl font-bold italic border-b-2 border-orange-500 pb-4 inline-block">
//                 Built for Performance. Engineered for Precision.
//               </p>
//               <p className="text-gray-300 text-lg leading-relaxed pt-4">
//                 In 2025, Mech Chem Engineering Services launched i-NAX™, a premium brand of advanced CNC and precision machinery. I-NAX™ machines are built to deliver high precision, long-lasting durability, and reliable performance for modern manufacturing industries.
//               </p>
//               <Link to="/i-nax" className="inline-flex bg-orange-500 text-white px-10 py-4 font-black hover:bg-white hover:text-[#003366] transition-all uppercase text-xs tracking-widest mt-4">
//                 Explore i-NAX™ Products
//               </Link>
//             </div>
//             <div className="lg:w-1/2 relative min-h-[400px]">
//                <img
//                  src="./images/whychooseinax.png"
//                  alt="i-NAX Machine"
//                  className="absolute inset-0 w-full h-full object-cover"
//                />
//                <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-transparent lg:hidden"></div>
//             </div>
//           </div>
//         </div>
//       </section> */}
//       <section className='w-full relative min-h-[600px] flex items-center bg-[#003366] overflow-hidden'>
//         {/* 1. Background Image Layer */}
//         <div className='absolute inset-0 z-0'>
//           <img
//             src='./images/whychooseinax.png'
//             alt='i-NAX Background'
//             className='w-full h-full object-cover'
//           />
//           {/* Dark Overlay - मजकूर स्पष्ट दिसण्यासाठी हा ग्रेडियंट महत्त्वाचा आहे */}
//           <div className='absolute inset-0 bg-gradient-to-r from-[#003366] via-[#003366]/80 to-transparent'></div>
//         </div>

//         {/* 2. Content Layer */}
//         <div className='relative z-10 w-full'>
//           {/* container काढून थेट padding वापरले आहे जेणेकरून पूर्ण रुंदी मिळेल */}
//           <div className='w-full p-10 md:p-20 lg:p-5'>
//             <div className='max-w-4xl space-y-6'>
//               <h2 className='text-orange-500 text-sm font-black tracking-[0.4em] uppercase'>
//                 Introducing Our Premium Brand
//               </h2>

//               <h3 className='text-white text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-none'>
//                 i-NAX™
//               </h3>

//               <div className='inline-block border-b-4 border-orange-500 pb-4'>
//                 <p className='text-white text-2xl md:text-3xl font-bold italic'>
//                   Built for Performance. Engineered for Precision.
//                 </p>
//               </div>

//               <p className='text-gray-200 text-lg md:text-xl leading-relaxed pt-4 max-w-2xl font-medium'>
//                 In 2025, Mech Chem Engineering Services launched i-NAX™, a
//                 premium brand of advanced CNC and precision machinery. I-NAX™
//                 machines are built to deliver high precision, long-lasting
//                 durability, and reliable performance for modern manufacturing
//                 industries.
//               </p>

//               <div className='pt-6'>
//                 <Link
//                   to='/i-nax'
//                   className='inline-flex bg-orange-500 text-white px-12 py-5 font-black hover:bg-white hover:text-[#003366] transition-all uppercase text-xs tracking-[0.2em] shadow-2xl'
//                 >
//                   Explore i-NAX™ Products
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. WHO WE ARE */}
//       <section className='w-full py-24 bg-gray-50'>
//         <div className='container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-20 items-center'>
//           <div className='relative'>
//             <div className='bg-orange-500 w-20 h-1 mb-6'></div>
//             <h2 className='text-[#003366] text-5xl font-black uppercase tracking-tighter mb-8'>
//               Who We Are
//             </h2>
//             <p className='text-gray-700 text-xl font-bold leading-relaxed mb-6 italic'>
//               Founded in 2012, Mech Chem Engineering Services specializes in the
//               sale, installation, servicing, and maintenance of industrial
//               machinery.
//             </p>
//             <p className='text-gray-600 text-lg leading-relaxed'>
//               With over a decade of hands-on industry experience, we are
//               committed to providing dependable machines, expert technical
//               support, and long-term value to our clients. Our strength lies in
//               combining practical engineering knowledge with customer-focused
//               service, ensuring smooth operations and minimal downtime for our
//               customers.
//             </p>
//           </div>
//           <div className='grid grid-cols-2 gap-6'>
//             <img
//               src='https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=500&auto=format&fit=crop'
//               className='rounded-2xl h-64 w-full object-cover shadow-lg'
//               alt='Workshop'
//             />
//             <div className='bg-[#003366] p-10 rounded-2xl text-white flex flex-col justify-center text-center shadow-xl'>
//               <h4 className='text-4xl font-black text-orange-500 mb-2'>12+</h4>
//               <p className='text-[10px] uppercase font-bold tracking-widest'>
//                 Years of Expertise
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 5. OUR SERVICES */}
//       <section className='w-full py-24 bg-white'>
//         <div className='container mx-auto px-6 lg:px-20'>
//           <div className='mb-20 text-center lg:text-left'>
//             <h2 className='text-[#003366] text-5xl font-black uppercase tracking-tighter'>
//               Our Services
//             </h2>
//             <p className='text-orange-500 text-xl font-bold uppercase italic mt-2'>
//               Industrial Solutions You Can Rely On
//             </p>
//           </div>

//           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-1'>
//             {[
//               {
//                 icon: <Settings size={40} />,
//                 title: 'Industrial Machinery Sales',
//                 desc: 'High-quality industrial machines designed to meet modern manufacturing needs.'
//               },
//               {
//                 icon: <Hammer size={40} />,
//                 title: 'Installation & Commissioning',
//                 desc: 'Professional installation and setup for optimal machine performance.'
//               },
//               {
//                 icon: <Wrench size={40} />,
//                 title: 'Repair & Maintenance Services',
//                 desc: 'Quick and reliable servicing to reduce downtime and increase productivity.'
//               },
//               {
//                 icon: <ShieldCheck size={40} />,
//                 title: 'Spare Parts Support',
//                 desc: 'Genuine spare parts to ensure durability and consistent performance.'
//               }
//             ].map((s, i) => (
//               <div
//                 key={i}
//                 className='bg-gray-50 p-12 hover:bg-[#003366] hover:text-white transition-all duration-500 group border-b-4 border-transparent hover:border-orange-500 shadow-sm'
//               >
//                 <div className='text-orange-500 mb-8 group-hover:scale-110 transition-transform'>
//                   {s.icon}
//                 </div>
//                 <h4 className='text-lg font-black uppercase mb-4 leading-tight'>
//                   {s.title}
//                 </h4>
//                 <p className='text-sm opacity-70 group-hover:opacity-100 leading-relaxed'>
//                   {s.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 6. WHY CHOOSE & INDUSTRIES */}
//       <section className='w-full py-24 bg-[#001a33] text-white'>
//         <div className='container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-24'>
//           <div className='space-y-12'>
//             <h2 className='text-3xl font-black uppercase border-b-2 border-orange-500 pb-4 inline-block'>
//               Why Choose Us
//             </h2>
//             <div className='space-y-6'>
//               {[
//                 'Established in 2012 with proven industry experience',
//                 'Trusted partner for sales and after-sales support',
//                 'Skilled technical and service team',
//                 'Customer-first approach',
//                 'Commitment to quality and reliability'
//               ].map((item, i) => (
//                 <div key={i} className='flex items-start gap-4'>
//                   <CheckCircle2
//                     className='text-orange-500 shrink-0'
//                     size={24}
//                   />
//                   <span className='text-lg font-bold text-gray-200'>
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className='space-y-12'>
//             <h2 className='text-3xl font-black uppercase border-b-2 border-orange-500 pb-4 inline-block'>
//               Industries We Serve
//             </h2>
//             <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
//               {[
//                 'Manufacturing Units',
//                 'Engineering Workshops',
//                 'Automotive & Components',
//                 'Fabrication & Tool Rooms',
//                 'Industrial Production Facilities'
//               ].map((ind, i) => (
//                 <div
//                   key={i}
//                   className='flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors'
//                 >
//                   <Factory size={18} className='text-orange-500' />
//                   <span className='text-xs font-black uppercase tracking-widest'>
//                     {ind}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 7. FINAL CTA */}
//       <section className='w-full py-32 bg-white text-center'>
//         <div className='container mx-auto px-6 max-w-5xl'>
//           <h2 className='text-[#003366] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6'>
//             Let’s Build Reliable Industrial <br />{' '}
//             <span className='text-orange-500'>Solutions Together</span>
//           </h2>
//           <p className='text-gray-500 text-xl font-bold italic mb-12'>
//             Looking for trusted industrial machinery or expert service support?{' '}
//             <br />
//             Our team is ready to help you choose the right solution for your
//             business.
//           </p>
//           <div className='flex flex-col sm:flex-row justify-center gap-6'>
//             <Link
//               to='/contact'
//               className='bg-[#003366] text-white px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-orange-500 transition-all shadow-2xl flex items-center justify-center gap-3'
//             >
//               <Phone size={18} /> Contact Us Today
//             </Link>
//             <Link
//               to='/contact'
//               className='bg-white border-2 border-[#003366] text-[#003366] px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#003366] hover:text-white transition-all flex items-center justify-center gap-3'
//             >
//               <Mail size={18} /> Request a Service or Quotation
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion' // Framer Motion Added
import {
  Settings,
  Wrench,
  ShieldCheck,
  Factory,
  Zap,
  Award,
  Users,
  Hammer,
  CheckCircle2,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react'

const Home = () => {
  return (
    <div className='bg-white w-full overflow-hidden font-sans'>
      {/* 1. HERO SECTION */}

      <section className='relative w-full min-h-[90vh] flex items-center bg-[#003366] overflow-hidden py-1'>
        {/* Background Image Layer - Less blur, better visibility */}
        <div className='absolute inset-0 z-0'>
          <img
            src='https://wallpaperaccess.com/full/8885056.jpg'
            className='w-full h-full object-cover ' // Opacity वाढवली जेणेकरून इमेज स्पष्ट दिसेल
            alt='Industrial Background'
          />
          {/* Gradient Overlay for Text Readability */}
          <div className='absolute inset-0 bg-gradient-to-r from-[#003366] via-[#003366]/60 to-transparent'></div>
        </div>

        <div className='container mx-auto px-6 md:px-12 lg:px-20 relative z-10'>
          <div className='max-w-4xl'>
            {' '}
            {/* उजव्या बाजूची इमेज काढल्यामुळे आता कंटेन्टला जास्त जागा मिळेल */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-10 md:py-10' // Padding वाढवले आहे
            >
              <div className='inline-block border-l-4 border-orange-500 pl-6'>
                {/* Mech Chem चा फॉन्ट साईज कमी केला आहे (text-4xl to 6xl) */}
                <h1 className='text-white text-4xl md:text-4xl font-black uppercase leading-tight tracking-tighter'>
                  Mech Chem <br />
                  <span className='text-orange-500'>Engineering Services</span>
                </h1>
              </div>

              <h2 className='text-gray-200 text-xl md:text-2xl font-bold uppercase tracking-wide max-w-2xl'>
                Industrial Machinery Sales & Services Since 2012
              </h2>

              <div className='space-y-6 max-w-2xl'>
                <p className='text-white text-lg md:text-xl font-bold italic border-b border-orange-500/30 pb-1 inline-block'>
                  Reliable Industrial Solutions. Trusted Engineering Expertise.
                </p>
                <p className='text-gray-300 text-lg leading-relaxed font-medium'>
                  Mech Chem Engineering Services is a trusted name in industrial
                  machinery sales, service, and support. Since our establishment
                  in 2012 in Nagpur, Maharashtra, we have been delivering
                  reliable engineering solutions that help industries operate
                  efficiently and productively.
                </p>
              </div>

              <div className='flex flex-wrap gap-6 pt-1'>
                <Link
                  to='/contact'
                  className='bg-orange-500 text-white px-12 py-4 font-black hover:bg-white hover:text-[#003366] transition-all duration-300 uppercase text-xs tracking-widest shadow-2xl flex items-center gap-2'
                >
                  Get in Touch <ChevronRight size={16} />
                </Link>
                <Link
                  to='/i-nax'
                  className='bg-white/10 backdrop-blur-md border-2 border-white text-white px-12 py-4 font-black hover:bg-white hover:text-[#003366] transition-all duration-300 uppercase text-xs tracking-widest'
                >
                  Discover i-NAX™
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 2. STATS BAR */}
      <section className='w-full bg-gray-50 border-y'>
        <div className='container mx-auto px-6 lg:px-20'>
          <div className='grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200'>
            {[
              { label: 'Established', val: '2012' },
              { label: 'Experience', val: '12+ Years' },
              { label: 'Supplied', val: '100+ Machines' },
              { label: 'Client Trust', val: 'Reliable' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className='py-10 text-center'
              >
                <p className='text-[#003366] text-3xl font-black'>{stat.val}</p>
                <p className='text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1'>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. i-NAX™ BRAND HIGHLIGHT */}

      <section className='w-full relative min-h-[600px] flex items-start bg-[#003366] overflow-hidden'>
        {/* items-start मुळे मजकूर एकदम टॉपला जाईल */}

        {/* 1. Background Layer */}
        <div className='absolute inset-0 z-0'>
          <img
            src='./images/whychooseinax.png'
            alt='i-NAX Background'
            className='w-full h-full object-cover opacity-80'
            style={{
              objectPosition: 'center bottom'
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#003366]/40 to-transparent'></div>
        </div>

        {/* 2. Content Layer - Zero Top Padding */}
        <div className='relative z-10 w-full'>
          {/* pt-0 (Padding Top Zero) आणि px-3 वापरले आहे */}
          <div className='w-full px-3 pt-0 pb-10 text-left'>
            <motion.div
              initial={{ opacity: 0, y: -20 }} // वरून खाली येणारे ॲनिमेशन
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='max-w-3xl space-y-4'
            >
              {/* 'Introducing...' च्या वर असलेली डीफॉल्ट जागा घालवण्यासाठी mt-0 वापरले आहे */}
              <h2 className='text-orange-500 text-[10px] font-black tracking-[0.4em] uppercase mt-0 pt-4'>
                Introducing Our Premium Brand
              </h2>

              <h3 className='text-white text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none'>
                i-NAX™
              </h3>

              <div className='inline-block border-b-4 border-orange-500 pb-2'>
                <p className='text-white text-xl md:text-2xl font-bold italic leading-tight'>
                  Built for Performance. Engineered for Precision.
                </p>
              </div>

              <p className='text-white text-sm md:text-lg leading-relaxed max-w-xl font-semibold drop-shadow-lg'>
                In 2025, Mech Chem Engineering Services launched i-NAX™, a
                premium brand of advanced CNC and precision machinery. I-NAX™
                machines are built to deliver high precision, long-lasting
                durability, and reliable performance for modern manufacturing
                industries.
              </p>

              <div className='pt-4'>
                <Link
                  to='/i-nax'
                  className='inline-flex bg-orange-500 text-white px-10 py-4 font-black hover:bg-white hover:text-[#003366] transition-all uppercase text-[10px] tracking-widest shadow-2xl'
                >
                  Explore i-NAX™ Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 4. WHO WE ARE */}
      <section className='w-full py-24 bg-gray-50'>
        <div className='container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-20 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className='bg-orange-500 w-20 h-1 mb-6'></div>
            <h2 className='text-[#003366] text-5xl font-black uppercase tracking-tighter mb-8'>
              Who We Are
            </h2>
            <p className='text-gray-700 text-xl font-bold leading-relaxed mb-6 italic'>
              Founded in 2012, Mech Chem Engineering Services specializes in the
              sale, installation, servicing, and maintenance of industrial
              machinery.
            </p>
            <p className='text-gray-600 text-lg leading-relaxed'>
              With over a decade of hands-on industry experience, we are
              committed to providing dependable machines, expert technical
              support, and long-term value to our clients. Our strength lies in
              combining practical engineering knowledge with customer-focused
              service, ensuring smooth operations and minimal downtime for our
              customers.
            </p>
          </motion.div>
          <div className='grid grid-cols-2 gap-6'>
            <img
              src='https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=500'
              className='rounded-2xl h-64 w-full object-cover shadow-lg'
              alt='Workshop'
            />
            <div className='bg-[#003366] p-10 rounded-2xl text-white flex flex-col justify-center text-center shadow-xl'>
              <h4 className='text-4xl font-black text-orange-500 mb-2'>12+</h4>
              <p className='text-[10px] uppercase font-bold tracking-widest'>
                Years of Expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR SERVICES */}
      <section className='w-full py-24 bg-white'>
        <div className='container mx-auto px-6 lg:px-20'>
          <div className='mb-20 text-center lg:text-left'>
            <h2 className='text-[#003366] text-5xl font-black uppercase tracking-tighter'>
              Our Services
            </h2>
            <p className='text-orange-500 text-xl font-bold uppercase italic mt-2'>
              Industrial Solutions You Can Rely On
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-1'>
            {[
              {
                icon: <Settings size={40} />,
                title: 'Industrial Machinery Sales',
                desc: 'High-quality industrial machines designed to meet modern manufacturing needs.'
              },
              {
                icon: <Hammer size={40} />,
                title: 'Installation & Commissioning',
                desc: 'Professional installation and setup for optimal machine performance.'
              },
              {
                icon: <Wrench size={40} />,
                title: 'Repair & Maintenance Services',
                desc: 'Quick and reliable servicing to reduce downtime and increase productivity.'
              },
              {
                icon: <ShieldCheck size={40} />,
                title: 'Spare Parts Support',
                desc: 'Genuine spare parts to ensure durability and consistent performance.'
              }
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className='bg-gray-50 p-12 hover:bg-[#003366] hover:text-white transition-all duration-500 group border-b-4 border-transparent hover:border-orange-500 shadow-sm'
              >
                <div className='text-orange-500 mb-8 group-hover:scale-110 transition-transform'>
                  {s.icon}
                </div>
                <h4 className='text-lg font-black uppercase mb-4 leading-tight'>
                  {s.title}
                </h4>
                <p className='text-sm opacity-70 group-hover:opacity-100 leading-relaxed'>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE & INDUSTRIES */}
      <section className='w-full py-24 bg-[#001a33] text-white'>
        <div className='container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-24'>
          <div className='space-y-12'>
            <h2 className='text-3xl font-black uppercase border-b-2 border-orange-500 pb-4 inline-block'>
              Why Choose Us
            </h2>
            <div className='space-y-6'>
              {[
                'Established in 2012 with proven industry experience',
                'Trusted partner for sales and after-sales support',
                'Skilled technical and service team',
                'Customer-first approach',
                'Commitment to quality and reliability'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className='flex items-start gap-4'
                >
                  <CheckCircle2
                    className='text-orange-500 shrink-0'
                    size={24}
                  />
                  <span className='text-lg font-bold text-gray-200'>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className='space-y-12'>
            <h2 className='text-3xl font-black uppercase border-b-2 border-orange-500 pb-4 inline-block'>
              Industries We Serve
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {[
                'Manufacturing Units',
                'Engineering Workshops',
                'Automotive & Components',
                'Fabrication & Tool Rooms',
                'Industrial Production Facilities'
              ].map((ind, i) => (
                <div
                  key={i}
                  className='flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors'
                >
                  <Factory size={18} className='text-orange-500' />
                  <span className='text-xs font-black uppercase tracking-widest'>
                    {ind}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className='w-full py-32 bg-white text-center'>
        <div className='container mx-auto px-6 max-w-5xl'>
          <h2 className='text-[#003366] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6'>
            Let’s Build Reliable Industrial <br />{' '}
            <span className='text-orange-500'>Solutions Together</span>
          </h2>
          <p className='text-gray-500 text-xl font-bold italic mb-12'>
            Looking for trusted industrial machinery or expert service support?{' '}
            <br />
            Our team is ready to help you choose the right solution for your
            business.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-6'>
            <Link
              to='/contact'
              className='bg-[#003366] text-white px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-orange-500 transition-all shadow-2xl flex items-center justify-center gap-3'
            >
              <Phone size={18} /> Contact Us Today
            </Link>
            <Link
              to='/contact'
              className='bg-white border-2 border-[#003366] text-[#003366] px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#003366] hover:text-white transition-all flex items-center justify-center gap-3'
            >
              <Mail size={18} /> Request a Service or Quotation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
