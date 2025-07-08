import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const Home = () => {
  const features = [
    {
      id: 1,
      icon: '/images/img_vector.svg',
      title: 'Smart Reminders',
      description: 'Never miss a habit again. Set daily notifications or let the app suggest the best time.'
    },
    {
      id: 2,
      icon: '/images/img_vector_gray_900_01.svg',
      title: 'Progress Analytics',
      description: 'See your growth with weekly reports, streaks, and visual heatmaps.'
    },
    {
      id: 3,
      icon: '/images/img_vector_gray_900_01_20x16.svg',
      title: 'Streak Tracking',
      description: 'Stay motivated by building unbreakable streaks and unlocking milestones.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah T.',
      role: 'Writer',
      image: '/images/img_img.png',
      quote: 'I have finally stayed consistent with journaling for 90 days. This app made it effortless.'
    },
    {
      id: 2,
      name: 'James K.',
      role: 'Software Engineer',
      image: '/images/img_img_48x48.png',
      quote: 'Seeing my progress visually keeps me motivated every day. The reminders are just perfect!'
    },
    {
      id: 3,
      name: 'Priya R.',
      role: 'Wellness Coach',
      image: '/images/img_img_1.png',
      quote: 'I have tried several habit trackers, but this one is the only one I actually stuck with.'
    }
  ];

  const companies = [
    { id: 1, src: '/images/img_company_logo.svg', alt: 'Google' },
    { id: 2, src: '/images/img_company_logo_gray_900_01.svg', alt: 'Spotify' },
    { id: 3, src: '/images/img_company_logo_gray_900_01_46x158.svg', alt: 'Treehouse' },
    { id: 4, src: '/images/img_company_logo_gray_900_02.svg', alt: 'Braze' }
  ];

  const freeFeatures = [
    'Track unlimited habits',
    'Daily reminders',
    'Streaks & basic analytics',
    'Light & dark mode',
    'No credit card required'
  ];

  const premiumFeatures = [
    'Everything in Free',
    'Advanced analytics',
    'Habit templates & suggestions',
    'Cloud backup & device sync',
    'Premium themes and icons',
    'Priority support'
  ];

  return (
    <div className="w-full bg-global-2 flex flex-col items-center">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="w-full lg:max-w-[1464px] px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 mt-12 sm:mt-16 lg:mt-20">
          {/* Hero Text */}
          <div className="flex flex-col justify-start items-start w-full lg:w-[54%]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-bold font-wix leading-tight lg:leading-[94px] text-left capitalize text-global-2 w-full">
              <span className="text-global-2">Trusted Home </span>
              <span className="text-global-3">Services at Your Fingertips</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-[18px] font-wix text-global-4 leading-5 sm:leading-6 lg:leading-[23px] text-left mt-4 sm:mt-6 lg:mt-[22px]">
              Book reliable, verified local service providers in minutes
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-6 w-full mt-6 sm:mt-8 lg:mt-[42px]">
              <a href="#" className="w-full sm:w-auto">
                <img 
                  src="/images/img_store_google_play.png" 
                  className="w-full sm:w-[250px] h-[90px] rounded-2xl hover:opacity-90 transition-opacity" 
                  alt="Download on Google Play" 
                />
              </a>
              <a href="#" className="w-full sm:w-auto">
                <img 
                  src="/images/img_store_google_play.png" 
                  className="w-full sm:w-[248px] h-[90px] rounded-2xl hover:opacity-90 transition-opacity" 
                  alt="Download on App Store" 
                />
              </a>
            </div>
          </div>

          {/* Hero Images */}
          <div className="relative w-full lg:w-[40%] h-[400px] sm:h-[500px] lg:h-[658px] flex justify-center">
            <div className="absolute w-full max-w-[550px] h-[550px] bg-global-4 rounded-full"></div>
            <div className="relative z-10 flex justify-center items-end w-full h-full">
              <img 
                src="/images/img_white_and_gray_clean.png" 
                className="absolute bottom-0 right-0 w-[70%] sm:w-[60%] lg:w-[314px] h-auto max-h-[634px] object-contain" 
                alt="Mobile app interface" 
              />
              <img 
                src="/images/img_white_and_gray_clean.png" 
                className="absolute bottom-12 left-0 w-[60%] sm:w-[50%] lg:w-[272px] h-auto max-h-[550px] object-contain" 
                alt="Mobile app interface" 
              />
            </div>
          </div>
        </section>

        {/* Why You'll Love It Section */}
        <section className="flex flex-col gap-8 sm:gap-12 lg:gap-16 mt-16 sm:mt-20 lg:mt-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold font-wix leading-tight lg:leading-[76px] text-left text-global-1">
              Why you will love it
            </h2>
            <p className="text-lg sm:text-xl lg:text-[20px] font-light font-inter leading-6 lg:leading-[25px] text-left text-global-1 lg:self-end">
              Designed to help you stay on track, effortlessly.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {features.map((feature) => (
              <div key={feature.id} className="bg-global-5 rounded-[40px] p-8 sm:p-10 lg:p-12 flex flex-col gap-4 sm:gap-6">
                <img 
                  src={feature.icon} 
                  className="w-4 h-5 sm:w-5 sm:h-6" 
                  alt={`${feature.title} icon`} 
                />
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-lg sm:text-xl lg:text-[20px] font-semibold font-wix leading-6 lg:leading-[26px] text-left text-global-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-[16px] font-wix leading-5 sm:leading-6 lg:leading-[24px] text-left text-global-3">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Company Showcase Section */}
          <div className="flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-[44%] bg-global-3 rounded-[40px] px-8 sm:px-12 lg:px-14 py-12 sm:py-16 lg:py-20 flex justify-center items-end">
              <img 
                src="/images/img_white_and_gray_clean_474x304.png" 
                className="w-full max-w-[304px] h-auto object-contain" 
                alt="Mobile app showcase" 
              />
            </div>
            
            <div className="w-full lg:w-[56%] flex flex-col gap-8 sm:gap-12 lg:gap-16">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-medium font-wix leading-tight lg:leading-[48px] text-left text-global-1 w-full lg:w-[78%]">
                Join thousands of users from top companies using Habitus to build better habits
              </h2>
              
              <div className="bg-global-5 rounded-[68px] p-8 sm:p-10 lg:p-11 flex justify-center items-center">
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
                  {companies.map((company) => (
                    <img 
                      key={company.id}
                      src={company.src} 
                      className="h-[46px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" 
                      alt={company.alt} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="flex flex-col gap-8 sm:gap-12 lg:gap-16 mt-16 sm:mt-20 lg:mt-24">
          <div className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold font-inter leading-tight lg:leading-[73px] text-global-1">
              What our users say
            </h2>
            <p className="text-lg sm:text-xl lg:text-[20px] font-light font-inter leading-6 lg:leading-[25px] text-global-1">
              Real stories from people who turned their goals into habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-global-5 rounded-[40px] p-8 sm:p-10 lg:p-12 flex flex-col gap-6 sm:gap-8">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    className="w-12 h-12 rounded-full object-cover" 
                    alt={testimonial.name} 
                  />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base font-bold font-inter leading-5 text-left text-global-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-base font-inter leading-5 text-left text-global-3">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-base font-inter leading-6 text-left text-global-3">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Download Section */}
        <section className="bg-global-3 rounded-[32px] px-8 sm:px-12 lg:px-14 py-12 sm:py-16 lg:py-20 mt-16 sm:mt-20 lg:mt-24">
          <div className="flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-12">
            <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-auto lg:flex-1">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-wix leading-tight lg:leading-[56px] text-left text-global-6">
                Download RideEasy
              </h2>
              <p className="text-lg sm:text-xl lg:text-[20px] font-cabin leading-6 text-left text-global-6 w-full lg:w-[78%]">
                Experience hassle-free transportation with RideEasy. Reliable rides, anytime, anywhere.
              </p>
              <Button 
                variant="primary"
                size="medium"
                className="bg-button-1 text-global-6 shadow-[0px_2px_4px_#00000019] rounded-[30px] px-8 py-4 w-full sm:w-auto"
              >
                Get Started
              </Button>
            </div>
            
            <div className="flex justify-center items-center gap-4 lg:gap-6">
              <img 
                src="/images/img_white_and_gray_clean_330x278.png" 
                className="w-[200px] sm:w-[250px] lg:w-[278px] h-auto object-contain" 
                alt="Mobile app preview" 
              />
              <img 
                src="/images/img_white_and_gray_clean_270x266.png" 
                className="w-[180px] sm:w-[220px] lg:w-[266px] h-auto object-contain" 
                alt="Mobile app preview" 
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="flex flex-col gap-8 sm:gap-12 lg:gap-16 mt-16 sm:mt-20 lg:mt-24">
          <div className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold font-inter leading-tight lg:leading-[73px] text-global-1">
              Simple, transparent pricing
            </h2>
            <p className="text-lg sm:text-xl lg:text-[20px] font-light font-inter leading-6 lg:leading-[25px] text-global-1">
              Start free. Upgrade when you are ready.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Free Plan */}
            <div className="bg-global-5 border border-[#e5e7eb] rounded-[40px] p-8 sm:p-12 lg:p-14 flex flex-col">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold font-wix leading-tight lg:leading-[41px] text-left text-global-1">
                    Free
                  </h3>
                  <p className="text-base sm:text-lg lg:text-[18px] font-wix leading-6 text-left text-global-3">
                    Perfect to get started
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 sm:gap-5">
                  <h4 className="text-3xl sm:text-4xl lg:text-[36px] font-bold font-inter leading-tight lg:leading-[44px] text-left text-global-1">
                    $0
                  </h4>
                  
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {freeFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <img 
                          src={index === 4 ? "/images/img_frame_blue_gray_300.svg" : "/images/img_frame.svg"} 
                          className="w-[14px] h-[16px] flex-shrink-0" 
                          alt="checkmark" 
                        />
                        <span className={`text-base sm:text-lg lg:text-[18px] font-wix leading-6 text-left ${index === 4 ? 'text-global-3' : 'text-global-1'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Button 
                variant="primary"
                size="large"
                className="bg-global-1 text-global-6 rounded-[36px] px-8 py-6 mt-8 sm:mt-12 w-full"
              >
                Start for Free
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-global-1 rounded-[40px] p-8 sm:p-12 lg:p-14 flex flex-col relative">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold font-wix leading-tight lg:leading-[41px] text-left text-global-6">
                    Premium
                  </h3>
                  <span className="bg-button-3 text-global-6 text-sm font-inter rounded-[14px] px-3 py-1">
                    Popular
                  </span>
                </div>
                <p className="text-base lg:text-[16px] font-wix leading-5 lg:leading-[21px] text-left text-global-5">
                  All features you need
                </p>
                
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <h4 className="text-3xl sm:text-4xl lg:text-[36px] font-bold font-inter leading-tight lg:leading-[44px] text-left text-global-6">
                      $4.99
                    </h4>
                    <span className="text-base font-inter leading-5 text-left text-global-5">
                      /month
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {premiumFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <img 
                          src="/images/img_frame.svg" 
                          className="w-[14px] h-[16px] flex-shrink-0" 
                          alt="checkmark" 
                        />
                        <span className="text-base sm:text-lg lg:text-[18px] font-wix leading-6 text-left text-global-6">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Button 
                variant="secondary"
                size="large"
                className="bg-button-2 text-global-1 rounded-[36px] px-8 py-6 mt-8 sm:mt-12 w-full"
              >
                Upgrade Now
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;