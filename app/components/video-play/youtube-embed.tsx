'use client'
import React from 'react'

type YoutubeEmbedProps = {
  url: string
  className?: string
}

export function YoutubeEmbed({ url, className }: YoutubeEmbedProps) {
  const match = url.match(/[?&]v=([^&]+)|youtu\.be\/([^?&]+)/)
  const videoId = match ? match[1] ?? match[2] : null

  if (!videoId) {
    return <p>URL do YouTube inválida</p>
  }

  return (
    <iframe
      className={className ?? 'w-full aspect-video rounded-lg'}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  )
}
