// import React from 'react'
// // सर्व आयकॉन्स एकाच ठिकाणाहून इम्पोर्ट केले आहेत
// import { Settings, Wrench, ShieldCheck, Users, ArrowRight, Cpu, Layout } from 'lucide-react'


// const Inax = () => {
//   return (
//     <div className='w-full overflow-hidden bg-white'>
//       {/* SECTION 1: HERO */}
//       <section className='relative h-[600px] w-full flex items-center justify-center overflow-hidden'>
//         <div className='absolute inset-0 z-0 w-full h-full'>
//           <img
//             src='https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80'
//             className='w-full h-full object-cover'
//             alt='CNC Machine Background'
//           />
//           <div className='absolute inset-0 bg-black/60'></div>
//         </div>

//         <div className='max-w-7xl mx-auto px-4 relative z-10 text-white text-center flex flex-col items-center'>
//           <h1 className='text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase leading-tight'>
//             I-NAX™ – Built for <br />
//             <span className='text-yellow-500'>Performance</span>
//           </h1>
//           <p className='text-xl md:text-2xl text-gray-200 max-w-3xl mb-10 leading-relaxed font-medium'>
//             Advanced CNC & Precision Industrial Machinery for Modern
//             Manufacturing.
//           </p>
//           <div className='flex flex-wrap gap-6 justify-center'>
//             <button className='bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-black px-10 py-4 rounded-md uppercase text-sm tracking-[0.2em] transition-all shadow-xl'>
//               Explore Machines
//             </button>
//             <button className='bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/50 text-white font-black px-10 py-4 rounded-md uppercase text-sm tracking-[0.2em] transition-all'>
//               Get a Quote
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* SECTION 2: OUR STORY - PROFESSIONAL TIMELINE DESIGN */}
//       <section className='py-24 bg-gradient-to-b from-white to-gray-50 w-full overflow-hidden'>
//         <div className='max-w-7xl mx-auto px-4'>
//           {/* Heading Section */}
//           <div className='text-center mb-20'>
//             <h2 className='text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900'>
//               Our <span className='text-red-700'>Story</span>
//             </h2>
//             <div className='w-20 h-1.5 bg-yellow-500 mx-auto mt-4 rounded-full'></div>
//           </div>

//           <div className='flex flex-col lg:flex-row gap-12 items-center'>
//             {/* Left Column: Text Content */}
//             <div className='flex-1 space-y-8'>
//               <div className='relative'>
//                 <p className='text-xl text-gray-800 leading-relaxed font-medium mb-6'>
//                   Founded in 2012,{' '}
//                   <strong>Mech Chem Engineering Services</strong> has been
//                   serving industries with high-quality industrial machinery,
//                   offering sales, service, and solutions that manufacturers can
//                   rely on.
//                 </p>
//                 <p className='text-lg text-gray-600 leading-relaxed'>
//                   This year, we introduced <strong>i-NAX™</strong>, our premium
//                   brand of advanced CNC and precision industrial machinery.
//                   i-NAX™ is the next step in our journey—a brand built to
//                   deliver modern manufacturing solutions with unmatched
//                   accuracy, reliability, and support.
//                 </p>
//               </div>

//               <div className='bg-white p-6 rounded-2xl border-l-8 border-red-700 shadow-xl'>
//                 <p className='text-gray-700 italic font-semibold leading-relaxed'>
//                   "Our mission is simple: to redefine industrial performance and
//                   help businesses thrive with machines built to last."
//                 </p>
//               </div>
//             </div>

//             {/* Right Column: Interactive Timeline (As per your Screenshot) */}
//             <div className='flex-1 w-full relative'>
//               <div className='relative flex flex-col space-y-12'>
//                 {/* Vertical Line */}
//                 <div className='absolute left-8 top-0 bottom-0 w-1 bg-dashed bg-gray-200 border-l-2 border-dashed border-gray-300'></div>

//                 {/* Point 1: 2012 */}
//                 <div className='relative flex items-center gap-8 group'>
//                   <div className='z-10 w-16 h-16 bg-gray-900 rounded-xl flex flex-col items-center justify-center text-white shadow-2xl transition-transform group-hover:scale-110'>
//                     <span className='text-xs font-bold uppercase opacity-70'>
//                       Since
//                     </span>
//                     <span className='text-xl font-black italic'>2012</span>
//                   </div>
//                   <div className='flex-1 bg-white p-6 rounded-2xl shadow-md border border-gray-100 group-hover:border-red-700 transition-colors'>
//                     <h3 className='font-black text-gray-900 uppercase tracking-widest text-sm mb-1'>
//                       Mech Chem Engineering
//                     </h3>
//                     <p className='text-xs text-gray-500 font-bold'>
//                       FOUNDATION & TRUSTED SERVICE
//                     </p>
//                   </div>
//                 </div>

