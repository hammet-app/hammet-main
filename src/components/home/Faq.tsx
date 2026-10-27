'use client';

import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { LINKS } from '@/lib/config';
import { Assemble } from '@/components/lace/Assemble';

const QUESTIONS: { question: string; answer: ReactNode }[] = [
  {
    question: 'Is LACE online or in person?',
    answer: (
      <>
        The Opening Ceremony on 31 October is in person at 10 Kayode Alabi, Ogba, Lagos. The
        two-week certification training, Monday 2 to Friday 13 November, is fully virtual, so you
        can join from anywhere.
      </>
    ),
  },
  {
    question: 'Do I need a technical background?',
    answer: 'No. The courses start from the basics and are designed for professionals, business owners and students from any field.',
  },
  {
    question: 'How do I register?',
    answer: (
      <>
        Choose your ticket and pay on Selar. You will then be added to the LACE WhatsApp group,
        where schedules, reminders and session links are shared.
      </>
    ),
  },
  {
    question: 'How do I get certified?',
    answer: 'The exam on Saturday 14 November is compulsory. Complete the training, then score above average to earn your AI certification from Hammet School of AI Foundations.',
  },
  {
    question: 'Will I get recordings if I miss a session?',
    answer: 'Yes. Every ticket includes full recordings of the certification training and the Opening Ceremony, including the Group AI Consultation session.',
  },
  {
    question: 'Who can buy the Business Executive ticket?',
    answer: 'Business owners and entrepreneurs only. It adds four private masterclasses on funding, sales and investment for your business.',
  },
  {
    question: 'What is H.A.C.K?',
    answer: 'Hammet AI Circle of Knowledge. Researchers from Hammet Research Foundation send monthly updates on how AI is changing careers and business, so you can adjust your strategy. Advanced and Business Executives also join inner circle sessions on leadership, networking, personal branding and private conversations with industry leaders.',
  },
  {
    question: 'I am not ready to pay yet. Can I still get information?',
    answer: (
      <>
        Yes. Join the LACE waitlist group on{' '}
        <a href={LINKS.waitlist} target="_blank" rel="noopener noreferrer">
          rebrand.ly/LACERW
        </a>{' '}
        to get more information and updates, then register whenever you are ready. You can also call
        or WhatsApp <a href={`tel:${LINKS.phone}`}>{LINKS.phoneNice}</a>.
      </>
    ),
  },
  {
    question: 'Can someone else pay for my ticket?',
    answer: (
      <>
        Yes. Parents, sponsors and employers can pay for one seat or many. Email{' '}
        <a href="mailto:hammetedu@gmail.com">hammetedu@gmail.com</a> to arrange it.
      </>
    ),
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const moveFocus = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number | null = null;
    if (event.key === 'ArrowDown') next = (index + 1) % QUESTIONS.length;
    if (event.key === 'ArrowUp') next = (index + QUESTIONS.length - 1) % QUESTIONS.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = QUESTIONS.length - 1;
    if (next === null) return;
    event.preventDefault();
    buttonRefs.current[next]?.focus();
  };

  return (
    <section id="faq" className="lace-section lace-faq">
      <div className="lace-wrap">
        <Assemble className="lace-section-heading">
          <span className="lace-eyebrow">Questions</span>
          <h2>Good to know before you join.</h2>
        </Assemble>
        <div className="faq-list">
          {QUESTIONS.map(({ question, answer }, index) => {
            const expanded = openIndex === index;
            const buttonId = `lace-faq-question-${index}`;
            const panelId = `lace-faq-panel-${index}`;
            return (
              <Assemble as="article" className="faq-item" key={question}>
                <h3>
                  <button
                    ref={(node) => { buttonRefs.current[index] = node; }}
                    id={buttonId}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(expanded ? null : index)}
                    onKeyDown={(event) => moveFocus(event, index)}
                  >
                    <span>{question}</span>
                    <span className="faq-item__icon" aria-hidden="true">{expanded ? '−' : '+'}</span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  className="faq-item__panel"
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!expanded}
                >
                  <div>{answer}</div>
                </div>
              </Assemble>
            );
          })}
        </div>
        <Assemble className="faq-cta">
          <div>
            <b>Still thinking about it?</b>
            <span>Questions? Call or WhatsApp {LINKS.phoneNice}, or register now.</span>
          </div>
          <a href={LINKS.selar} target="_blank" rel="noopener noreferrer">
            Register for LACE 1.0 <span aria-hidden="true">→</span>
          </a>
        </Assemble>
      </div>
    </section>
  );
}
