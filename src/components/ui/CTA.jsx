import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function CTA() {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/contactus');

    }
    return (
        <div className="bg-gray-100 flex items-center justify-center p-5 py-12">
            <div className="w-full lg:max-w-4xl max-w-2xl bg-gradient-to-br from-red-300 via-pink-400 to-purple-500 rounded-3xl p-12 shadow-2xl flex items-center justify-between gap-8 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 md:flex-row flex-col text-center md:text-left">
                <div className="flex-1">
                    <h2 className="text-4xl font-semibold text-white mb-3 tracking-tight">
                        Ready to get started?
                    </h2>
                    <p className="text-white text-opacity-90 text-base italic font-light">
                        Create an account or contact our team
                    </p>
                </div>
                <a
                    href="#contact" onClick={handleNavigation}
                    className="bg-white text-purple-600 px-8 py-3.5 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-gray-50 transition-all duration-300 active:translate-y-0 whitespace-nowrap"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
}