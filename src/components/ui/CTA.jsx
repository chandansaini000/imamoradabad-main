import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function CTA() {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/contactus');

    }
    return (
        <div className="bg-gray-100 flex items-center justify-center p-4 sm:p-6 py-10 sm:py-14 overflow-hidden">
            <div 
                data-aos="zoom-in" 
                data-aos-duration="700"
                className="w-full lg:max-w-4xl max-w-2xl bg-gradient-to-br from-red-400 via-pink-500 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl flex items-center justify-between gap-6 md:gap-8 hover:shadow-2xl transition-all duration-300 md:flex-row flex-col text-center md:text-left"
            >
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tight">
                        Ready to get started?
                    </h2>
                    <p className="text-white/90 text-sm sm:text-base font-normal">
                        Join IMA Moradabad or contact our dedicated administrative team.
                    </p>
                </div>
                <button
                    onClick={handleNavigation}
                    className="w-full sm:w-auto bg-white text-purple-700 px-7 sm:px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-gray-50 active:scale-95 transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                    Contact Us
                </button>
            </div>
        </div>
    );
}