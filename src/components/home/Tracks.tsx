'use client';

import { useState } from 'react';
import { Assemble } from '@/components/lace/Assemble';

const TRACKS_DATA = [
  {
    num: '01',
    title: 'LIVE Career Consultation',
    summary: '1-on-1 career diagnostic with seasoned industry leaders.',
    details:
      'Review your portfolio, identify high-leverage AI opportunities, map your transition into tech roles, and formulate a customized 12-month earning roadmap.',
    deliverable: 'Personal AI Career Action Plan',
    tools: ['Diagnostic Rubric', 'Portfolio Audit', 'Salary Benchmarks'],
  },
  {
    num: '02',
    title: 'Full Introduction to AI',
    summary: 'Understand the foundations powering modern artificial intelligence.',
    details:
      'Demystify neural networks, machine learning paradigms, deep learning pipelines, and foundation models from first principles without math gatekeeping.',
    deliverable: 'Core AI Conceptual Framework',
    tools: ['Transformer Architecture', 'Tokenization', 'Inference Mechanics'],
  },
  {
    num: '03',
    title: 'Generative AI Mastery',
    summary: 'Hands-on practical mastery of modern large language models.',
    details:
      'Advanced prompt architecture, context optimization, retrieval augmented generation (RAG), and deploying multimodal workflows for production reliability.',
    deliverable: 'Production Prompt Playbook',
    tools: ['Claude 3.7', 'GPT-4o', 'DeepSeek', 'Perplexity Pro'],
  },
  {
    num: '04',
    title: 'AI Tools Used For Work Improvement',
    summary: '10x your professional speed and quality with custom automation.',
    details:
      'Build end-to-end automated workflows that draft reports, conduct research, clean datasets, and eliminate 80% of repetitive daily work.',
    deliverable: 'Automated Daily Workflow Suite',
    tools: ['Cursor', 'v0', 'Make.com', 'Zapier', 'Notion AI'],
  },
  {
    num: '05',
    title: 'Personal Branding',
    summary: 'Stand out and command authority in a crowded marketplace.',
    details:
      'Craft high-converting LinkedIn thought leadership, build a recognizable digital footprint, and package your skill set to attract inbound global contracts.',
    deliverable: 'Executive Inbound Profile & Bio',
    tools: ['LinkedIn Creator Matrix', 'X Threads', 'Case Study Framework'],
  },
  {
    num: '06',
    title: 'Where and how to get investment for your business',
    summary: 'Master the fundraising game across African & international capital.',
    details:
      'Learn where grant funding, pre-seed capital, and venture funds are deployed. Structure data rooms, pitch decks, and valuation models that get cheques signed.',
    deliverable: 'Investor-Ready Pitch Deck Blueprint',
    tools: ['Due Diligence Checklist', 'Term Sheet Parser', 'Cap Table Matrix'],
  },
  {
    num: '07',
    title: 'Using AI to track business finance',
    summary: 'Automate accounting, cash flow diagnostics, and expense auditing.',
    details:
      'Use AI models to spot leakage, forecast revenue runway, reconcile multi-currency payments, and produce real-time executive financial snapshots.',
    deliverable: 'AI Cash Flow Diagnostic Dashboard',
    tools: ['Automated Ledger', 'Runway Forecaster', 'Anomaly Detector'],
  },
  {
    num: '08',
    title: 'Increasing business sales',
    summary: 'High-converting inbound and outbound AI acquisition engines.',
    details:
      'Deploy AI-powered outreach sequences, build dynamic sales scripts, automate customer qualification, and multiply deal closing rates.',
    deliverable: 'Full-Funnel Sales Automation Engine',
    tools: ['Apollo.io', 'Clay', 'AI Copy Engines', 'Dynamic CRM'],
  },
  {
    num: '09',
    title: 'Compulsory exam then your certificate.',
    summary: 'Validate your competence with the proctored certification exam.',
    details:
      'Real-world problem-solving assessment. Earn your verified, verifiable Hammet School of AI Foundations Certification credential for global recognition.',
    deliverable: 'Verified Hammet AI Certification',
    tools: ['Proctored Capstone', 'Verifiable Credential', 'Alumni Network'],
  },
];

export default function Tracks() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <section id="learn" className="lace-section lace-tracks">
      <div className="lace-wrap">
        <Assemble className="lace-section-heading">
          <span className="lace-eyebrow">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] inline-block mr-2 animate-pulse" />
            The programme
          </span>
          <h2 className="lace-tracks__title">
            <span className="lace-tracks__title-gradient">Nine tracks, one clear finish.</span>
          </h2>
          <p className="lace-tracks__subtitle">
            Hover or tap any track to explore the in-depth syllabus, practical deliverables and tools
            mastered.
          </p>
        </Assemble>

        <ol className="track-grid">
          {TRACKS_DATA.map((track, index) => {
            const isFlipped = activeCard === index;
            const isFinal = index === 8;

            return (
              <li key={track.title} className="track-grid-item">
                <Assemble
                  className={`track-card ${isFinal ? 'track-card--final' : ''} ${
                    isFlipped ? 'is-active-hover' : ''
                  }`}
                  onClick={() => toggleCard(index)}
                >
                  {/* Shiny Sheen Reflection Sweep */}
                  <div className="track-card__shiny-sweep" aria-hidden="true" />

                  {/* ── DEFAULT FRONT FACE (GREEN CARD) ── */}
                  <div className="track-card__front">
                    <div className="track-card__top">
                      <span className="track-card__number" aria-hidden="true">
                        {track.num}
                      </span>
                      <span className="track-card__hover-badge" aria-hidden="true">
                        Explore syllabus ↘
                      </span>
                    </div>

                    <div className="track-card__body">
                      <h3 className="track-card__heading">{track.title}</h3>
                      <p className="track-card__brief">{track.summary}</p>
                    </div>

                    <div className="track-card__footer">
                      <span className="track-card__tag">LACE Core Track</span>
                      <span className="track-card__arrow" aria-hidden="true">
                        →
                      </span>
                    </div>
                  </div>

                  {/* ── HIDDEN CONTEXT (REVEALED ON HOVER/TAP) ── */}
                  <div className="track-card__hidden-context">
                    <div className="track-context__header">
                      <span className="track-context__num">{track.num}</span>
                      <span className="track-context__badge">Syllabus & Deliverables</span>
                    </div>

                    <h4 className="track-context__title">{track.title}</h4>
                    <p className="track-context__desc">{track.details}</p>

                    <div className="track-context__deliverable">
                      <span className="track-context__label">🎯 What you will build:</span>
                      <strong className="track-context__val">{track.deliverable}</strong>
                    </div>

                    <div className="track-context__tools">
                      {track.tools.map((tool) => (
                        <span key={tool} className="track-context__tool-pill">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Assemble>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
