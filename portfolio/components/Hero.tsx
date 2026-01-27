'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-electric-blue text-lg mb-4 font-mono"
          >
            안녕하세요, 저는
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-electric-blue via-blue-400 to-blue-300 bg-clip-text text-transparent">
              백엔드 개발자
            </span>
            <br />
            <span className="text-white">동욱</span>입니다.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-light-slate max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            결제 도메인 <span className="text-electric-blue font-semibold">6년차</span> 백엔드 개발자로,
            <br />
            <span className="text-white font-semibold">40건 이상의 결제 서비스</span>를 설계·개발·운영했습니다.
            <br />
            대규모 트래픽 환경에서 <span className="text-electric-blue">장애 0% 달성</span>에 기여했습니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-electric-blue text-deep-blue font-semibold rounded-lg hover:bg-blue-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              프로젝트 보기
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 glass border-electric-blue/50 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              연락하기
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
            className="mt-16"
          >
            <a href="#skills" className="inline-block">
              <ArrowDown className="text-electric-blue animate-bounce" size={32} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
