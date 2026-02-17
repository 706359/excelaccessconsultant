import { useState } from 'react';

const FAQ_ITEMS = [
  { q: 'Who do you work with?', a: 'Companies that use Excel and Access every day to run their business. If your spreadsheets are critical to operations, I can help.' },
  { q: 'Why hire a solo consultant instead of an agency?', a: 'Agencies hand your project to junior developers. I do the work myself. You get 20 years of experience, not someone learning on your dime.' },
  { q: 'Do you work with existing systems?', a: 'Yes. Most of what I do is fixing or improving stuff that already exists. I rarely start from scratch unless you want me to.' },
  { q: 'How long do projects take?', a: "Depends on what you need. Simple automations? A few days to a week. Big database projects? Usually 4 to 8 weeks. I'll give you a timeline when we talk." },
  { q: 'Do you provide documentation?', a: "Yes. I write documentation that explains how things work. You shouldn't need me to explain it every time you use it." },
  { q: 'Can you help with urgent issues?', a: "If I'm available, yes. I've done plenty of emergency fixes. Call me and we'll figure it out." },
  { q: 'Do you work remotely?', a: "Yes. I work remotely. We'll use screen sharing, secure file transfer, whatever works for you. I've been doing remote work long before it was trendy." },
];

export default function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="py-8 md:py-12 bg-surface border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="card">
              <button
                type="button"
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between text-left"
                aria-expanded={openIndex === i}
              >
                <h3 className="text-heading-sm md:text-heading-md font-bold font-display text-slate-900">
                  {item.q}
                </h3>
                <span className="text-2xl font-light text-slate-400 ml-4 flex-shrink-0">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              {openIndex === i && (
                <p className="text-slate-600 leading-relaxed mt-4">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
