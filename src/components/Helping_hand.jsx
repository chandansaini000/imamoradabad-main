import { Heart, AlertOctagon, Users, Shield, Globe, Sparkles } from 'lucide-react';

export default function Helping_hand() {
    const services = [
        {
            icon: Heart,
            title: "Patient Assistance",
            description: "Guiding patients to the right doctors, hospitals, and resources for timely care."
        },
        {
            icon: AlertOctagon,
            title: "Emergency Medical Help",
            description: "Coordinating urgent response in times of accidents, outbreaks, or disasters."
        },
        {
            icon: Users,
            title: "Community Support",
            description: "Organizing free health camps, blood donation drives, and wellness programs for underprivileged sections of society."
        },
        {
            icon: Shield,
            title: "Doctor Support & Welfare",
            description: "Offering legal aid, professional guidance, and welfare schemes to our members in times of need."
        },
        {
            icon: Globe,
            title: "Social Responsibility",
            description: "Extending medical expertise during natural calamities, epidemics, and public health crises."
        }
    ];

    const taglines = [
        "With Compassion, We Care.",
        "Doctors in Service, Beyond Clinics.",
        "Support, Care, and Healing for All."
    ];

    return (
        <section className="py-12 px-6 bg-gradient-to-b from-emerald-50 via-teal-50 to-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200 to-emerald-200 rounded-full opacity-20 blur-3xl"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4 bg-white px-5 py-2 rounded-full shadow-sm border border-emerald-100">
                        <Heart className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                        <span className="text-sm font-semibold text-emerald-700">
                            Our Commitment
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6">
                        Helping <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Hands</span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
                        At <span className="font-bold text-emerald-600">IMA Moradabad</span>, we believe that healthcare is not only about treatment but also about <span className="italic font-semibold text-teal-700">support, compassion, and service</span>. We extend our helping hands through:
                    </p>
                </div>

                {/* Services Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div 
                                key={index}
                                data-aos="zoom-in-up"
                                data-aos-delay={(index % 3) * 150}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 group hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Taglines Section */}
                <div data-aos="fade-up" className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-10 shadow-2xl">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Sparkles className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                        <Sparkles className="w-5 h-5 text-yellow-200 fill-yellow-200" />
                        <Sparkles className="w-5 h-5 text-yellow-200 fill-yellow-200" />
                        <Sparkles className="w-5 h-5 text-yellow-200 fill-yellow-200" />
                        <Sparkles className="w-5 h-5 text-yellow-200 fill-yellow-200" />
                        <Sparkles className="w-5 h-5 text-yellow-200 fill-yellow-200" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {taglines.map((tagline, index) => (
                            <div 
                                key={index}
                                className="text-center bg-gradient-to-r from-emerald-500 to-teal-600  bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
                            >
                                <p className="text-white font-semibold text-lg italic">
                                    "{tagline}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-10 py-4 rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3">
                        <Heart className="w-5 h-5" />
                        Join Our Mission
                    </button>
                </div>
            </div>
        </section>
    );
}