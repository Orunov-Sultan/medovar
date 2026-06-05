import React from 'react';
import { ShieldCheck, Leaf, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-cream overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-brand-dark leading-tight">
              Традиции, рожденные <br />
              <span className="text-brand-primary">самой природой</span>
            </h1>
            <p className="text-xl text-brand-text/80 leading-relaxed mb-10">
              «Медовар» — это семейная пасека с многолетней историей. Мы верим, что настоящий мед должен быть чистым, 
              натуральным и приносить пользу каждой семье.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-20 lg:pb-32">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/banner-image1.png" 
                    alt="Наша пасека" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden sm:block">
                  <div className="text-4xl font-bold text-brand-primary mb-1">15+</div>
                  <div className="text-sm font-bold text-brand-dark uppercase tracking-widest">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <div className="space-y-6 text-brand-text/70 leading-relaxed">
                <p>
                  Всё началось более 15 лет назад с нескольких ульев на заднем дворе. Любовь к пчелам 
                  и уважение к их труду постепенно переросли из простого увлечения в дело всей жизни.
                </p>
                <p>
                  Сегодня «Медовар» — это современная пасека, расположенная в экологически чистом районе, 
                  вдали от шумных городов и промышленных зон. Мы бережно собираем мёд, сохраняя все его 
                  полезные свойства и неповторимый аромат диких трав и цветов.
                </p>
                <p>
                  Мы не используем термическую обработку, искусственные добавки или сиропы. Наш мёд — 
                  это именно то, что создали пчёлы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-dark text-white rounded-[3rem] mx-4 lg:mx-10 overflow-hidden relative">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Наши ценности</h2>
            <p className="text-white/60">Принципы, которым мы следуем в каждом деле</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="text-brand-primary" size={32} />,
                title: "Качество",
                desc: "Строгий контроль на всех этапах сбора и фасовки."
              },
              {
                icon: <Leaf className="text-brand-primary" size={32} />,
                title: "Экологичность",
                desc: "Только чистые районы и естественные методы пчеловодства."
              },
              {
                icon: <Heart className="text-brand-primary" size={32} />,
                title: "Забота",
                desc: "Мы заботимся о здоровье наших пчел и благополучии клиентов."
              },
              {
                icon: <Award className="text-brand-primary" size={32} />,
                title: "Честность",
                desc: "Прозрачный состав и отсутствие скрытых добавок."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-white/60 mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-brand-text/60">От цветка до вашей ложки</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "Сбор нектара",
                desc: "Наши пчелы трудятся на полях дикоросов, собирая лучший нектар."
              },
              {
                num: "02",
                title: "Холодная качка",
                desc: "Мы используем метод центрифугирования без нагрева, чтобы сохранить ферменты."
              },
              {
                num: "03",
                title: "Бережная упаковка",
                desc: "Мёд разливается в стеклянную тару, которая сохраняет вкус и аромат."
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-brand-primary/40 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-brand-text/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
