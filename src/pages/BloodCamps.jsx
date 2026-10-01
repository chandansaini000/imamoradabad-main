import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Heart, Phone, Mail, ChevronRight, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BloodCamps() {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/contactus');
    }

    const handleNavigateRegistration = () =>{
        navigate('/registration')
    }

    const upcomingCamps = [
        {
            id: 1,
            title: "Mega Blood Donation Drive 2025",
            date: "15th October 2025",
            time: "9:00 AM - 5:00 PM",
            venue: "District Hospital, Civil Lines, Moradabad",
            organizer: "IMA Moradabad",
            expectedDonors: 500,
            status: "upcoming",
            category: "mega"
        },
        {
            id: 2,
            title: "Community Blood Camp - Majhola",
            date: "22nd October 2025",
            time: "10:00 AM - 4:00 PM",
            venue: "Community Health Center, Majhola",
            organizer: "IMA Moradabad & Local Administration",
            expectedDonors: 200,
            status: "upcoming",
            category: "community"
        },
        {
            id: 3,
            title: "Corporate Blood Donation Camp",
            date: "28th October 2025",
            time: "11:00 AM - 3:00 PM",
            venue: "Tech Park, Moradabad Industrial Area",
            organizer: "IMA Moradabad",
            expectedDonors: 150,
            status: "upcoming",
            category: "corporate"
        },
        {
            id: 4,
            title: "Educational Institution Blood Drive",
            date: "5th November 2025",
            time: "9:00 AM - 2:00 PM",
            venue: "IFTM University Campus, Moradabad",
            organizer: "IMA Moradabad & IFTM",
            expectedDonors: 300,
            status: "upcoming",
            category: "educational"
        }
    ];

    const pastCamps = [
        {
            id: 5,
            title: "Independence Day Blood Donation Camp",
            date: "15th August 2025",
            venue: "IMA House, Moradabad",
            donorsParticipated: 450,
            unitsCollected: 425,
            status: "completed"
        },
        {
            id: 6,
            title: "World Blood Donor Day Camp",
            date: "14th June 2025",
            venue: "Multiple Locations across Moradabad",
            donorsParticipated: 800,
            unitsCollected: 750,
            status: "completed"
        },
        {
            id: 7,
            title: "Ramadan Blood Donation Drive",
            date: "25th March 2025",
            venue: "Moradabad Medical College",
            donorsParticipated: 320,
            unitsCollected: 305,
            status: "completed"
        }
    ];

    const stats = [
        { number: "150+", label: "Camps Organized", icon: Calendar },
        { number: "45,000+", label: "Lives Saved", icon: Heart },
        { number: "15,000+", label: "Regular Donors", icon: Users },
        { number: "Since 1952", label: "Serving Community", icon: Clock }
    ];

    const filteredCamps = upcomingCamps.filter(camp => {
        const matchesFilter = selectedFilter === 'all' || camp.category === selectedFilter;
        const matchesSearch = camp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            camp.venue.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-pink-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-8">
                        <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-4">
                            Indian Medical Association, Moradabad
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Blood Donation Camps
                        </h1>
                        <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
                            Serving the community since 1952, organizing regular blood donation camps across Moradabad to save lives
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Register for Camp
                            </button>
                            <button className="px-8 py-3 border-2 cursor-pointer border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition flex items-center gap-2" onClick={handleNavigate}>
                                <Phone className="w-5 h-5" />
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
                <div className="grid md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
                                <Icon className="w-10 h-10 text-red-600 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="max-w-6xl mx-auto px-4 mt-16">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search camps by title or location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setSelectedFilter('all')}
                                className={`px-6 py-3 rounded-lg font-semibold transition ${selectedFilter === 'all' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                All Camps
                            </button>
                            <button
                                onClick={() => setSelectedFilter('mega')}
                                className={`px-6 py-3 rounded-lg font-semibold transition ${selectedFilter === 'mega' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                Mega Drives
                            </button>
                            <button
                                onClick={() => setSelectedFilter('community')}
                                className={`px-6 py-3 rounded-lg font-semibold transition ${selectedFilter === 'community' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                Community
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Camps Section */}
            <div className="max-w-6xl mx-auto px-4 mt-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Upcoming Blood Camps</h2>
                    <span className="text-sm text-gray-600">{filteredCamps.length} camps scheduled</span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {filteredCamps.map((camp, index) => (
                        <div 
                            key={camp.id} 
                            data-aos="fade-up"
                            data-aos-delay={(index % 2) * 150}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group border border-slate-100"
                        >
                            <div className="bg-gradient-to-r from-red-500 to-red-600 p-4">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-semibold text-white mb-2">
                                            {camp.category.toUpperCase()}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-2">{camp.title}</h3>
                                    </div>
                                    <Calendar className="w-6 h-6 text-white opacity-80" />
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <Calendar className="w-5 h-5 text-red-600 flex-shrink-0" />
                                        <span className="font-semibold">{camp.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <Clock className="w-5 h-5 text-red-600 flex-shrink-0" />
                                        <span>{camp.time}</span>
                                    </div>
                                    <div className="flex items-start gap-3 text-gray-700">
                                        <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                        <span>{camp.venue}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <Users className="w-5 h-5 text-red-600 flex-shrink-0" />
                                        <span>Expected Donors: {camp.expectedDonors}+</span>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button onClick={handleNavigateRegistration} className=" cursor-pointer flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2">
                                        <Heart className="w-4 h-4" />
                                        Register Now
                                    </button>
            
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Past Camps Section */}
            <div className="max-w-6xl mx-auto px-4 mt-16 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Blood Donation Camps</h2>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-red-600 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Camp Name</th>
                                    <th className="px-6 py-4 text-left font-semibold">Date</th>
                                    <th className="px-6 py-4 text-left font-semibold">Venue</th>
                                    <th className="px-6 py-4 text-center font-semibold">Donors</th>
                                    <th className="px-6 py-4 text-center font-semibold">Units Collected</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pastCamps.map((camp, index) => (
                                    <tr key={camp.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-red-50 transition`}>
                                        <td className="px-6 py-4 font-medium text-gray-900">{camp.title}</td>
                                        <td className="px-6 py-4 text-gray-700">{camp.date}</td>
                                        <td className="px-6 py-4 text-gray-700">{camp.venue}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">
                                                {camp.donorsParticipated}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full font-semibold">
                                                {camp.unitsCollected}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* CTA Section */}


            {/* Guidelines Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Camp Guidelines</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                            <Users className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Before the Camp</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Register in advance</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Get adequate sleep (6-8 hours)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Eat a healthy meal</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Stay hydrated</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                            <Heart className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">During Donation</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Bring valid ID proof</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Relax during the process</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Follow staff instructions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Takes only 10-15 minutes</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                            <Clock className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">After Donation</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Rest for 10-15 minutes</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Drink plenty of fluids</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Avoid heavy exercise for 24 hours</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>Keep the bandage on for 4-6 hours</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}