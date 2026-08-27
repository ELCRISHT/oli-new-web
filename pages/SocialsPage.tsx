import React from 'react';
import PageLayout from './PageLayout';

type Platform = 'tiktok' | 'facebook' | 'instagram' | 'youtube';

type SocialPost = {
  id: number;
  platform: Platform;
  username: string;
  profileUrl: string;
  postUrl?: string;
  fallbackVideo: string;
};

const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 1,
    platform: 'facebook',
    username: 'Georgie Anunciacion',
    profileUrl: 'https://www.facebook.com/investmentpropertiesbyovialand',
    postUrl: 'https://www.facebook.com/share/r/17ZdaZwGFZ/',
    fallbackVideo: 'https://olione.ovialand.com/assets/fb-1.mp4',
  },
  {
    id: 2,
    platform: 'facebook',
    username: 'Hsrc Bdo Mhai',
    profileUrl: 'https://www.facebook.com/batangasproperties.hsrc',
    postUrl: 'https://www.facebook.com/share/r/1BB4ntKg7j/',
    fallbackVideo: 'https://olione.ovialand.com/assets/fb-2.mp4',
  },
  {
    id: 3,
    platform: 'facebook',
    username: 'OLI Property Specialist • Empire Realty',
    profileUrl: 'https://www.facebook.com/homewithlustado',
    postUrl: 'https://www.facebook.com/share/r/1Cp1Aiy1T6/',
    fallbackVideo: 'https://olione.ovialand.com/assets/fb-3.mp4',
  },
  {
    id: 4,
    platform: 'facebook',
    username: 'Georgie Anunciacion',
    profileUrl: 'https://www.facebook.com/investmentpropertiesbyovialand',
    postUrl: 'https://www.facebook.com/share/r/18HTBNvePZ/',
    fallbackVideo: 'https://olione.ovialand.com/assets/fb-4.mp4',
  },
  {
    id: 5,
    platform: 'facebook',
    username: 'The Savvy Broker',
    profileUrl: 'https://www.facebook.com/TheSavvyBr0ker',
    postUrl: 'https://www.facebook.com/share/r/18Li2fjFGt/',
    fallbackVideo: 'https://olione.ovialand.com/assets/fb-5.mp4',
  },
  {
    id: 6,
    platform: 'youtube',
    username: 'April Lyn Valero',
    profileUrl: 'https://www.youtube.com/@AprilLynValero',
    postUrl: 'https://youtube.com/shorts/h63Rew9eMb4?si=fVsUTAF_-J9LxPNR',
    fallbackVideo: '/Youtube/YT-1.mp4',
  },
  {
    id: 7,
    platform: 'youtube',
    username: 'Jinky Pulla Cosico',
    profileUrl: 'https://www.youtube.com/@jinkypullacosico/shorts',
    postUrl: 'https://youtube.com/shorts/dh29QLssrYw?si=lI-hFLi8P8YOKT0b',
    fallbackVideo: '/Youtube/YT-2.mp4',
  },
  {
    id: 8,
    platform: 'youtube',
    username: 'Best Home Choice by Hsrc Jenny',
    profileUrl: 'https://www.youtube.com/@jennyg.8765/shorts',
    postUrl: 'https://youtube.com/shorts/bu2c_LDDkFo?si=LYaOZqvQbViOXD8K',
    fallbackVideo: '/Youtube/YT-3.mp4',
  },
  {
    id: 9,
    platform: 'youtube',
    username: 'April Lyn Valero',
    profileUrl: 'https://www.youtube.com/@AprilLynValero',
    postUrl: 'https://youtube.com/shorts/aEMr3V1mi8I?si=0kwI6bbxvXHRyerr',
    fallbackVideo: '/Youtube/YT-4.mp4',
  },
  {
    id: 10,
    platform: 'youtube',
    username: 'The Savvy Broker',
    profileUrl: 'https://www.youtube.com/@TheSavvyBroker.Ovialand/shorts',
    postUrl: 'https://youtube.com/shorts/SdagzL6PaKc?si=qf74b7y_49X0ft3s',
    fallbackVideo: '/Youtube/YT-5.mp4',
  },
  {
    id: 11,
    platform: 'tiktok',
    username: 'Anna Ducay',
    profileUrl: 'https://www.tiktok.com/@annaducay_empirerealty',
    postUrl: 'https://www.tiktok.com/@annaducay_empirerealty/video/7608799829241810196?q=ovialand%20issue&t=1776658565176',
    fallbackVideo: '/Tiktok/TK-1.mp4',
  },
  {
    id: 12,
    platform: 'tiktok',
    username: 'Tito Del | Real Estate',
    profileUrl: 'https://www.tiktok.com/@ludelretita',
    postUrl: 'https://www.tiktok.com/@ludelretita/video/7629228824735059201?q=ovialand%20issue&t=1776658565176',
    fallbackVideo: '/Tiktok/TK-2.mp4',
  },
  {
    id: 13,
    platform: 'tiktok',
    username: 'Ovialand, Inc.',
    profileUrl: 'https://www.tiktok.com/@ovialand.ph',
    postUrl: 'https://www.tiktok.com/@ovialand.ph/video/7585086519866739988',
    fallbackVideo: '/Tiktok/TK-3.mp4',
  },
  {
    id: 14,
    platform: 'tiktok',
    username: 'Ovialand, Inc.',
    profileUrl: 'https://www.tiktok.com/@ovialand.ph',
    postUrl: 'https://www.tiktok.com/@ovialand.ph/video/7585084479111286037',
    fallbackVideo: '/Tiktok/TK-4.mp4',
  },
  {
    id: 15,
    platform: 'tiktok',
    username: 'Ovialand, Inc.',
    profileUrl: 'https://www.tiktok.com/@ovialand.ph',
    postUrl: 'https://www.tiktok.com/@ovialand.ph/video/7623023962154388743',
    fallbackVideo: '/Tiktok/TK-5.mp4',
  },
  {
    id: 16,
    platform: 'instagram',
    username: 'thesavvybroker_',
    profileUrl: 'https://www.instagram.com/thesavvybroker_/',
    postUrl: 'https://www.instagram.com/reel/DUuZ11BkrlU/',
    fallbackVideo: '/Instagram/IG-1.mp4',
  },
  {
    id: 17,
    platform: 'instagram',
    username: 'cristalyn.empirerealty',
    profileUrl: 'https://www.instagram.com/cristalyn.empirerealty/',
    postUrl: 'https://www.instagram.com/reel/DSong8YEvrJ/',
    fallbackVideo: '/Instagram/IG-2.mp4',
  },
  {
    id: 18,
    platform: 'instagram',
    username: 'peeachaa',
    profileUrl: 'https://www.youtube.com',
    postUrl: 'https://www.instagram.com/reel/DCcIKXdKVNo/',
    fallbackVideo: '/social18.mp4',
  },
  {
    id: 19,
    platform: 'instagram',
    username: 'bnc.ph',
    profileUrl: 'https://www.instagram.com/bnc.ph/',
    postUrl: 'https://www.instagram.com/reel/DF4sE7YP82S/',
    fallbackVideo: '/social19.mp4',
  },
  {
    id: 20,
    platform: 'instagram',
    username: 'aprillyn_valero',
    profileUrl: 'https://www.instagram.com/aprillyn_valero/reels/',
    postUrl: 'https://www.instagram.com/reel/DXO5xbdDG_u/',
    fallbackVideo: '/social20.mp4',
  }
];

