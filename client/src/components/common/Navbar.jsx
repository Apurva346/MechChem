import TopHeader from './TopHeader'
import DropdownMenu from './DropdownMenu'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const formatId = name =>
    name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')

  // const fabrication = [
  //   'Hacksaw Machines', 'Bandsaw Machines', 'Cutting/Shearing Machines',
  //   'Plate Rolling Machines', 'Pipe / Profile Machines', 'Press Machines',
  //   'Bus Bar Machines', 'Hydraulic Iron Worker Machines', 'Laser Machines',
  //   'Bending / Press Brake Machines'
  // ].map(name => ({ name, link: `/machine/${formatId(name)}` }))

  const fabrication = [
    {
      category: 'Lathe Machine',
      subItems: [
        'Medium Duty Lathe Machine',
        'Heavy Duty Lathe Machine',
        'Geared Lathe Machine',
        'All Geared Precision Lathe Machine',
        'Light Duty Lathe Machine',
        'All Geared Lathe Machine',
        'Mini Lathe Machine',
        'Vertical Milling Cum Drilling Machine',
        'Roll Turning Lathe Machine'
      ]
    },
    {
      category: 'Milling Machine',
      subItems: ['Universal Milling Machine', 'Vertical Milling Machine']
    },
    {
      category: 'Conventional Division',
      subItems: [
        'High Precision all Geared Lathe Machine',
        'Manual Surface Grinder',
        'High Precision Hydrailic Surface Grinder Machine',
        'Heavy Duty Milling Machine',
        'Turret Milling Machine'
      ]
    },
    {
      category: 'Radical Drilling Machine',
      subItems: [
        'Radial Drilling Machine',
        'Heavy Duty Radical Drilling Machine',
        'Universal Portable Radical Drilling Machine'
      ]
    },
    {
      category: 'Shearing Machine',
      subItems: [
        'Hydraulic Shearing Machine',
        'Shearing Machine',
        'Hydraulic Sheet Shearing Machine'
      ]
    },
    {
      category: 'Lathe Machine for Industries',
      subItems: ['CNC Turning Machine', 'Lathe Machine For Industries']
    },
    {
      category: 'Press Brake Machine',
      subItems: [
        'CNC Hydraulic Press Brake Machine',
        'Hydraulic Press Brake Machine'
      ]
    },
    {
      category: 'Lathe Machine Chuck',
      subItems: [
        'Zither True Chuck',
        'Four Jaw Independent Chuck',
        'Three And Four Jaw Chuck'
      ]
    },
    {
      category: 'Drilling Machine',
      subItems: ['Geared Radial Drilling Machine', 'Heavy Drilling Machine']
    },
    {
      category: 'Metal Forming Division',
      subItems: ['Hydraulic Shearing Machine', 'Vertical Boring Machine']
    },
    {
      category: 'Power Press Machine',
      subItems: ['H type power press']
    },
    {
      category: 'Shaping Machine',
      subItems: ['Gear Shaping Machine']
    },
    {
      category: 'Surface Grinder',
      subItems: ['Surface Grinder Machine']
    },
    {
      category: 'Band Saw Machine',
      subItems: ['Band Saw Machine']
    },
    {
      category: 'Slotting Machine',
      subItems: ['Partition Slotting Machine']
    },
    {
      category: 'Threading Machine',
      subItems: ['Thread Rolling Machine']
    },
    {
      category: 'Heavy Duty Lathe Machine',
      subItems: ['All Geared Lathe Machine']
    },
    {
      category: 'Powder Coating Machine',
      subItems: ['Powder Coating Machine']
    }
  ];


  return (
    <header className='w-full relative z-50'>
      <TopHeader />
      <nav className='bg-white border-b sticky top-0 shadow-md'>
        <div className='w-full px-8 md:px-3 flex justify-between items-center h-24'>
        
          {/* LOGO */}
          {/* <Link to='/' className='shrink-0 group'>
            <h1 className='text-3xl font-black text-[#003366] tracking-tighter'>
              MECH<span className='text-orange-500'>CHEM</span>
            </h1>
            <p className='text-[10px] tracking-[0.3em] text-gray-400 font-bold uppercase'>
              Engineering Solutions
            </p>
          </Link> */}
{/* 
          <Link to='/' className='shrink-0 group py-2'>
            <img 
              src="/images/mechlogo.jpeg"
              alt="Mech Chem Engineering Services" 
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link> */}

          <Link to='/' className='shrink-0 flex items-center group py-2'>
            <img 
              src="/images/mechlogo.jpeg"
              alt="Mech Chem Engineering Services" 
              /* Desktop वर h-20 आणि Mobile वर h-14 ठेवल्याने तो सुटसुटीत दिसेल */
              className="h-16 md:h-20 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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

            <DropdownMenu title='Machines' items={fabrication} />

            {/* <Link
              to='/i-nax'
              className='text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors'
            >
              i-NAX
            </Link> */}

            <a
  href='https://inax.mechchemindia.com/'
  target='_blank'
  rel='noopener noreferrer'
  className='text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors inline-block'
>
  i-NAX
</a>

            <Link
              to='/about'
              className='text-[#003366] hover:text-orange-500 font-black uppercase text-[13px] tracking-widest transition-colors'
            >
              About Us
            </Link>
          </div>

          {/* RIGHT: CONTACT BUTTON & MOBILE TOGGLE */}
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
          <div className='lg:hidden bg-white border-t absolute w-full left-0 shadow-2xl max-h-[85vh] overflow-y-auto z-[100]'>
            <div className='flex flex-col p-6 space-y-5'>
              <Link
                to='/'
                onClick={() => setMobileMenu(false)}
                className='font-black border-b pb-2 uppercase text-sm text-[#003366]'
              >
                Home
              </Link>

              <div>
                <p className='text-[10px] text-orange-500 uppercase tracking-widest font-black mb-4 underline'>
                  Machines
                </p>
                <div className='pl-4 flex flex-col space-y-4 border-l-2 border-gray-100'>
                  {fabrication.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      onClick={() => setMobileMenu(false)}
                      className='text-sm text-gray-600 font-bold hover:text-orange-500 transition-colors uppercase'
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to='/i-nax'
                onClick={() => setMobileMenu(false)}
                className='font-black border-b border-t pt-4 pb-2 uppercase text-sm text-[#003366]'
              >
                i-NAX
              </Link>
              <Link
                to='/about'
                onClick={() => setMobileMenu(false)}
                className='font-black border-b pb-2 uppercase text-sm text-[#003366]'
              >
                About Us
              </Link>
              <Link
                to='/contact'
                onClick={() => setMobileMenu(false)}
                className='font-black pb-2 uppercase text-sm text-orange-500 italic'
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
