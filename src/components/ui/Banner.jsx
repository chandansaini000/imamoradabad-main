import {  Trophy } from 'lucide-react';

export default function Banner(props) {
    return (


        <section className="py-20 px-6 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <div className="inline-block mb-6">
                    <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                        <Trophy className="w-6 h-6" />
                        <span className="font-semibold">Celebrating Excellence</span>
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    OUR <span className="text-yellow-300">{props.title}</span>
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
                    Indian Medical Association, Moradabad - 244001
                </p>
                <p className="text-lg max-w-2xl mx-auto opacity-80">
                    {props.tagline}
                </p>
            </div>
        </section>


    );
}