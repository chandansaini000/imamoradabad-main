import { useState } from 'react';
import Banner from '../components/ui/Banner'

export default function Secretary_Message() {
  const [selectedSection, setSelectedSection] = useState('vision');
  const [imageHover, setImageHover] = useState(false);

  const sections = {
    vision: {
      title: 'Our Vision',
      content: 'As Secretary of IMA Moradabad, I envision an organization that serves as the backbone of medical excellence in our city. Our vision is to create a unified platform where every medical professional feels empowered, supported, and connected. We aim to build a healthcare community that prioritizes continuous learning, embraces technological advancement, and remains steadfast in its commitment to serve the people of Moradabad with compassion and clinical excellence.'
    },
    mission: {
      title: 'Our Mission',
      content: 'My mission as Secretary is to strengthen the organizational framework of IMA Moradabad by facilitating seamless communication among our members, coordinating impactful medical programs, and ensuring efficient execution of our association\'s objectives. We are committed to organizing regular CME programs, workshops, and health camps that benefit both our medical community and the general public. I strive to maintain transparency in all our operations while fostering a spirit of collaboration and mutual respect among healthcare providers across Moradabad.'
    },
    values: {
      title: 'Our Values',
      content: 'The core values that guide my role as Secretary include dedication to professional development, unwavering commitment to medical ethics, and service-oriented leadership. I believe in open communication, accountability, and creating opportunities for every member to contribute meaningfully to our association. We uphold the principles of inclusivity, ensuring that whether you are a senior practitioner or a young doctor, your voice matters in shaping the future of healthcare in Moradabad. Together, we maintain the dignity of our noble profession while adapting to changing healthcare landscapes.'
    },
    future: {
      title: 'Looking Ahead',
      content: 'Looking forward, my focus is on digitizing IMA Moradabad\'s operations to enhance member engagement and streamline administrative processes. We are planning to establish better coordination with hospitals, diagnostic centers, and healthcare institutions across the city. Our upcoming initiatives include specialized training programs for young doctors, medical research collaborations, and community health awareness campaigns targeting preventive healthcare. I am committed to strengthening our emergency response network, building strategic partnerships with medical colleges, and creating platforms for interdisciplinary medical discussions. Together, we will elevate IMA Moradabad to new heights of professional excellence and community service.'
    }
  };

  return (
    <>
      <Banner title="SECRETARY MESSAGE" />
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
                  src="Pi7_dr-dishantar-goel-moradabad-ho-moradabad-psychiatrists-8ivtob85g6.jpeg"
                  alt="Secretary of IMA Moradabad"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quick Info Cards */}
              <div className="mt-6 space-y-3">
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer border-l-4 border-blue-500">
                  <p className="text-sm font-semibold text-gray-800">Experience</p>
                  <p className="text-xs text-gray-600">25+ Years in Healthcare</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer border-l-4 border-green-500">
                  <p className="text-sm font-semibold text-gray-800">Role</p>
                  <p className="text-xs text-gray-600">Secretary, IMA Moradabad</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 uppercase">
                Secretary's <span className="text-pink-600">MESSAGE</span>
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
                  <p className="text-2xl font-bold text-pink-600">150+</p>
                  <p className="text-xs text-gray-600">CME Programs</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg cursor-pointer">
                  <p className="text-2xl font-bold text-blue-600">50+</p>
                  <p className="text-xs text-gray-600">Health Camps</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg cursor-pointer">
                  <p className="text-2xl font-bold text-green-600">2000+</p>
                  <p className="text-xs text-gray-600">Active Members</p>
                </div>
              </div>

              <div className="mt-12 bg-gray-100 p-6 rounded-lg">
                <p className="font-semibold text-gray-800">Warm Regards,</p>
                <p className="text-gray-700 mt-1">Dr. Dishantar Goel</p>
                <p className="text-gray-600 text-sm">Indian Medical Association, Moradabad</p>
                <p className="text-gray-600 text-sm">Uttar Pradesh - 244001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
