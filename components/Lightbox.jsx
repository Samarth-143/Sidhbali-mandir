"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

export default function Lightbox({ images, index, onClose, onNavigate, videoIds }) {
  const [playing, setPlaying] = useState(false);

  const prev = useCallback(
    () => { setPlaying(false); onNavigate((index - 1 + images.length) % images.length); },
    [index, images.length, onNavigate]
  );
  const next = useCallback(
    () => { setPlaying(false); onNavigate((index + 1) % images.length); },
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    if (index === null) setPlaying(false);
  }, [index]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  const isVideo = videoIds && videoIds[index] != null;

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button aria-label="Close" className="absolute right-5 top-5 text-white/80 hover:text-white" onClick={onClose}>
            <FaXmark size={28} />
          </button>
          <button
            aria-label="Previous"
            className="absolute left-3 text-white/80 hover:text-white sm:left-6"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <FaChevronLeft size={28} />
          </button>

          {isVideo && playing ? (
            <iframe
              key={`video-${videoIds[index]}`}
              src={`https://www.youtube.com/embed/${videoIds[index]}?autoplay=1`}
              title={images[index].alt}
              className="aspect-video w-full max-w-4xl rounded-lg shadow-2xl sm:max-h-[80vh]"
              allow="autoplay; encrypted-media"
              allowFullScreen
              onClick={(e) => e.stopPropagation()}
            />
          ) : isVideo ? (
            <motion.button
              key={`thumb-${videoIds[index]}`}
              className="relative block max-h-[85vh] max-w-full overflow-hidden rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => { e.stopPropagation(); setPlaying(true); }}
            >
              <img
                src={images[index].src}
                alt={images[index].alt}
                className="max-h-[85vh] max-w-full"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-saffron text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </motion.button>
          ) : (
            <motion.img
              key={index}
              src={images[index].src}
              alt={images[index].alt}
              className="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
          )}

          <button
            aria-label="Next"
            className="absolute right-3 text-white/80 hover:text-white sm:right-6"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <FaChevronRight size={28} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
