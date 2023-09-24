'use client'
import { TbArrowNarrowUp } from 'react-icons/tb'
import { useEffect, useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function BackToTop() {
  const [show, setShow] = useState(false)

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true)
    if (show && window.scrollY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed right-4 bottom-4 z-20"
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <button
            onClick={scrollToTop}
            className="shadow-lg shadow-emerald-400/20
             bg-primary-blue py-3 px-4 rounded-lg text-gray-50
              flex items-center justify-center gap-2 hover:bg-opacity-75 transition-all disabled:opacity-50"
          >
            <TbArrowNarrowUp size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