//                 {/* Point 2: Launch */}
//                 <div className='relative flex items-center gap-8 group'>
//                   <div className='z-10 w-16 h-16 bg-yellow-500 rounded-xl flex flex-col items-center justify-center text-gray-900 shadow-2xl transition-transform group-hover:scale-110'>
//                     <span className='text-xs font-bold uppercase opacity-70'>
//                       NEW
//                     </span>
//                     <span className='text-xl font-black italic underline'>
//                       i-N
//                     </span>
//                   </div>
//                   <div className='flex-1 bg-white p-6 rounded-2xl shadow-md border border-gray-100 group-hover:border-yellow-500 transition-colors'>
//                     <h3 className='font-black text-gray-900 uppercase tracking-widest text-sm mb-1'>
//                       i-NAX™ Launched
//                     </h3>
//                     <p className='text-xs text-gray-500 font-bold text-yellow-600'>
//                       PREMIUM PRECISION BRAND
//                     </p>
//                   </div>
//                 </div>

//                 {/* Point 3: Future Focus */}
//                 <div className='relative flex items-center gap-8 group'>
//                   <div className='z-10 w-16 h-16 bg-red-700 rounded-xl flex items-center justify-center text-white shadow-2xl transition-transform group-hover:scale-110'>
//                     <Settings size={28} className='animate-spin-slow' />
//                   </div>
//                   <div className='flex-1 bg-white p-6 rounded-2xl shadow-md border border-gray-100 group-hover:border-red-700 transition-colors'>
//                     <h3 className='font-black text-gray-900 uppercase tracking-widest text-sm mb-1'>
//                       Modern Solutions
//                     </h3>
//                     <p className='text-xs text-gray-500 font-bold'>
//                       EMPOWERING MANUFACTURERS
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* SECTION: WHO WE ARE (Added after Our Story) */}
//       <section className='py-24 bg-gray-50 w-full overflow-hidden'>
//         <div className='max-w-7xl mx-auto px-4'>
//           <div className='flex flex-col lg:flex-row items-center gap-16'>
//             {/* Left Column: Content */}
//             <div className='flex-1 text-left'>
//               <h1 className='text-red-700 font-black uppercase tracking-[0.3em] mb-4 text-sm'>
//                 Who We Are
//               </h1>
//               <h2 className='text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8 uppercase tracking-tighter'>
//                 A New Standard in <br />
//                 <span className='text-gray-500'>Precision Engineering</span>
//               </h2>

//               <div className='space-y-6 text-lg text-gray-600 leading-relaxed'>
//                 <p className='font-bold text-gray-800 border-l-4 border-yellow-500 pl-4 bg-white py-4 shadow-sm'>
//                   i-NAX™ is a premium industrial machinery brand focused on
//                   delivering high-performance CNC and precision engineering
//                   solutions for modern manufacturing environments.
//                 </p>

//                 <p>
//                   Built on a foundation of technical expertise and industry
//                   insight, i-NAX™ represents a new standard in accuracy,
//                   durability, and operational excellence. We design and deliver
//                   machines that are <strong>Built for Performance</strong> —
//                   engineered to perform consistently under demanding industrial
//                   conditions.
//                 </p>

//                 <p>
//                   Backed by the experience of{' '}
//                   <strong>Mech Chem Engineering Services</strong>, we combine
//                   advanced design, intelligent control systems, and robust
//                   construction to meet the evolving needs of manufacturing and
//                   fabrication industries.
//                 </p>

//                 <div className='pt-4'>
//                   <p className='italic font-medium text-gray-900'>
//                     "Our focus goes beyond supplying machines. We aim to provide
//                     complete, dependable solutions that enhance productivity and
//                     support long-term success."
//                   </p>
//                 </div>
//               </div>

//               {/* Feature Tags */}
//               <div className='mt-10 flex flex-wrap gap-4'>
//                 <span className='px-4 py-2 bg-gray-200 text-gray-700 text-xs font-black uppercase rounded'>
//                   Accuracy
//                 </span>
//                 <span className='px-4 py-2 bg-gray-200 text-gray-700 text-xs font-black uppercase rounded'>
//                   Durability
//                 </span>
//                 <span className='px-4 py-2 bg-gray-200 text-gray-700 text-xs font-black uppercase rounded'>
//                   Stability
//                 </span>
//               </div>
//             </div>

