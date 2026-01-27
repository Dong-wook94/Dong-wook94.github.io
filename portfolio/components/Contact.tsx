'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Briefcase, Award, GraduationCap } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-electric-blue to-blue-400 bg-clip-text text-transparent">
              연락처 & 경력
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">연락처</h3>
            <div className="space-y-4">
              <a
                href="mailto:gygacpu@naver.com"
                className="flex items-center gap-4 text-light-slate hover:text-electric-blue transition-colors group"
              >
                <div className="p-3 bg-electric-blue/20 rounded-lg group-hover:bg-electric-blue/30 transition-colors">
                  <Mail className="text-electric-blue" size={20} />
                </div>
                <span>gygacpu@naver.com</span>
              </a>
              <a
                href="https://github.com/Dong-wook94"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-light-slate hover:text-electric-blue transition-colors group"
              >
                <div className="p-3 bg-electric-blue/20 rounded-lg group-hover:bg-electric-blue/30 transition-colors">
                  <Github className="text-electric-blue" size={20} />
                </div>
                <span>Dong-wook94</span>
              </a>
            </div>
          </motion.div>

          {/* Career */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Briefcase className="text-electric-blue" size={24} />
              경력
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  NICE정보통신 / 서비스개발실
                </h4>
                <p className="text-light-slate text-sm mb-2">백엔드 개발자</p>
                <p className="text-electric-blue text-sm">2021.01 ~ 근무 중 (만 5년)</p>
                <ul className="mt-3 space-y-1 text-sm text-light-slate">
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">▸</span>
                    <span>VAN↔원천사 구간 승인 시스템 개발/운영</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">▸</span>
                    <span>가맹점↔VAN 구간 실시간 실적전송 개발/운영</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">▸</span>
                    <span>LLM 연동 서비스 개발/운영</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <GraduationCap className="text-electric-blue" size={24} />
              학력
            </h3>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                경북대학교 컴퓨터학부
              </h4>
              <p className="text-light-slate text-sm">2014.03 ~ 2020.08</p>
            </div>
          </motion.div>

          {/* Certificate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Award className="text-electric-blue" size={24} />
              자격증
            </h3>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                정보처리기사
              </h4>
              <p className="text-light-slate text-sm">2021.08</p>
            </div>
          </motion.div>
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Summary</h3>
            <div className="space-y-4 text-light-slate leading-relaxed">
              <p>
                결제 도메인 <span className="text-electric-blue font-semibold">6년차</span> 백엔드 개발자로,
                <span className="text-white font-semibold"> 가맹점 대상 카드사·간편결제사·쿠폰·포인트 등 결제 서비스 40건 이상을 설계·개발·운영</span>했습니다.
              </p>
              <p>
                <span className="text-white font-semibold">다중 트랜잭션, 가변 전문, 대규모 승인 트래픽 환경에서 장애를 구조적으로 해결하고, 확장 가능한 아키텍처를 설계하는 데 강점</span>이 있습니다.
              </p>
              <p>
                최근에는 <span className="text-white font-semibold">망분리 환경용 LLM 챗봇 및 테스트 자동화 도구를 직접 설계·개발</span>함으로써 개발 생산성과 테스트 인프라를 보완했습니다. 
                이를 통해, <span className="text-electric-blue font-semibold">2025년 승인 서버 내 반영 건수 대비 장애 발생율을 0%로 만드는 데 기여</span>했습니다(전년도 1.2%).
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center text-light-slate text-sm"
        >
          <p>© 2025 Dongwook. All rights reserved.</p>
          <p className="mt-2 text-xs">이 사이트는 포트폴리오 용도로 제작하였습니다.</p>
        </motion.div>
      </div>
    </section>
  )
}
