// import { Link } from 'react-router-dom';
// import { ChevronDown, ArrowRight } from 'lucide-react';
// import { useState } from 'react';

// const DropdownMenu = ({ title, items }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const safeItems = items || [];

//   return (
//     <div 
//       className="static lg:relative"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       {/* Trigger Button */}
//       <button 
//         type="button"
//         className={`
//           flex items-center gap-1 py-8 px-2 uppercase text-[13px] font-black tracking-widest transition-all duration-300 outline-none cursor-pointer
//           ${isOpen ? 'text-orange-500' : 'text-[#003366] hover:text-orange-500'}
//         `}
//       >
//         {title} 
//         <ChevronDown 
//           size={14} 
//           className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-orange-500' : ''}`} 
//         />
//       </button>

//       {/* Mega Menu Container */}
//       <div className={`
//         fixed left-0 right-0 top-[130px] w-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
//         z-[999] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
//         border-t border-gray-100
//         ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}
//       `}>
//         {/* Decorative Top Accent Line */}
//         <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-[#003366] to-orange-500"></div>

//         <div className="max-h-[80vh] overflow-y-auto custom-scrollbar">
//           <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
              
//               {safeItems.map((section, idx) => (
//                 <div key={idx} className="group/section space-y-5">
//                   {/* Category Header */}
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className="w-1 h-6 bg-orange-500"></div>
//                     <h4 className="text-[#003366] font-black text-[13px] uppercase tracking-[0.15em]">
//                       {section.category}
//                     </h4>
//                   </div>
                  
//                   {/* Links List */}
//                   <ul className="space-y-3">
//                     {section.subItems && section.subItems.map((subItem, subIdx) => (
//                       <li key={subIdx}>
//                         <Link 
//                           to={`/machine/${subItem.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
//                           onClick={() => setIsOpen(false)}
//                           className="group/link flex items-center justify-between text-gray-500 hover:text-[#003366] transition-all duration-300"
//                         >
//                           <span className="text-[12px] font-bold tracking-tight group-hover/link:translate-x-2 transition-transform duration-300">
//                             {subItem}
//                           </span>
//                           <ArrowRight 
//                             size={12} 
//                             className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-orange-500" 
//                           />
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}

//               {/* Optional Right Side Feature Card */}
//               <div className="hidden lg:block bg-gray-50 p-6 rounded-xl border border-gray-100">
//                  <h5 className="text-[#003366] font-black text-xs uppercase mb-3 italic">Expert Assistance</h5>
//                  <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
//                     Can't find the right machine? Let our engineers guide you to the perfect industrial solution.
//                  </p>
//                  <Link to="/contact" className="text-orange-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
//                     Talk to Expert <ArrowRight size={12} />
//                  </Link>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DropdownMenu;



import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const safeItems = items || [];

  return (
    <div 
      className="static" // Mega menu साठी हे static असावे लागते जेणेकरून तो पूर्ण रुंदी घेईल
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        type="button"
        className={`flex items-center gap-1 py-8 px-2 uppercase text-[13px] font-black tracking-widest transition-all duration-300 outline-none cursor-pointer
          ${isOpen ? 'text-orange-500' : 'text-[#003366] hover:text-orange-500'}
        `}
      >
        {title} 
        <ChevronDown size={14} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Mega Menu Container */}
      <div className={`
        fixed left-0 right-0 top-[130px] w-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
        z-[999] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        border-t border-gray-100
        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}
      `}>
        <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-[#003366] to-orange-500"></div>

        <div className="max-h-[80vh] overflow-y-auto">
          {/* container काढून w-full + समान padding वापरले आहे */}
          <div className="w-full px-6 md:px-12 lg:px-20 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
              {safeItems.map((section, idx) => (
                <div key={idx} className="space-y-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-orange-500"></div>
                    <h4 className="text-[#003366] font-black text-[13px] uppercase tracking-[0.15em]">{section.category}</h4>
                  </div>
                  <ul className="space-y-3">
                    {section.subItems?.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <Link 
                          to={`/machine/${subItem.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                          onClick={() => setIsOpen(false)}
                          className="group/link flex items-center justify-between text-gray-500 hover:text-[#003366] transition-all"
                        >
                          <span className="text-[12px] font-bold group-hover/link:translate-x-2 transition-transform duration-300">{subItem}</span>
                          <ArrowRight size={12} className="opacity-0 group-hover/link:opacity-100 text-orange-500" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;