const getPlatformMeta = (platform: Platform) => {
  if (platform === 'tiktok') {
    return {
      label: 'TikTok',
      bg: 'from-[#141414] to-[#2a2a2a]',
      ring: 'ring-[#fe2c55]/30',
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path fill="currentColor" d="M16.5 3c.4 1.8 1.4 3.2 3 4.1v3.2c-1.2 0-2.4-.4-3.4-1v5.2a6.1 6.1 0 1 1-6.1-6.1c.4 0 .9 0 1.3.1v3.2a3 3 0 1 0 1.8 2.8V3h3.4z" />
        </svg>
      ),
    };
  }

  if (platform === 'facebook') {
    return {
      label: 'Facebook',
      bg: 'from-[#1877f2] to-[#2851a3]',
      ring: 'ring-[#1877f2]/35',
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path fill="currentColor" d="M13.6 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.2-1.5 1.6-1.5h1.7V4.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3v2.4H8V14h2.3v8h3.3z" />
        </svg>
      ),
    };
  }

  if (platform === 'instagram') {
    return {
      label: 'Instagram',
      bg: 'from-[#fd5949] via-[#d6249f] to-[#285AEB]',
      ring: 'ring-[#d6249f]/30',
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path fill="currentColor" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zM17.4 6.9a1.2 1.2 0 1 0 0 2.3 1.2 1.2 0 0 0 0-2.3z" />
          <path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 2 .2 2.5.4.6.2 1.2.5 1.7 1 .5.5.8 1 1 1.7.2.5.4 1.3.4 2.5.1 1.3.1 1.7.1 4.9 0 3.2 0 3.6-.1 4.9 0 1.2-.2 2-.4 2.5a4 4 0 0 1-1 1.7 4 4 0 0 1-1.7 1c-.5.2-1.3.4-2.5.4-1.3.1-1.7.1-4.9.1-3.2 0-3.6 0-4.9-.1-1.2 0-2-.2-2.5-.4a4 4 0 0 1-1.7-1 4 4 0 0 1-1-1.7c-.2-.5-.4-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.9 0-1.2.2-2 .4-2.5a4 4 0 0 1 1-1.7 4 4 0 0 1 1.7-1c.5-.2 1.3-.4 2.5-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1 0-1.5.2-1.9.3-.5.2-.8.3-1.2.7-.4.4-.6.7-.7 1.2-.2.4-.3.9-.3 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c0 1 .2 1.5.3 1.9.2.5.3.8.7 1.2.4.4.7.6 1.2.7.4.2.9.3 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1 0 1.5-.2 1.9-.3.5-.2.8-.3 1.2-.7.4-.4.6-.7.7-1.2.2-.4.3-.9.3-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c0-1-.2-1.5-.3-1.9a2.7 2.7 0 0 0-.7-1.2c-.4-.4-.7-.6-1.2-.7-.4-.2-.9-.3-1.9-.3-1.3-.1-1.7-.1-4.8-.1z" />
        </svg>
      ),
    };
  }

  return {
    label: 'YouTube',
    bg: 'from-[#ff0000] to-[#b20000]',
    ring: 'ring-[#ff0000]/30',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path fill="currentColor" d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2C0 9 0 12 0 12s0 3 .5 4.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15 24 12 24 12s0-3-.5-4.8zM9.6 15.5v-7L16 12l-6.4 3.5z" />
      </svg>
    ),
  };
};