//             {/* Right Column: Image/Visual */}
//             <div className='flex-1 relative w-full'>
//               <div className='relative'>
//                 {/* Main Decorative Image */}
//                 <div className='rounded-3xl overflow-hidden shadow-2xl'>
//                   <img
//                     src='https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80'
//                     alt='i-NAX Machine Design'
//                     className='w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700'
//                   />
//                 </div>

//                 {/* Floating Performance Tag */}
//                 <div className='absolute -bottom-10 -left-10 bg-yellow-500 p-8 rounded-2xl shadow-2xl hidden md:block max-w-[250px]'>
//                   <p className='text-gray-900 font-black uppercase text-xl leading-tight'>
//                     Built for <br />
//                     Performance
//                   </p>
//                   <div className='w-12 h-1 bg-gray-900 mt-2'></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* SECTION 3: WHAT MAKES US DIFFERENT */}
//       {/* <section className='py-24 bg-gray-50 w-full'>
//         <div className='max-w-7xl mx-auto px-4'>
//           <div className='flex flex-col lg:flex-row items-center gap-16'>
//             <div className='flex-1 relative w-full'>
//               <div className='relative rounded-2xl overflow-hidden shadow-2xl border-l-8 border-red-700'>
//                 <img
//                   src='https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80'
//                   alt='Quality Control'
//                   className='w-full h-[500px] object-cover'
//                 />
//                 <div className='absolute top-8 right-8 bg-red-700 text-white p-6 rounded-xl shadow-2xl text-center transform rotate-3'>
//                   <span className='block text-4xl font-black'>12+</span>
//                   <span className='text-[10px] uppercase font-bold tracking-widest'>
//                     Years of Excellence
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className='flex-1 text-left'>
//               <h2 className='text-4xl font-black text-gray-900 uppercase tracking-tighter leading-tight mb-6'>
//                 What Makes Us <br />
//                 <span className='text-red-700 underline decoration-yellow-500 underline-offset-8'>
//                   Different?
//                 </span>
//               </h2>
//               <p className='text-lg text-gray-600 mb-10 leading-relaxed'>
//                 Hum sirf machines nahi bechte, hum industrial growth ke partner
//                 bante hain. Hamari approach humein doosron se alag banati hai.
//               </p>
//               <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
//                 {[
//                   {
//                     title: 'Expert Consulting',
//                     desc: 'Aapki requirement ke hisaab se sahi machine suggest karna hamari pehli priority hai.'
//                   },
//                   {
//                     title: 'Quality Assurance',
//                     desc: 'Har machine i-NAX™ ke sakht quality standards se guzar kar aap tak pahunchti hai.'
//                   },
//                   {
//                     title: 'Post-Sales Support',
//                     desc: 'Service aur spare parts ke liye aapko kabhi rukna nahi padega.'
//                   },
//                   {
//                     title: 'Affordable Precision',
//                     desc: 'Hamara maqsad hai premium technology ko affordable price mein provide karna.'
//                   }
//                 ].map((point, index) => (
//                   <div key={index} className='flex gap-4'>
//                     <div className='mt-1 w-6 h-6 rounded-full bg-yellow-500 shrink-0 flex items-center justify-center'>
//                       <div className='w-2 h-2 bg-white rounded-full'></div>
//                     </div>
//                     <div>
//                       <h4 className='font-black text-gray-900 uppercase text-sm mb-1'>
//                         {point.title}
//                       </h4>
//                       <p className='text-xs text-gray-500'>{point.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button className='mt-12 px-8 py-4 bg-gray-900 text-white font-black rounded uppercase text-xs tracking-widest flex items-center gap-3 hover:bg-red-700 transition-colors'>
//                 Know More <ArrowRight size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section> */}
      
//       {/* SECTION 3: WHAT MAKES US DIFFERENT - SCREENSHOT STYLE */}
//       <section className='relative py-24 bg-gray-900 overflow-hidden'>
//         {/* Background Image with Overlay */}
//         <div className='absolute inset-0 z-0'>
//           <img
//             src='https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80'
//             alt='Industrial Background'
//             className='w-full h-full object-cover opacity-20'
//           />
//           <div className='absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900'></div>
//         </div>

