'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type MotionAppearProps  = {
  children:ReactNode,
  classCss:string
}

export default function MotionAppear({ children, classCss }: MotionAppearProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay:0.1 }}
      viewport={{ once: true, amount: 0.2 }} className={classCss}
    >
      {children}
    </motion.div>
  )
}