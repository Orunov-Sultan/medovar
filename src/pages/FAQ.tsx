import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Ваш мёд действительно натуральный?",
      answer: "Да, на 100%. Мы семейная пасека и не используем сахарные сиропы для подкормки пчел или термическую обработку мёда. Каждый сбор проходит лабораторный контроль качества."
    },
    {
      question: "Почему мёд засахарился (кристаллизовался)?",
      answer: "Кристаллизация — это естественный процесс для натурального мёда. Это подтверждает отсутствие лишней влаги и правильный состав. Исключение составляет лишь акациевый мёд, который может оставаться жидким долгое время."
    },
    {
      question: "Как правильно хранить мёд?",
      answer: "Мёд лучше всего хранить в стеклянной таре в темном прохладном месте (от 0 до +20 °C). Избегайте прямых солнечных лучей и высокой влажности."
    },
    {
      question: "Вреден ли мёд при нагревании?",
      answer: "При нагревании выше 40-45 °C мёд теряет свои полезные ферменты и витамины. Мы рекомендуем добавлять его в уже слегка остывший чай или кашу."
    },
    {
      question: "Как вы упаковываете заказы для доставки?",
      answer: "Мы используем многослойную воздушно-пузырьковую пленку и плотные картонные коробки. Стеклянные банки фиксируются так, чтобы исключить движение внутри коробки. Вероятность боя минимальна."
    },
    {
      question: "Можно ли детям давать ваш мёд?",
      answer: "Мёд — это сильный аллерген. Педиатры не рекомендуют давать мёд детям до 1-2 лет. В более старшем возрасте вводите продукт в рацион постепенно, начиная с половины чайной ложки."
    }
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="py-20 bg-brand-cream">
        <div className="container-custom text-center">
          <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-primary">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-brand-dark">
            Частые вопросы
          </h1>
          <p className="text-brand-text/60 max-w-2xl mx-auto">
            Собрали для вас ответы на самые популярные вопросы о нашем мёде, его
            свойствах и работе магазина.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom max-w-3xl">
          <div className="flex flex-col">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-gray-100 py-4 last:border-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left cursor-pointer group"
                >
                  <span
                    className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-brand-primary' : 'text-brand-dark group-hover:text-brand-primary'}`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-brand-primary text-brand-dark rotate-180' : 'bg-brand-cream text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark'}`}
                  >
                    {openIndex === idx ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                {/* Collapsible Answer with no reserved space */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === idx
                      ? 'grid-rows-[1fr] opacity-100 mt-4'
                      : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className={`text-brand-text/70 leading-relaxed ${openIndex !== idx && 'hidden'}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-brand-dark text-white p-10 rounded-[2.5rem] text-center shadow-xl shadow-brand-dark/10">
            <h3 className="text-2xl font-bold mb-4">Не нашли ответа?</h3>
            <p className="text-white/60 mb-8">
              Напишите нам напрямую, и мы проконсультируем вас по любому
              вопросу.
            </p>
            <a
              href="/contact"
              className="inline-block bg-brand-primary text-brand-dark px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300"
            >
              Задать вопрос
            </a>
          </div>
        </div>
      </section>
    </div>
  )
};

export default FAQ;