//         <div className='max-w-7xl mx-auto px-4 relative z-10 text-center'>
//           {/* Heading */}
//           <h2 className='text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4'>
//             What Makes Us <span className='text-white/90'>Different</span>
//           </h2>
//           <p className='text-yellow-500 font-bold italic text-xl mb-16 tracking-wide'>
//             Precision. Performance. Reliability.
//           </p>

//           {/* Feature Grid */}
//           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm'>
//             {/* Feature 1 */}
//             <div className='p-10 border-r border-b border-white/10 hover:bg-white/10 transition-colors group'>
//               <div className='mb-6 flex justify-center'>
//                 <Cpu
//                   className='text-white group-hover:scale-110 transition-transform'
//                   size={48}
//                   strokeWidth={1.5}
//                 />
//               </div>
//               <h3 className='text-white font-black uppercase text-sm mb-3 tracking-widest'>
//                 Advanced CNC Technology
//               </h3>
//               <p className='text-gray-400 text-xs leading-relaxed uppercase font-medium'>
//                 Unmatched accuracy for modern manufacturing.
//               </p>
//             </div>

//             {/* Feature 2 */}
//             <div className='p-10 border-r border-b border-white/10 hover:bg-white/10 transition-colors group'>
//               <div className='mb-6 flex justify-center'>
//                 <Wrench
//                   className='text-yellow-500 group-hover:scale-110 transition-transform'
//                   size={48}
//                   strokeWidth={1.5}
//                 />
//               </div>
//               <h3 className='text-white font-black uppercase text-sm mb-3 tracking-widest'>
//                 Full-Service Support
//               </h3>
//               <p className='text-gray-400 text-xs leading-relaxed uppercase font-medium'>
//                 Installation, maintenance, and service you can trust.
//               </p>
//             </div>

//             {/* Feature 3 */}
//             <div className='p-10 border-r border-b border-white/10 hover:bg-white/10 transition-colors group'>
//               <div className='mb-6 flex justify-center'>
//                 <Layout
//                   className='text-white group-hover:scale-110 transition-transform'
//                   size={48}
//                   strokeWidth={1.5}
//                 />
//               </div>
//               <h3 className='text-white font-black uppercase text-sm mb-3 tracking-widest'>
//                 Tailored Solutions
//               </h3>
//               <p className='text-gray-400 text-xs leading-relaxed uppercase font-medium'>
//                 Machinery built to fit your production needs.
//               </p>
//             </div>

//             {/* Feature 4 */}
//             <div className='p-10 border-b border-white/10 hover:bg-white/10 transition-colors group'>
//               <div className='mb-6 flex justify-center'>
//                 <ShieldCheck
//                   className='text-white group-hover:scale-110 transition-transform'
//                   size={48}
//                   strokeWidth={1.5}
//                 />
//               </div>
//               <h3 className='text-white font-black uppercase text-sm mb-3 tracking-widest'>
//                 Trusted Expertise
//               </h3>
//               <p className='text-gray-400 text-xs leading-relaxed uppercase font-medium'>
//                 Over 10 years of industry experience.
//               </p>
//             </div>
//           </div>

//           {/* Bottom Quote */}
//           <div className='mt-16'>
//             <p className='text-gray-300 italic text-lg font-medium tracking-wide'>
//               "I-NAX™ machines aren't just built—they're engineered for
//               excellence."
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* SECTION 4: PRODUCT RANGE */}
//       <section className='py-24 bg-white w-full'>
//         <div className='max-w-7xl mx-auto px-4'>
//           <div className='text-center mb-20'>
//             <h2 className='text-4xl font-black uppercase tracking-[0.2em] text-gray-900'>
//               Our Product Range
//             </h2>
//             <div className='w-24 h-1 bg-red-700 mx-auto mt-4'></div>
//           </div>

