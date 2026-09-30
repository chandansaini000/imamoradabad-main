

import { useNavigate } from 'react-router-dom';

import { ClipboardPen } from 'lucide-react';

export default function Welcome() {

  const navigate = useNavigate();

  const handleNavigation =() =>{
    navigate('/About');   
  }
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-medium text-slate-800 mb-4">
            Welcome to <span className="text-blue-600 font-medium">IMA Moradabad</span>
          </h1>
          <div className=" w-24 h-1 bg-blue-600 mx-auto "></div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Left Side - Image */}
          <div className="relative max-h-160 overflow-hidden md:h-full">
            <img src="/welcome-ima.jpg" alt="" />
          </div>

          {/* Right Side - Content */}
          <div className="p-8 md:p-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <ClipboardPen className="w-5 h-5" />
            <span className="font-semibold">Our Story</span>
          </div>
            
            <div className="prose prose-lg text-slate-700 space-y-4">
              <p className="leading-relaxed">
                The <strong>Indian Medical Association (IMA), Moradabad</strong> is the local branch of the national IMA, serving as a representative body for doctors in the region while also engaging in community health activities.
              </p>
              
              <p className="leading-relaxed">
                Our office, IMA Bhawan, is located opposite the SSP Office in Kachehri Parisar, Moradabad. The branch has an elected team of office-bearers, with Dr. C. P. Singh as the President-Elect (2025-26) and Dr. Sudeep Kaur as the Secretary.
              </p>
              
              <p className="leading-relaxed">
                We organize various social and healthcare initiatives, including free OPD camps, awareness campaigns for cancer prevention and vaccination, and cultural programmes on special occasions like Doctors' Day.
              </p>
              
              <p className="leading-relaxed">
                Through these efforts, IMA Moradabad plays a dual role of safeguarding the rights of medical professionals while actively contributing to public health in the city.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button onClick={handleNavigation} className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">1500+</div>
            <div className="text-slate-600">Patients Served</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-slate-600">Healthcare Events</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-slate-600">Medical Professionals</div>
          </div>
        </div>
      </div>
    </div>
  );
}