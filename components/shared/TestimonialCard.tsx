import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Testimonial } from '../../types';
import { getEmbedUrl } from '../../utils/video';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const embedUrl = testimonial.video ? getEmbedUrl(testimonial.video) : null;

  return (
    <div className="rounded-3xl border border-[#c9a961]/20 bg-linear-to-b from-[#1a3a2e] to-[#0d2818] p-8 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative Serif 'f' Icon Background */}
      <div className="absolute -right-2 -top-4 font-serif text-8xl text-[#c9a961]/10 italic pointer-events-none">f</div>

      <div className="relative z-10">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c9a961] mb-8 flex items-center">
          <span className="h-px w-6 bg-[#c9a961]/30 mr-3" />
          Client Testimonial
        </h4>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1 space-y-6">
            <div className="relative">
              <div className="absolute -left-2 -top-2 h-8 w-8 text-[#c9a961]/20">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                  <path d="M14.017 21L14.017 18C14.017 16.899 14.899 16 16 16L19 16L19 14L16 14C14.899 14 14.017 13.101 14.017 12L14.017 9C14.017 7.899 14.899 7 16 7L19 7L19 2L16 2C12.134 2 9 5.134 9 9L9 12C9 12.899 8.101 12 7 12L4 12L4 14L7 14C8.101 14 9 14.899 9 16L9 19C9 20.101 8.101 21 7 21L4 21L4 24L7 24C10.866 24 14.017 20.866 14.017 17L14.017 21Z" />
                </svg>
              </div>
              <p className="text-lg leading-relaxed text-white italic font-light relative z-10 pt-4">
                "{testimonial.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9a961]">{testimonial.author}</span>
            </div>
          </div>

          {(testimonial.image || embedUrl) && (
            <div className="shrink-0 self-center lg:self-start">
              {embedUrl ? (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black/20 group w-full lg:w-100">
                  <div className="aspect-video w-full">
                    {React.createElement('iframe', {
                      src: embedUrl,
                      className: 'w-full h-full',
                      allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                      allowFullScreen: true,
                    })}
                  </div>
                </div>
              ) : testimonial.image ? (
                <>
                  <div 
                    className="relative group/img cursor-pointer"
                    onClick={() => setIsImageExpanded(true)}
                  >
                    {/* Decorative Gold Accents matching user reference */}
                    <div className="absolute -left-2.5 -top-2.5 h-16 w-16 rounded-tl-2xl border-t-4 border-l-4 border-[#c9a961] opacity-40 transition-all duration-300 group-hover/img:-translate-x-1 group-hover/img:-translate-y-1" />
                    <div className="absolute -right-2.5 -bottom-2.5 h-16 w-16 rounded-br-2xl border-b-4 border-r-4 border-[#c9a961] opacity-40 transition-all duration-300 group-hover/img:translate-x-1 group-hover/img:translate-y-1" />
                    <div className="absolute inset-0 bg-[#c9a961]/10 rounded-2xl blur-xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-2xl border-[3px] border-[#c9a961] bg-[#1a3a2e] shadow-2xl">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-110" 
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Expanded Image Modal using React Portal */}
                  {isImageExpanded && createPortal(
                    <div 
                      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 cursor-zoom-out"
                      onClick={() => setIsImageExpanded(false)}
                    >
                      <div 
                        className="relative max-w-4xl max-h-[90vh] bg-[#1a3a2e] rounded-3xl overflow-hidden shadow-2xl border border-[#c9a961]/40 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="max-w-full max-h-[85vh] object-contain select-none rounded-2xl"
                        />
                        {/* Close Button */}
                        <button
                          onClick={() => setIsImageExpanded(false)}
                          className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-[#c9a961] hover:text-[#1a3a2e] text-white transition-all duration-300 shadow-lg cursor-pointer"
                          aria-label="Close"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>,
                    document.body
                  )}
                </>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
