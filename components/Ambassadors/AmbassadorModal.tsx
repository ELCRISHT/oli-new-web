import { Ambassador } from '../../types';
import Modal from '../base/Modal';
import SocialLinks from '../shared/SocialLinks';
import TestimonialCard from '../shared/TestimonialCard';

interface AmbassadorModalProps {
    ambassador: Ambassador;
    onClose: () => void;
}

const AmbassadorModal: React.FC<AmbassadorModalProps> = ({ ambassador, onClose }) => {
    return (
        <Modal isOpen={true} onClose={onClose} maxWidth="max-w-3xl">
            <div className="relative mx-auto mb-6 flex w-full max-w-sm justify-center">
                <div className="pointer-events-none absolute left-1/2 top-3 h-64 w-64 -translate-x-1/2 rounded-full border border-[#bb9c60]/45 bg-[#eae1d0]/8 shadow-[inset_0_0_0_1px_rgba(245,239,228,0.12),0_0_0_1px_rgba(187,156,96,0.16)] md:h-72 md:w-72" />
                <div className="pointer-events-none absolute left-1/2 top-5 h-60 w-60 -translate-x-1/2 rounded-full border border-[#bb9c60]/22 bg-transparent md:h-68 md:w-68" />
                <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border border-[#bb9c60]/62 bg-[#eae1d0]/10 shadow-[inset_0_0_0_1px_rgba(245,239,228,0.16),0_0_0_1px_rgba(187,156,96,0.22)] md:h-72 md:w-72">
                    <img
                        src={ambassador.image}
                        alt={ambassador.name}
                        className="h-full w-full object-cover object-top"
                    />
                </div>
            </div>

            <div className="relative text-center">
                <p className="inline-flex items-center rounded-full border border-[#bb9c60]/48 bg-[#1b352d]/65 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-[#f5efe4]/80">
                    OLI Ambassador Profile
                </p>
                <h3 className="mt-3 text-[25px] font-semibold uppercase tracking-[0.06em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                    {ambassador.name}
                </h3>

                <div className="mx-auto mt-8 max-w-2xl text-left">
                    {/* Key Stats Bar */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                        <div className="relative overflow-hidden rounded-2xl border border-[#bb9c60]/30 bg-linear-to-br from-[#f5efe4]/5 to-transparent p-3 sm:p-5 backdrop-blur-xs">
                            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#bb9c60]/10 blur-xl" />
                            <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#bb9c60]">PRC License No.</p>
                            <p className="mt-1.5 text-lg sm:text-xl font-medium tracking-tight text-[#f8f3e9]">{ambassador.prcLicenseNo ?? 'N/A'}</p>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border border-[#bb9c60]/30 bg-linear-to-br from-[#f5efe4]/5 to-transparent p-3 sm:p-5 backdrop-blur-xs">
                            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#bb9c60]/10 blur-xl" />
                            <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#bb9c60]">Track Record</p>
                            <p className="mt-1.5 text-lg sm:text-xl font-medium tracking-tight text-[#f8f3e9]">{ambassador.totalSales} <span className="text-xs sm:text-sm font-light text-[#f5efe4]/60 uppercase tracking-widest ml-0.5 sm:ml-1">Sales</span></p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Contact Grid */}
                        <div className="rounded-3xl border border-[#bb9c60]/20 bg-[#1a2e26]/40 p-6 md:p-8 shadow-inner">
                            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#bb9c60] mb-6 flex items-center">
                                <span className="h-px w-8 bg-[#bb9c60]/40 mr-3" />
                                Contact Information
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                                {/* Mobile Number */}
                                <div className="flex items-center group">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                        <SocialLinks platform="phone" size="sm" />
                                    </div>
                                    <div className="ml-4 min-w-0">
                                        <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">Mobile Number</p>
                                        <p className="text-sm text-[#f5efe4] font-medium truncate">{ambassador.phoneNumber ?? '—'}</p>
                                    </div>
                                </div>

                                {/* Facebook */}
                                <div className="flex items-center group">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                        <SocialLinks platform="facebook" size="sm" />
                                    </div>
                                    <div className="ml-4 min-w-0">
                                        <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">Facebook</p>
                                        {ambassador.facebook ? (
                                            <a href={ambassador.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-[#bb9c60] hover:underline font-medium truncate block">{ambassador.facebook}</a>
                                        ) : (
                                            <p className="text-sm text-[#f5efe4] font-medium truncate">—</p>
                                        )}
                                    </div>
                                </div>

                                {/* Viber/WhatsApp */}
                                <div className="flex items-center group">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                        <SocialLinks platform="viber" size="sm" />
                                    </div>
                                    <div className="ml-4 min-w-0">
                                        <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">Viber/WhatsApp</p>
                                        <p className="text-sm text-[#f5efe4] font-medium truncate">{ambassador.viberWhatsapp ?? '—'}</p>
                                    </div>
                                </div>

                                {/* TikTok */}
                                <div className="flex items-center group">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                        <SocialLinks platform="tiktok" size="sm" />
                                    </div>
                                    <div className="ml-4 min-w-0">
                                        <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">TikTok</p>
                                        {ambassador.tiktok ? (
                                            <a href={ambassador.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm text-[#bb9c60] hover:underline font-medium truncate block">{ambassador.tiktok}</a>
                                        ) : (
                                            <p className="text-sm text-[#f5efe4] font-medium truncate">—</p>
                                        )}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center group">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                        <SocialLinks platform="email" size="sm" />
                                    </div>
                                    <div className="ml-4 min-w-0">
                                        <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">Email</p>
                                        <p className="text-sm text-[#f5efe4] font-medium truncate">{ambassador.email ?? ambassador.contact}</p>
                                    </div>
                                </div>

                                {/* Instagram */}
                                <div className="flex items-center group">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                        <SocialLinks platform="instagram" size="sm" />
                                    </div>
                                    <div className="ml-4 min-w-0">
                                        <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">Instagram</p>
                                        {ambassador.instagram ? (
                                            <a href={ambassador.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-[#bb9c60] hover:underline font-medium truncate block">{ambassador.instagram}</a>
                                        ) : (
                                            <p className="text-sm text-[#f5efe4] font-medium truncate">—</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Affiliations */}
                        <div className="rounded-3xl border border-[#bb9c60]/10 bg-linear-to-r from-[#bb9c60]/5 to-transparent p-6 md:p-8">
                            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#bb9c60] mb-4 flex items-center">
                                <span className="h-px w-8 bg-[#bb9c60]/40 mr-3" />
                                Professional Affiliations
                            </h4>
                            <div className="space-y-2 text-sm leading-relaxed text-[#f5efe4]/90">
                                <p>{ambassador.contact}</p>
                                <p>Accredited Ovialand Seller Since {ambassador.since ?? '20XX'}</p>
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="space-y-6">
                            {ambassador.testimonials?.map((t, idx) => (
                                <TestimonialCard key={idx} testimonial={t} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AmbassadorModal;
