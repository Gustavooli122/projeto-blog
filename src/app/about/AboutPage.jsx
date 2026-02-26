"use client";
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { Target, Users, Heart, Award } from 'lucide-react';
import Footer from '../components/Footer';
export const metadata = {
  title: "Sobre - Evolução na Programação",
  description: "Uma plataforma criada para ajudar desenvolvedores a evoluírem com clareza, estratégia e profundidade técnica.",
};

const AboutPage = () => {
  return (
    
      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="bg-[#1a1a1a] text-white pt-32 pb-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Evolução Além do Código
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Acreditamos que programar não é apenas escrever código, mas desenvolver clareza, profundidade técnica e mentalidade estratégica para crescer de forma consistente na carreira.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Missão */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" 
                alt="Desenvolvedor programando em ambiente moderno"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                O "Evolução na Programação" nasceu com um propósito simples: ajudar desenvolvedores a saírem do aprendizado superficial e construírem profundidade real. Em um mundo onde o excesso de informação gera confusão, buscamos trazer clareza.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Não ensinamos apenas ferramentas. Ensinamos pensamento estratégico, mentalidade de crescimento e fundamentos que permanecem relevantes independentemente da tecnologia do momento.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Nossos Valores</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: <Target className="w-8 h-8" />, 
                  title: 'Clareza', 
                  desc: 'Foco em direção estratégica para evitar dispersão e acelerar evolução técnica.' 
                },
                { 
                  icon: <Users className="w-8 h-8" />, 
                  title: 'Comunidade', 
                  desc: 'Aprender sozinho é possível, mas crescer junto é mais poderoso.' 
                },
                { 
                  icon: <Heart className="w-8 h-8" />, 
                  title: 'Mentalidade', 
                  desc: 'Disciplina, consistência e pensamento de longo prazo fazem a diferença.' 
                },
                { 
                  icon: <Award className="w-8 h-8" />, 
                  title: 'Excelência Técnica', 
                  desc: 'Valorizamos fundamentos sólidos e decisões conscientes na construção de software.' 
                }
              ].map((val, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                  <p className="text-gray-600">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
       <Footer/>
      </div>
    
  );
};

export default AboutPage;