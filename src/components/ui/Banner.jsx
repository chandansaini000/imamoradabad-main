import { Trophy } from 'lucide-react';

export default function Banner(props) {
    return (


        <section className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 text-white shadow-inner">
            <div className="max-w-6xl mx-auto text-center">
                <div className="inline-block mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-2.5 shadow-sm">
                        <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
                        <span className="font-semibold text-xs sm:text-sm tracking-wide">Celebrating Excellence</span>
                    </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 tracking-tight">
                    OUR <span className="text-yellow-300 drop-shadow-sm">{props.title}</span>
                </h1>
                <p className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-2 opacity-95 font-medium">
                    Indian Medical Association, Moradabad - 244001
                </p>
                {props.tagline && (
                    <p className="text-xs sm:text-base max-w-xl mx-auto opacity-85 mt-2">
                        {props.tagline}
                    </p>
                )}
            </div>
        </section>


    );
}