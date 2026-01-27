'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, TrendingUp } from 'lucide-react'

const projects = [
  {
    title: 'NICE페이먼츠 - NICE정보통신 2사 합병 프로젝트',
    period: '2025.08 ~ 2025.09 (2개월)',
    tech: ['Java', 'SpringMVC', 'Oracle'],
    summary: 'NICE페이먼츠 → NICE정보통신 사업자번호 변경 과정에서 발생 가능한 승인 거절 이슈를 사전 차단하여 장애/민원 0건 달성',
    highlights: ['조건부 롤백 시스템 개발', '사업자번호 세팅 로직 변경', '장애/민원 0건 달성'],
    gmv: null,
  },
  {
    title: '현대오일뱅크 연동 프로젝트',
    period: '2025.05 ~ 2025.09 (5개월)',
    tech: ['Java', 'SpringMVC', 'Oracle'],
    summary: '현대오일뱅크 결제 서비스 연동 - 타사 대비 연동 기간 1/3 미만으로 단축(18개월 → 5개월)',
    highlights: ['트랜잭션 체이닝 구현', '가변 전문 파싱 모듈 개발', '보너스 카드 전용 BIN 테이블 설계'],
    gmv: '월 평균 GMV 252억 원',
  },
  {
    title: 'GS칼텍스 연동 프로젝트',
    period: '2024.11 ~ 2025.02 (4개월)',
    tech: ['Java', 'SpringMVC', 'Oracle'],
    summary: 'GS칼텍스 현장 할인·적립 서비스 대행 처리 구조 도입 및 전체 서비스 연동',
    highlights: ['단일 테이블 역정규화 설계', '가변 파싱 로직 구현', '무중단 서비스 운영'],
    gmv: '월 평균 GMV 1,550억 원',
  },
  {
    title: '원천사 망취소 고도화 프로젝트',
    period: '2023.12 ~ 2024.03 (4개월)',
    tech: ['Java', 'Oracle', 'Axway'],
    summary: '데이터 손실 및 타임아웃이 잦던 기존 망취소 방식 및 시스템 전면 재설계 - 운영공수 연 17시간 절약',
    highlights: ['복합 키 설계', 'Base64 인코딩으로 데이터 무결성 확보', '망취소 누락 제로화'],
    gmv: null,
  },
  {
    title: 'LLM 챗봇 개발 (망분리 환경)',
    period: '2025.01 ~ 진행중',
    tech: ['Python', 'FastAPI', 'Ollama', 'JS'],
    summary: '망분리 환경에서 활용 가능한 내부 LLM 챗봇 개발을 통해 개발 효율성 증대 - 요건 분석 시간 60% 단축',
    highlights: ['vLLM(gpt-oss120b) 활용', 'Streaming Response 구현', '전처리 파이프라인 개발'],
    gmv: null,
  },
  {
    title: '멀티 트랜잭션 테스트 자동화 도구 개발',
    period: '2025.10 ~ 2025.12 (3개월)',
    tech: ['Java', 'SpringBoot', 'Oracle', 'Maven', 'JQuery', 'JS'],
    summary: '서비스 구간별 데이터 전달 값을 자동 세팅하는 테스터를 개발하여 테스트 효율성 60배 개선',
    highlights: ['JSON 스키마 기반 필드 매핑', '테스트 데이터 생성 시간 60배 단축', '개발/테스트 이력 자산화'],
    gmv: null,
  },
  {
    title: '실시간 실적전송 리팩토링 & 고도화',
    period: '2022.01 ~ 2023.08 (1년 8개월)',
    tech: ['Java', 'SpringBoot', 'SpringBatch', 'Oracle AQ'],
    summary: '실시간 실적전송 안정성 및 확장성 개선으로 운영 장애 건수 제로화',
    highlights: ['리플렉션/상속 구조 적용', 'DB 기반 데이터 전달 구조 도입', '관제 자동화'],
    gmv: null,
  },
  {
    title: '컨테이너 스위칭 웹 시스템 개발',
    period: '2024.12 ~ 2025.02 (3개월)',
    tech: ['Java', 'Axway', 'SpringMVC', 'Oracle', 'Maven'],
    summary: '수동으로 진행되던 테스트 서버 배포 및 검증 과정을 웹 기반 자동화 시스템으로 전환하여 배포 시간 86% 단축',
    highlights: ['JVM Warm-up 자동화', '컨테이너 스위칭 Web UI 개발', '배포 파이프라인 자동화'],
    gmv: null,
  },
  {
    title: '카드사 수소 충전 5자리 단가 도입 프로젝트',
    period: '2023.09 ~ 2025.05',
    tech: ['Java', 'SpringMVC', 'Oracle'],
    summary: '롯데, 신한, 현대카드사와 5자리 유종 단가 전송 기능을 구현하여 수소 충전소 결제 연동',
    highlights: ['TLV(Tag-Length-Value) 도입', '기존 서비스 영향 없이 신규 단가 정책 적용', '표준 마련'],
    gmv: 'GMV 3.6억 원',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-light-navy/30">
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
              주요 프로젝트
            </span>
          </h2>
          <p className="text-light-slate text-lg">
            결제 도메인에서의 다양한 경험과 성과
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 hover:glass-strong transition-all group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-electric-blue transition-colors">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-light-slate">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{project.period}</span>
                </div>
                {project.gmv && (
                  <div className="flex items-center gap-2 text-electric-blue">
                    <TrendingUp size={16} />
                    <span>{project.gmv}</span>
                  </div>
                )}
              </div>

              <p className="text-light-slate mb-6 leading-relaxed">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-xs border border-electric-blue/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-electric-blue mb-2">주요 성과:</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-light-slate flex items-start gap-2">
                      <span className="text-electric-blue mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
