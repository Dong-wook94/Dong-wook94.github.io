'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  GitBranch, 
  Server, 
  Settings, 
  Terminal,
  Python,
  FileCode
} from 'lucide-react'

const skills = [
  {
    category: 'Backend',
    icon: Server,
    items: ['Java', 'Spring', 'Spring Boot', 'Spring MVC', 'Spring Batch'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Database',
    icon: Database,
    items: ['Oracle', 'MySQL'],
    color: 'from-cyan-500 to-teal-500'
  },
  {
    category: 'Frontend',
    icon: Code,
    items: ['JavaScript', 'jQuery', 'HTML', 'CSS'],
    color: 'from-teal-500 to-green-500'
  },
  {
    category: 'Python',
    icon: Python,
    items: ['Python', 'FastAPI'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'DevOps',
    icon: Settings,
    items: ['Git', 'Jenkins', 'Oracle AQ', 'Axway'],
    color: 'from-emerald-500 to-blue-500'
  },
  {
    category: 'AI/ML',
    icon: Terminal,
    items: ['Ollama', 'vLLM', 'LLM 챗봇'],
    color: 'from-purple-500 to-pink-500'
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
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
              기술 스택
            </span>
          </h2>
          <p className="text-light-slate text-lg">
            6년간의 경험으로 쌓은 전문 기술들
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:glass-strong transition-all group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-sm border border-electric-blue/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
