// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//         {/* Left Side: Contact Info */}
//         <div>
//           <h1 className="text-4xl font-black text-gray-900 uppercase">Contact <span className="text-red-700">Us</span></h1>
//           <p className="mt-4 text-gray-600 italic">Get in touch with our experts for custom industrial solutions.</p>
          
//           <div className="mt-8 space-y-6">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 bg-red-100 text-red-700 flex items-center justify-center rounded-full font-bold">P</div>
//               <div><p className="text-sm text-gray-500 uppercase font-bold">Call Us</p><p className="font-medium">+91-9825009216</p></div>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 bg-gray-100 text-gray-700 flex items-center justify-center rounded-full font-bold">E</div>
//               <div><p className="text-sm text-gray-500 uppercase font-bold">Email</p><p className="font-medium">inquiry@mechchemindia.com</p></div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Simple Inquiry Form */}
//         <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
//           <form className="space-y-4">
//             <input type="text" placeholder="Your Name" className="w-full p-3 border rounded focus:ring-2 focus:ring-red-700 outline-none" />
//             <input type="email" placeholder="Email Address" className="w-full p-3 border rounded focus:ring-2 focus:ring-red-700 outline-none" />
//             <textarea placeholder="Your Requirement" rows="4" className="w-full p-3 border rounded focus:ring-2 focus:ring-red-700 outline-none"></textarea>
//             <button className="w-full bg-red-700 text-white font-bold py-3 rounded hover:bg-gray-800 transition">SEND INQUIRY</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // फॉर्म सबमिशन लॉजिक इथे येईल
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle size={80} className="text-orange-500 animate-bounce" />
        </div>
        <h1 className="text-4xl font-black text-[#003366] mb-4 uppercase">Thank You for Contacting Us!</h1>
        <p className="text-xl text-gray-600 mb-8 font-medium">Your enquiry has been successfully submitted.</p>
        
        <div className="bg-gray-50 p-8 rounded-2xl border-2 border-dashed border-orange-200 inline-block text-left">
          <p className="text-gray-700 mb-4">Our team at <strong>Mech Chem Engineering Services</strong> will get in touch with you shortly.</p>
          <p className="text-gray-700 mb-6 font-bold">If your requirement is urgent, feel free to call or WhatsApp us:</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-lg font-black text-[#003366]">
              <Phone size={20} className="text-orange-500" /> +91 9960846786, 9226450455
            </div>
            <div className="flex items-center gap-3 text-green-600 font-black italic">
               <MessageSquare size={20} /> 📲 WhatsApp Available
            </div>
          </div>
        </div>
        <div className="mt-10">
           <button onClick={() => setIsSubmitted(false)} className="text-orange-500 font-bold uppercase tracking-widest border-b-2 border-orange-500 pb-1">Back to Form</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-8 md:px-20 pt-16">
        <h2 className="text-4xl font-black text-[#003366] uppercase tracking-tighter">
          Get in Touch with <span className="text-orange-500">Mech Chem Engineering Services</span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-3xl text-lg font-medium leading-relaxed">
          We are here to assist you with industrial machinery sales, installation, servicing, and spare parts support. 
          Reach out to us for reliable engineering solutions and expert guidance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Contact Information */}
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-black text-[#003366] uppercase italic border-b-4 border-orange-500 w-fit pr-6 mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg text-white shrink-0"><MapPin size={24} /></div>
                <div>
                  <p className="font-black text-[#003366] uppercase text-sm mb-1 tracking-widest">📍 Address</p>
                  <p className="text-gray-600 font-bold leading-snug">Plot No. 11 NASA Ground, Nehru Nagar, Surendra Nagar, Nagpur - 440015</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg text-white shrink-0"><Phone size={24} /></div>
                <div>
                  <p className="font-black text-[#003366] uppercase text-sm mb-1 tracking-widest">📞 Phone</p>
                  <p className="text-gray-600 font-bold">+91 9960846786</p>
                  <p className="text-gray-600 font-bold">+91 9226450455</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg text-white shrink-0"><Mail size={24} /></div>
                <div>
                  <p className="font-black text-[#003366] uppercase text-sm mb-1 tracking-widest">📧 Email</p>
                  <p className="text-gray-600 font-bold">mechchemindia@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg text-white shrink-0"><Clock size={24} /></div>
                <div>
                  <p className="font-black text-[#003366] uppercase text-sm mb-1 tracking-widest">🕒 Business Hours</p>
                  <p className="text-gray-600 font-bold italic">Monday – Saturday: 10:00 AM to 7:00 PM</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Contact Us Section */}
          <section className="bg-gray-50 p-8 rounded-2xl border-l-8 border-orange-500">
            <h3 className="text-xl font-black text-[#003366] uppercase mb-6 tracking-tight">Why Contact Mech Chem Engineering?</h3>
            <ul className="space-y-3 font-bold text-gray-600">
              <li className="flex items-center gap-2">✅ Fast response and quick assistance</li>
              <li className="flex items-center gap-2">✅ Experienced technical team</li>
              <li className="flex items-center gap-2">✅ Reliable after-sales support</li>
              <li className="flex items-center gap-2">✅ Serving Nagpur & Maharashtra</li>
            </ul>
          </section>
        </div>

        {/* Right Side: Form */}
        <div className="relative">
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-black text-[#003366] uppercase mb-2">Send Us a Message</h3>
            <p className="text-gray-500 mb-8 font-medium italic">Have a requirement or enquiry? Fill out the form below and our team will contact you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold" />
                <input type="text" placeholder="Company Name (Optional)" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold" />
                <input required type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold" />
              </div>
              <input required type="text" placeholder="Machine / Service Required" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold" />
              <textarea required placeholder="Message" rows="4" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold"></textarea>
              
              <button type="submit" className="w-full bg-[#003366] text-white font-black py-5 rounded-xl hover:bg-orange-500 transition-all shadow-lg uppercase tracking-widest">
                [Request a Quote]
              </button>
            </form>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-lg font-black text-[#003366] italic uppercase">Looking for Industrial Machines or Service Support?</h3>
            <p className="font-black text-orange-500 text-xl mt-2 uppercase">Contact Mech Chem Engineering Services today for expert solutions.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;