//           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
//             {[
//               {
//                 title: 'CNC Machines',
//                 img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600'
//               },
//               {
//                 title: 'Lathe Machines',
//                 img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600'
//               },
//               {
//                 title: 'Precision Industrial Machines',
//                 img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600'
//               },
//               {
//                 title: 'Sales & Service Support',
//                 img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600'
//               }
//             ].map((product, i) => (
//               <div
//                 key={i}
//                 className='group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100'
//               >
//                 <div className='h-56 overflow-hidden'>
//                   <img
//                     src={product.img}
//                     className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
//                     alt={product.title}
//                   />
//                 </div>
//                 <div className='p-8 text-left'>
//                   <h3 className='text-xl font-black mb-4 text-gray-900 leading-tight h-14 flex items-center'>
//                     {product.title}
//                   </h3>
//                   <p className='text-sm text-gray-500 mb-8 leading-relaxed'>
//                     High-precision solutions engineered for maximum speed.
//                   </p>
//                   <button className='w-full py-3 bg-yellow-500 text-gray-900 font-black rounded-lg uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all'>
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* SECTION: WHY CHOOSE I-NAX (Modern Diagram Style) */}
//       <section className='py-24 bg-white w-full'>
//         <div className='max-w-7xl mx-auto px-4'>
//           {/* Heading Section */}
//           <div className='text-center mb-16'>
//             <h1 className='text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter'>
//               Why Choose <span className='text-red-700'>i-NAX™</span>
//             </h1>
//             <div className='w-20 h-1.5 bg-yellow-500 mx-auto mt-4'></div>
//           </div>

//           <div className='flex flex-col lg:flex-row items-center gap-12'>
//             {/* Left Side: Text Cards (Group 1) */}
//             <div className='flex-1 space-y-6'>
//               {[
//                 {
//                   title: 'Built for Performance',
//                   desc: 'Consistent performance under real industrial conditions. Stability over long cycles.'
//                 },
//                 {
//                   title: 'Precision Engineering',
//                   desc: 'High machining accuracy and repeatability with advanced control systems.'
//                 },
//                 {
//                   title: 'Industrial Build Quality',
//                   desc: 'Heavy-duty construction for reduced vibration and long service life.'
//                 },
//                 {
//                   title: 'Modern CNC Tech',
//                   desc: 'Latest routers, lathes, and laser systems for modern automation.'
//                 }
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className='group p-5 bg-gray-50 rounded-xl border-r-4 border-transparent hover:border-red-700 hover:shadow-md transition-all'
//                 >
//                   <h3 className='font-black text-gray-900 uppercase text-sm mb-1 group-hover:text-red-700'>
//                     {item.title}
//                   </h3>
//                   <p className='text-xs text-gray-600 leading-relaxed'>
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Center: Image Diagram */}
//             <div className='flex-1 relative'>
//               <div className='relative w-full aspect-square max-w-[450px] mx-auto'>
//                 {/* Decorative Rings */}
//                 <div className='absolute inset-0 border-[16px] border-gray-100 rounded-full animate-pulse'></div>

//                 {/* Main Product Image */}
//                 <div className='absolute inset-10 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10'>
//                   <img
//                     src='https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80'
//                     className='w-full h-full object-cover'
//                     alt='i-NAX Machine'
//                   />
//                 </div>

//                 {/* Floating Badges */}
//                 <div className='absolute top-0 right-0 bg-yellow-500 text-gray-900 p-4 rounded-lg font-black text-xs shadow-xl z-20 rotate-12'>
//                   100% PRECISION
//                 </div>
//                 <div className='absolute bottom-10 left-0 bg-gray-900 text-white p-4 rounded-lg font-black text-xs shadow-xl z-20 -rotate-12'>
//                   ISO CERTIFIED
//                 </div>
//               </div>
//             </div>