const getEmbedUrl = (platform: Platform, postUrl?: string) => {
  if (!postUrl) {
    return null;
  }

  if (platform === 'facebook') {
    return null;
  }

  if (platform === 'tiktok') {
    const match = postUrl.match(/\/video\/(\d+)/);
    if (!match) {
      return null;
    }
    return `https://www.tiktok.com/embed/v2/${match[1]}`;
  }

  if (platform === 'instagram') {
    const cleaned = postUrl.replace(/\/$/, '');
    return `${cleaned}/embed`;
  }

  if (platform === 'youtube') {
    const fromWatch = postUrl.match(/[?&]v=([^&#]+)/);
    const fromShortUrl = postUrl.match(/youtu\.be\/([^?&#/]+)/);
    const fromShorts = postUrl.match(/\/shorts\/([^?&#/]+)/);
    const id = fromWatch?.[1] ?? fromShortUrl?.[1] ?? fromShorts?.[1];
    if (!id) {
      return null;
    }
    return `https://www.youtube.com/embed/${id}`;
  }

  return null;
};

const SocialsPage: React.FC = () => {
  const [showAll, setShowAll] = React.useState(false);
  const visiblePosts = showAll ? SOCIAL_POSTS : SOCIAL_POSTS.slice(0, 4);

  return (
    <PageLayout>
      <section className="bg-linear-to-r from-green-700 to-emerald-600 pt-10 md:pt-12 pb-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Socials</h1>
          <p className="text-white/90">Join our growing community online. Follow us for the latest news, project milestones, and life at Ovialand straight from our feeds.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-linear-to-b from-[#f7f8fa] to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {visiblePosts.map((post) => {
              const meta = getPlatformMeta(post.platform);
              const embedUrl = getEmbedUrl(post.platform, post.postUrl);
              const hasProfileLink = Boolean(post.profileUrl);
              const hasPostLink = Boolean(post.postUrl);

              return (
                <article
                  key={post.id}
                  className="group relative overflow-hidden rounded-3xl border border-[#d7dce4] bg-white shadow-[0_18px_45px_-24px_rgba(17,24,39,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_52px_-22px_rgba(17,24,39,0.45)]"
                >
                  <div className="flex items-center justify-between border-b border-[#ecf0f3] px-3 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br ${meta.bg} text-white ring-2 ${meta.ring}`}>
                        {meta.icon}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-[#1f2937] leading-tight">{meta.label}</p>
                        <p className="text-[11px] text-[#6b7280] leading-tight">{post.username}</p>
                      </div>
                    </div>
                    {hasProfileLink ? (
                      <a
                        href={post.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-semibold uppercase tracking-wide text-[#0f9d58] hover:text-[#0b7a45]"
                      >
                        View Profile
                      </a>
                    ) : (
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-[#9ca3af]">
                        View Profile
                      </span>
                    )}
                  </div>

                  <div className="relative w-full bg-black" style={{ aspectRatio: '9/16' }}>
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        title={`${meta.label} post by ${post.username}`}
                        className="absolute inset-0 h-full w-full"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={post.fallbackVideo}
                        controls
                        autoPlay
                        muted
                        loop
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                  </div>

                  <div className="flex items-center justify-between px-3 py-2 border-t border-[#ecf0f3]">
                    {hasPostLink ? (
                      <a
                        href={post.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[#6b7280] hover:text-[#0f9d58]"
                      >
                        Click to view post.
                      </a>
                    ) : (
                      <p className="text-[11px] text-[#9ca3af]">Post link unavailable.</p>
                    )}
                    {hasPostLink ? (
                      <a
                        href={post.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-[#1f2937] hover:text-[#0f9d58]"
                      >
                        Open in {meta.label}
                      </a>
                    ) : (
                      <span className="text-[11px] font-semibold text-[#9ca3af]">Open in {meta.label}</span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-green-700 transition-all"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SocialsPage;