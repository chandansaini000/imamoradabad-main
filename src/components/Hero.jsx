import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Calendar, Award, Users, ArrowRight } from 'lucide-react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const slides = [
    {
      title: `Our Journey In Care`,
      subtitle: "Since 1928",
      description: "Moradabad's premier medical association dedicated to advancing healthcare standards and supporting medical professionals",
      cta: "Learn More",
      ctaLink: "/about",
      ctaSecondary: "Join IMA",
      ctaSecondaryLink: "/contactus",
      gradient: "from-emerald-600 to-teal-600",
      icon: Heart,
      image: "/ima-hero-image-1.jpg"
    },
    {
      title: "Blood Donation Drives",
      subtitle: "Save Lives Today",
      description: "Join our regular blood donation camps and be a hero. Every donation can save up to three lives",
      cta: "Donate Now",
      ctaLink: "/blooddonate",
      ctaSecondary: "Find Camps",
      ctaSecondaryLink: "/upcomingevents",
      gradient: "from-rose-600 to-red-600",
      icon: Heart,
      image: "ima-hero-image-2.jpg"
    },
    {
      title: "CME Programs & Events",
      subtitle: "Continuous Learning",
      description: "Participate in our world-class Continuing Medical Education programs and stay updated with latest medical advances",
      cta: "View Events",
      ctaLink: "/upcomingevents",
      ctaSecondary: "Register",
      ctaSecondaryLink: "/contactus",
      gradient: "from-blue-600 to-indigo-600",
      icon: Calendar,
      image: "ima-hero-image-3.jpg"
    },
    {
      title: "Young Doctors Forum",
      subtitle: "Shape Your Future",
      description: "Connect with peers, access mentorship, and accelerate your medical career with exclusive resources and guidance",
      cta: "Join Forum",
      ctaLink: "/contactus",
      ctaSecondary: "Resources",
      ctaSecondaryLink: "/newsgallery",
      gradient: "from-purple-600 to-pink-600",
      icon: Users,
      image: "/ima-hero-image-4.jpg"
    },
    {
      title: "Awards & Recognition",
      subtitle: "Celebrating Excellence",
      description: "Honoring outstanding contributions to medical science and healthcare service in our community",
      cta: "View Awards",
      ctaLink: "/achievements",
      ctaSecondary: "Nominate",
      ctaSecondaryLink: "/contactus",
      gradient: "from-amber-600 to-orange-600",
      icon: Award,
      image: "/ima-hero-image-1.jpg"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handlePrimaryCta = (link) => {
    navigate(link);
  };

  const handleSecondaryCta = (secondaryLink) => {
    navigate(secondaryLink);
  };

  return (
    <div className="relative min-h-[580px] md:h-[700px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => {
        const Icon = slide.icon;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 transform ${index === currentSlide
                ? 'translate-x-0 opacity-100'
                : index < currentSlide
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
              }`}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}>
              {/* Animated Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>
            </div>

            {/* Content Container - Two Column Layout */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0 flex items-center">
              <div className="grid lg:grid-cols-2 gap-8 items-center w-full">

                {/* Left Side - Text Content */}
                <div className="flex flex-col justify-center text-center lg:text-left pt-4 pb-14 md:py-0">
                  {/* Subtitle Badge */}
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3.5 py-1.5 rounded-full mb-4 md:mb-6 w-fit mx-auto lg:mx-0 animate-in fade-in zoom-in duration-700">
                    <Icon className="w-4 h-4 text-white" />
                    <span className="text-white text-xs sm:text-sm font-semibold">{slide.subtitle}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    {slide.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <button
                      onClick={() => handlePrimaryCta(slide.ctaLink)}
                      className="group bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2 text-sm sm:text-base active:scale-95"
                    >
                      <span>{slide.cta}</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => handleSecondaryCta(slide.ctaSecondaryLink)}
                      className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 text-sm sm:text-base active:scale-95"
                    >
                      {slide.ctaSecondary}
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-5 sm:gap-8 justify-center lg:justify-start mt-8 md:mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                    <div className="text-white text-center lg:text-left">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold">5000+</div>
                      <div className="text-white/80 text-xs sm:text-sm">Members</div>
                    </div>
                    <div className="text-white text-center lg:text-left">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold">95+</div>
                      <div className="text-white/80 text-xs sm:text-sm">Years Legacy</div>
                    </div>
                    <div className="text-white text-center lg:text-left">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold">500+</div>
                      <div className="text-white/80 text-xs sm:text-sm">Events/Year</div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image (Hidden on Mobile, Visible on Large Screens) */}
                <div className="hidden lg:flex items-center justify-center animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                  <div className="relative w-full max-w-lg">
                    {/* Main Image Card */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                      {/* Floating Icon Badge */}
                      <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                        <Icon className="w-12 h-12 text-gray-900" />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full"></div>

                    {/* Small Info Card */}
                    <div className="absolute -bottom-8 left-8 bg-white rounded-2xl p-4 shadow-xl max-w-xs">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">IMA Moradabad</div>
                          <div className="text-xs text-gray-600">Serving Since 1928</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group z-10"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group z-10"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
                ? 'bg-white w-12 h-3'
                : 'bg-white/50 w-3 h-3 hover:bg-white/75'
              }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
}
