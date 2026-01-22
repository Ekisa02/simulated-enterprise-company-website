
import React from 'react';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/office1/400/500" alt="Office Life" className="rounded-2xl shadow-lg" />
              <img src="https://picsum.photos/seed/office2/400/500" alt="Team Meeting" className="rounded-2xl shadow-lg mt-8" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Story</h2>
            <h3 className="text-4xl font-bold text-slate-900 leading-tight">
              Pioneering the Digital Frontier in <span className="text-blue-600">Eldoret.</span>
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded with a vision to position Eldoret as a tech powerhouse in East Africa, E-Tech Software combines local market knowledge with international development standards. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team consists of over 20+ specialized developers, designers, and system analysts who are passionate about solving complex business problems through code.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <p className="text-3xl font-bold text-blue-600">50+</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">98%</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Client Retention</p>
              </div>
            </div>
            <div className="pt-6">
              <p className="text-slate-900 font-semibold flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {COMPANY_INFO.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
