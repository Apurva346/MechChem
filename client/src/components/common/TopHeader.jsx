


import { Search, Mail, Facebook, Youtube, Instagram, X } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-[#003366] text-white py-2 hidden md:block border-b border-white/10">
      <div className="w-full px-8 md:px-3 flex justify-between items-center">
        
        {/* Left: Search Bar */}
        <div className="flex items-center bg-white/5 rounded-full px-4 py-1 border border-white/20 focus-within:border-orange-500 transition-all">
          <input 
            type="text" 
            placeholder="Search Machines..." 
            className="bg-transparent outline-none placeholder:text-white/40 w-48 text-sm" 
          />
          <Search size={14} className="text-orange-500 cursor-pointer" />
        </div>

        {/* Right Section: Social Icons & Email */}
        <div className="flex items-center gap-6">
          
          <div className="flex items-center gap-3">
            {[
              { Icon: Facebook, link: "https://facebook.com" },
              { Icon: X, link: "https://x.com" },
              { Icon: Youtube, link: "https://youtube.com" },
              { Icon: Instagram, link: "https://instagram.com" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.link} 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/70 hover:text-orange-500 transition-all duration-300"
              >
                <social.Icon size={16} strokeWidth={2} />
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-white/20"></div>

          <a href="mailto:mechchemindia@gmail.com" className="flex items-center gap-2 group">
            <Mail size={14} className="text-orange-500" />
            <span className="text-sm font-medium tracking-wide text-white/80 group-hover:text-white transition-colors">
              mechchemindia@gmail.com
            </span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default TopHeader;