//             {/* Right Side: Text Cards (Group 2) */}
//             <div className='flex-1 space-y-6'>
//               {[
//                 {
//                   title: 'Trusted Expertise',
//                   desc: 'Backed by Mech Chem Engineering Services since 2012. Professional guidance.'
//                 },
//                 {
//                   title: 'Application-Focused',
//                   desc: 'Multiple configurations to match your specific production needs.'
//                 },
//                 {
//                   title: 'Reliable Service',
//                   desc: 'Responsive after-sales support to minimize downtime and maintain productivity.'
//                 },
//                 {
//                   title: 'Long-Term Value',
//                   desc: 'Strong ROI with focus on durability and easy serviceability.'
//                 }
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className='group p-5 bg-gray-50 rounded-xl border-l-4 border-transparent hover:border-yellow-500 hover:shadow-md transition-all text-right'
//                 >
//                   <h3 className='font-black text-gray-900 uppercase text-sm mb-1 group-hover:text-yellow-600'>
//                     {item.title}
//                   </h3>
//                   <p className='text-xs text-gray-600 leading-relaxed'>
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* SECTION 5: TRUST */}
//       <section className='relative py-28 bg-gray-900 w-full overflow-hidden text-center'>
//         <div className='max-w-7xl mx-auto px-4 relative z-10'>
//           <h2 className='text-3xl md:text-4xl font-black text-white mb-20 uppercase tracking-[0.3em]'>
//             Why Manufacturers Trust I-NAX™
//           </h2>
//           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-white'>
//             <FeatureBox
//               Icon={Settings}
//               title='Precision'
//               desc='Engineered for accuracy in every component.'
//             />
//             <FeatureBox
//               Icon={Wrench}
//               title='Support'
//               desc='Installation and service you can trust 24/7.'
//             />
//             <FeatureBox
//               Icon={ShieldCheck}
//               title='Custom'
//               desc='Machinery built to fit your production needs.'
//             />
//             <FeatureBox
//               Icon={Users}
//               title='Experience'
//               desc='Over 10 years of trusted industry expertise.'
//             />
//           </div>
//           <button className='mt-20 bg-yellow-500 text-gray-900 px-12 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform'>
//             Contact Our Experts
//           </button>
//         </div>
//       </section>
//       {/* SECTION 6: OUR SERVICES */}
//       <section className='py-24 bg-gray-900 text-white w-full'>
//         <div className='max-w-7xl mx-auto px-4 text-center'>
//           {/* Headings */}
//           <h1 className='text-yellow-500 font-black uppercase tracking-[0.3em] mb-4 text-4xl'>
//             Our Services
//           </h1>
//           <h2 className='text-sm md:text-5xl font-black mb-16 uppercase tracking-tighter italic'>
//             Complete Industrial <br />
//             <span className='text-white decoration-red-700 underline underline-offset-8'>
//               Machinery Solutions
//             </span>
//           </h2>

//           {/* Services Grid */}
//           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
//             {[
//               {
//                 title: 'Industrial Machinery Sales',
//                 desc: 'We supply reliable industrial machines designed for accuracy, durability, and long-term performance.',
//                 icon: <Settings className='text-yellow-500' size={32} />
//               },
//               {
//                 title: 'Installation & Commissioning',
//                 desc: 'Professional installation and commissioning to ensure safe and optimal machine operation.',
//                 icon: <Wrench className='text-yellow-500' size={32} />
//               },
//               {
//                 title: 'Repair & Maintenance',
//                 desc: 'Fast and dependable service support to reduce downtime and maintain productivity.',
//                 icon: <ShieldCheck className='text-yellow-500' size={32} />
//               },
//               {
//                 title: 'Spare Parts Support',
//                 desc: 'Genuine spare parts to maintain machine efficiency and service life.',
//                 icon: <Users className='text-yellow-500' size={32} />
//               }
//             ].map((service, idx) => (
//               <div
//                 key={idx}
//                 className='group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 text-left relative overflow-hidden'
//               >
//                 {/* Background Decorative Number */}
//                 <span className='absolute -right-4 -bottom-4 text-8xl font-black text-white/5 group-hover:text-yellow-500/10 transition-colors'>
//                   0{idx + 1}
//                 </span>

//                 <div className='mb-6 p-4 bg-white/5 inline-block rounded-2xl group-hover:scale-110 transition-transform'>
//                   {service.icon}
//                 </div>

//                 <h3 className='text-xl font-black mb-4 uppercase leading-tight tracking-wide group-hover:text-yellow-500 transition-colors'>
//                   {service.title}
//                 </h3>

//                 <p className='text-gray-400 text-sm leading-relaxed relative z-10'>
//                   {service.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Action Buttons */}
//           <div className='flex flex-wrap justify-center gap-6'>
//             <button className='bg-red-700 hover:bg-red-800 text-white font-black px-10 py-4 rounded-full uppercase text-xs tracking-[0.2em] transition-all shadow-2xl flex items-center gap-2'>
//               Request Service <ArrowRight size={16} />
//             </button>
//             <button className='border-2 border-white/30 hover:border-yellow-500 hover:text-yellow-500 text-white font-black px-10 py-4 rounded-full uppercase text-xs tracking-[0.2em] transition-all shadow-xl'>
//               Get a Quote
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// const FeatureBox = ({ Icon, title, desc }) => (
//   <div className='flex flex-col items-center'>
//     <div className='w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20'>
//       <Icon className='text-yellow-500' size={28} />
//     </div>
//     <h4 className='font-black text-lg mb-2 italic uppercase'>{title}</h4>
//     <p className='text-sm text-gray-400'>{desc}</p>
//   </div>
// )

// export default Inax



import React from 'react'
import { Link } from 'react-router-dom'

const Inax = () => {
  return (
    <div>
      <a href='https://inax.mechchemindia.com/' ></a>
    </div>
  )
}

export default Inax
