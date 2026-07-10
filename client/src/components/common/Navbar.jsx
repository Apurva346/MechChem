import TopHeader from './TopHeader'
import DropdownMenu from './DropdownMenu'
import { useState, useEffect } from 'react' // 1. useEffect add kela
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [openCategory, setOpenCategory] = useState(null)

  // 2. Scroll check karnyathi navin state add keli
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Jar 40px pekshe khali scroll zala tar state true hoil
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const formatId = name =>
    name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')

  const fabrication = [
    {
      category: 'Lathe Machines',
      subItems: [
        'Light Duty Lathe Machine',
        'Medium and Heavy Duty Lathe Machine',
        'Extra Heavy Duty Lathe Machine',
        'Tool Room and Precision Lathe Machine',
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
  ]

  const toggleCategory = index => {
    setOpenCategory(openCategory === index ? null : index)
  }

  return (
    <div className='w-full relative z-50'>
      {/* Ha scroll sobat varti nighun jail */}
      <TopHeader />

      {/* 3. Tailwind classes dynamic kele: Scroll zalya var top-0 hoil ani transition mule smooth disel */}
      <nav
        className={`bg-white border-b fixed left-0 w-full z-50 shadow-md  ${
          isScrolled ? 'top-0' : 'top-10'
        }`}
      >
        <div className='w-full px-8 md:px-3 flex justify-between items-center h-24 '>
          {/* LOGO */}
          <Link to='/' className='shrink-0 flex items-center group py-2'>
            <img
              src='/images/mech-chem-logo.png'
              alt='Mech Chem Engineering Services'
              className='h-14 md:h-14 lg:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105'
            />
          </Link>

          {/* CENTER MENU (Desktop) */}
          <div className='hidden lg:flex gap-8 items-center'>
            <Link
              to='/'
              className='text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors'
            >
              Home
            </Link>

            <DropdownMenu
              title='Machines'
              items={fabrication}
              formatId={formatId}
            />

            

            <a
              href='https://inaxlaser.mechchemindia.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors'
            >
              i-NAX™
              <span className='bg-gradient-to-r from-red-500 to-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full animate-pulse'>
                NEW
              </span>
            </a>


            <Link
              to='/about'
              className='text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors'
            >
              About Us
            </Link>
            <Link
              to='/services'
              className='text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors'
            >
              services
            </Link>
          </div>

          {/* RIGHT BUTTONS */}
          <div className='flex items-center gap-4'>
            <Link to='/contact' className='hidden sm:block'>
              <button className='bg-orange-500 text-white px-8 py-3 rounded-sm font-black hover:bg-[#003366] transition-all uppercase text-[11px] tracking-[0.2em] shadow-lg'>
                Contact Us
              </button>
            </Link>

            <button
              className='lg:hidden p-2 text-[#003366]'
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {mobileMenu && (
          <div className='lg:hidden bg-white border-t absolute w-full left-0 shadow-2xl max-h-[75vh] overflow-y-auto z-[100] border-b-4 border-orange-500'>
            <div className='flex flex-col p-6 space-y-4'>
              <Link
                to='/'
                onClick={() => setMobileMenu(false)}
                className='font-black border-b pb-3 uppercase text-sm text-[#003366] tracking-wider block'
              >
                Home
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
