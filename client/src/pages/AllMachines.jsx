import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const fabricationOrder = [
  {
    category: 'Lathe Machines',
    subItems: [
      'Light Duty Lathe Machine',
      'Medium & Heavy Duty Lathe Machine',
      'Extra Heavy Duty Lathe Machine',
      'Tool Room & Precision Lathe Machine',
      'Capstan Lathe Machine',
      'All Geared / Geared Head Lathe Machine',
      'Belt Driven Lathe Machine',
      'CNC Lathe Machine',
      'High Speed Lathe Machine'
    ]
  },
  {
    category: 'Milling Machines',
    subItems: [
      'Universal Milling Machine',
      'Vertical Milling Machine',
      'Heavy Duty Milling Machine',
      'Turret Milling Machine'
    ]
  },
  {
    category: 'Drilling Machines',
    subItems: [
      'Vertical Milling Cum Drilling Machine',
      'Heavy Drilling Machine',
      'Radial Drilling Machine',
      'Heavy Duty Radial Drilling Machine',
      'Universal Portable Radial Drilling Machine',
      'Geared Radial Drilling Machine'
    ]
  },
  {
    category: 'Bandsaw Machines',
    subItems: [
      'Double Column Automatic Bandsaw Machine',
      'Double Column Semi-Automatic Bandsaw Machine'
    ]
  },
  {
    category: 'Workholding Tools',
    subItems: ['Self Centering Lathe Chuck', 'Four Jaw Independent Chuck']
  },
  {
    category: 'Grinding Machines',
    subItems: [
      'Manual Surface Grinding Machine',
      'Hydraulic Surface Grinding Machine',
      'Cylindrical Grinding Machine',
      'Tool & Cutter Grinding Machine'
    ]
  },
  {
    category: 'Finishing and Coating Machines',
    subItems: ['Powder Coating Machine']
  }
];

const AllMachines = () => {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getGroupedCatalog = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_BASE}/catalog-grouped`);
        const backendData = response.data;

        // --- CUSTOM SEQUENCING LOGIC ---
        // Fabrication order loop karun backend data sequence prane match kartoy
        const sortedCatalog = fabricationOrder.map(orderItem => {
          // Backend madhun same category naav sodha
          const matchedCategory = backendData.find(
            cat => cat.categoryName?.toLowerCase().trim() === orderItem.category.toLowerCase().trim()
          );

          if (!matchedCategory) return null;

          // Category bhetli ki tya aatle machines subItems chya array hierarchy pramane exact sort kara
          const sortedMachines = [...(matchedCategory.machinesList || [])].sort((a, b) => {
            const indexA = orderItem.subItems.findIndex(sub => sub.toLowerCase().trim() === a.name?.toLowerCase().trim());
            const indexB = orderItem.subItems.findIndex(sub => sub.toLowerCase().trim() === b.name?.toLowerCase().trim());
            
            // Jar ekhada product sequencing template madhye nasel tar shevti push karel
            return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
          });

          return {
            ...matchedCategory,
            machinesList: sortedMachines
          };
        }).filter(Boolean); // Jya categories backend madhye astil tech clean format madhye return hothil

        setCatalog(sortedCatalog);
      } catch (error) {
        console.error("Error fetching catalog grid:", error);
      } finally {
        setLoading(false);
      }
    };
    getGroupedCatalog();
  }, []);

  // URL Friendly slug logic
  const formatSlug = (name) => {
    return name ? name.toLowerCase().trim().replace(/ /g, '-') : '';
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">Loading Catalog Grid</p>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-5 min-h-screen font-sans selection:bg-red-100 selection:text-red-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Main Header Block */}
        <div className="text-center max-w-3xl pt-20 mx-auto mb-16 border-b border-slate-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Our Industrial <span className="text-red-600">Machine Catalog</span>
          </h1>
          <p className="mt-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
            High-Performance Precision Machinery solutions
          </p>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Dynamic Catalog Section Loop */}
        {catalog.map((cat, idx) => {
          if (!cat.categoryName) return null;

          return (
            <div key={idx} className="mb-16 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              
              {/* Category Header Row */}
              <div className="border-l-4 border-red-600 pl-6 mb-8">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                  {cat.categoryName}
                </h2>
                <p className="text-slate-400 text-[10px] uppercase font-bold mt-0.5 tracking-wider">
                  Total Models: {cat.machinesList?.length || 0} Available
                </p>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {cat.machinesList?.map((item, index) => (
                  <Link 
                    key={index} 
                    to={`/machine/${formatSlug(item.name)}`} 
                    className="group block"
                  >
                    <div className="aspect-video overflow-hidden rounded-2xl bg-slate-100 border border-slate-100 mb-4 shadow-sm group-hover:shadow-md transition">
                      <img 
                        src={item.image || '/images/placeholder.png'} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        onError={(e) => { e.currentTarget.src = '/images/placeholder.png' }}
                      />
                    </div>

                    <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest truncate">
                      {item.name}
                    </h4>
                    {item.subTitle && (
                      <span className="text-slate-400 text-[9px] uppercase font-bold block truncate mt-0.5">
                        {item.subTitle}
                      </span>
                    )}
                    <span className="text-red-600 font-black text-[9px] uppercase mt-1 block tracking-wider group-hover:text-red-700 transition-colors">
                      View Details →
                    </span>
                  </Link>
                ))}
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default AllMachines;