'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'
import { sanityClient, urlFor } from '@/lib/sanity'
import type { SanityImageSource } from '@sanity/image-url'

interface Video {
  _id: string
  title: string
  platform: 'youtube' | 'facebook' | 'instagram' | 'other'
  url: string
  description?: string
  thumbnail?: SanityImageSource
}

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/
  )
  return match?.[1] || null
}

function getFacebookEmbedUrl(url: string): string {
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=560`
}

function VideoCard({ video, onPlay }: { video: Video; onPlay: (video: Video) => void }) {
  const youtubeId = video.platform === 'youtube' ? getYouTubeId(video.url) : null
  const thumbnailUrl = video.thumbnail
    ? urlFor(video.thumbnail).width(640).height(360).url()
    : youtubeId
      ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
      : null

  const platformColors: Record<string, string> = {
    youtube: '#FF0000',
    facebook: '#1877F2',
    instagram: '#E4405F',
    other: '#C41E3A',
  }

  const platformLabels: Record<string, string> = {
    youtube: 'YouTube',
    facebook: 'Facebook',
    instagram: 'Instagram',
    other: 'Video',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="group"
    >
      <div
        className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/20 transition-all duration-300"
        onClick={() => onPlay(video)}
      >
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
            <Play className="w-12 h-12 text-white/30" />
          </div>
        )}
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
            style={{ backgroundColor: platformColors[video.platform] }}
          >
            <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
          </div>
        </div>
        {/* Platform badge */}
        <span
          className="absolute top-3 left-3 text-[10px] font-inter font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
          style={{ backgroundColor: platformColors[video.platform] }}
        >
          {platformLabels[video.platform]}
        </span>
      </div>
      <h3 className="font-inter font-semibold text-white text-sm mt-3 line-clamp-2 group-hover:text-[#E2E8F0] transition-colors">
        {video.title}
      </h3>
      {video.description && (
        <p className="font-inter text-xs text-[#64748B] mt-1 line-clamp-2">{video.description}</p>
      )}
    </motion.div>
  )
}

export default function VideoSection({ homepage = false }: { homepage?: boolean }) {
  const [videos, setVideos] = useState<Video[]>([])
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)

  useEffect(() => {
    const query = homepage
      ? `*[_type == "video" && published == true && featured == true] | order(order asc) [0...4] { _id, title, platform, url, description, thumbnail }`
      : `*[_type == "video" && published == true] | order(order asc) { _id, title, platform, url, description, thumbnail }`

    sanityClient.fetch(query).then(setVideos).catch(console.error)
  }, [homepage])

  if (videos.length === 0) return null

  const handlePlay = (video: Video) => {
    if (video.platform === 'instagram' || video.platform === 'other') {
      window.open(video.url, '_blank')
    } else {
      setActiveVideo(video)
    }
  }

  return (
    <>
      <section
        className="w-full bg-[#0D1120] border-t border-white/[0.06]"
        aria-labelledby="videos-heading"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-inter text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3"
              >
                Watch
              </motion.p>
              <motion.h2
                id="videos-heading"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
              >
                Videos &{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #C41E3A, #D4AF37)' }}
                >
                  Media
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-inter text-base text-[#94A3B8] leading-relaxed"
              >
                Watch Dr. Sharma&apos;s surgical expertise, patient stories, and health awareness videos.
              </motion.p>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard key={video._id} video={video} onPlay={handlePlay} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-4xl mx-4 aspect-video rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {activeVideo.platform === 'youtube' && getYouTubeId(activeVideo.url) && (
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo.url)}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={activeVideo.title}
              />
            )}
            {activeVideo.platform === 'facebook' && (
              <iframe
                src={getFacebookEmbedUrl(activeVideo.url)}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={activeVideo.title}
              />
            )}
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors"
              aria-label="Close video"
            >
              <span className="text-white text-xl">&times;</span>
            </button>
            {/* Open in new tab */}
            <a
              href={activeVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 text-white text-xs font-inter hover:bg-black/80 transition-colors"
            >
              <ExternalLink className="w-3 h-3" /> Open
            </a>
          </motion.div>
        </div>
      )}
    </>
  )
}
