import { useState } from 'react';
import Banner from '../components/ui/Banner';

export default function President_Message() {
  const [selectedSection, setSelectedSection] = useState('vision');
  const [imageHover, setImageHover] = useState(false);

  const sections = {
    vision: {
      title: 'Our Vision',
      content: 'To establish IMA Moradabad as a leading medical association that champions excellence in healthcare delivery, promotes ethical medical practices, and ensures accessible quality healthcare for every citizen of Moradabad and surrounding regions. We envision a healthcare ecosystem where medical professionals collaborate seamlessly to advance medical science, enhance patient care standards, and contribute meaningfully to public health initiatives across Uttar Pradesh.'
    },
    mission: {
      title: 'Our Mission',
      content: 'Our mission is to unite medical practitioners of Moradabad under one platform, fostering professional development through continuous medical education, research opportunities, and knowledge sharing. We are committed to advocating for healthcare policies that benefit both medical professionals and patients, while maintaining the highest standards of medical ethics. IMA Moradabad strives to bridge the gap between healthcare providers and the community through health awareness programs, free medical camps, and emergency response initiatives.'
    },
    values: {
      title: 'Our Values',
      content: 'Integrity, compassion, and professional excellence form the cornerstone of IMA Moradabad. We believe in evidence-based medicine, ethical practice, and patient-centered care. Our values emphasize continuous learning, mutual respect among medical professionals, and service to humanity above all. We are committed to transparency in healthcare delivery, accountability in medical practice, and fostering a culture of innovation that keeps pace with global medical advancements while respecting local healthcare needs and cultural sensitivities.'
    },
    future: {
      title: 'Looking Ahead',
      content: 'As we look towards the future, IMA Moradabad is dedicated to expanding our healthcare infrastructure, establishing state-of-the-art medical facilities, and creating robust networks for medical emergencies. We plan to launch comprehensive health screening programs, digital health initiatives, and telemedicine services to reach underserved areas. Our focus includes strengthening doctor-patient relationships, combating medical misinformation, and preparing the next generation of healthcare professionals through mentorship programs. We are committed to making Moradabad a healthcare hub in Western Uttar Pradesh by collaborating with government bodies, educational institutions, and international medical organizations. Our upcoming initiatives include specialized training workshops, research collaborations, and community health outreach programs that will transform healthcare accessibility and quality in our region. Together, we will build a healthier Moradabad where every individual has access to compassionate, affordable, and world-class medical care.'
    }
  };

  return (
    <>
      <Banner title="PRESIDENT MESSAGE" />
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Image Section */}
            <div className="flex-1 min-w-[300px]">
              <div
                className={`w-100 h-100 border-8 rounded-full overflow-hidden shadow-xl cursor-pointer mx-auto ${imageHover ? 'border-pink-600' : 'border-purple-300'
                  }`}
                onMouseEnter={() => setImageHover(true)}
                onMouseLeave={() => setImageHover(false)}
              >
                <img
                  src="file_0000000014848208836ddf30894e8069 (1).png"
                  alt="President of IMA Moradabad"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quick Info Cards */}
              <div className="mt-6 space-y-3">
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer border-l-4 border-blue-500">
                  <p className="text-sm font-semibold text-gray-800">Experience</p>
                  <p className="text-xs text-gray-600">30+ Years in Medical Practice</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer border-l-4 border-green-500">
                  <p className="text-sm font-semibold text-gray-800">Leadership</p>
                  <p className="text-xs text-gray-600">President, IMA Moradabad Branch</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 uppercase">
                President'S <span className="text-pink-600">MESSAGE</span>
              </h2>

              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-3 mb-8">
                {Object.keys(sections).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedSection(key)}
                    className={`px-5 py-2 rounded-lg font-medium cursor-pointer ${selectedSection === key
                      ? 'bg-pink-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                      }`}
                  >
                    {sections[key].title}
                  </button>
                ))}
              </div>

              {/* Content Display */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {sections[selectedSection].title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {sections[selectedSection].content}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg cursor-pointer">
                  <p className="text-2xl font-bold text-pink-600">2000+</p>
                  <p className="text-xs text-gray-600">Active Members</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg cursor-pointer">
                  <p className="text-2xl font-bold text-blue-600">500+</p>
                  <p className="text-xs text-gray-600">Medical Practitioners</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg cursor-pointer">
                  <p className="text-2xl font-bold text-green-600">75+</p>
                  <p className="text-xs text-gray-600">Years of Service</p>
                </div>
              </div>

              <div className="mt-12 bg-gray-100 p-6 rounded-lg">
                <p className="font-semibold text-gray-800">With warm regards,</p>
                <p className="text-gray-700 mt-1">Dr. Anat Rana</p>
                <p className="text-gray-600 text-sm">President, Indian Medical Association</p>
                <p className="text-gray-600 text-sm">Moradabad Branch, Uttar Pradesh - 244001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
