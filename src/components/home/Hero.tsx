'use client';

import { useState } from 'react';
import { LINKS } from '@/lib/config';
import Countdown from '@/components/Countdown';
import { Assemble } from '@/components/lace/Assemble';
import {
  LANDMARK_STYLE,
  LekkiIkoyiBridge,
  NationalTheatre,
} from '@/components/lace/Landmarks';

export default function Hero() {
  const [theatreActive, setTheatreActive] = useState(false);
  const [bridgeActive, setBridgeActive] = useState(false);

  return (
    <header id="top" className="lace-hero">
      <div className="lace-wrap lace-hero__grid">
        <Assemble className="lace-hero__copy">
          <div className="lace-hero__brandline">
            <span>Lagos AI Career Experience 1.0</span>
            <span>Presented by Hammet School of AI Foundations</span>
          </div>
          <h1 className="lace-hero__title">
            Maximize your AI Advantage:
          </h1>
          <p className="lace-hero__subhead">Get ahead of your competitors.</p>
          <div className="lace-hero__dates" aria-label="Training dates">
            <p>A Two weeks Intensive Certification Training</p>
            <p>Virtual: November 7th – 21st</p>
            <p>Physical: Saturday November 7th</p>
            <p className="lace-hero__venue">Venue: 10 Kayode Alabi, Ogba, Lagos</p>
          </div>
          <Countdown />
          <div className="lace-hero__actions">
            <a className="lace-button lace-button--primary" href={LINKS.selar} target="_blank" rel="noopener noreferrer">
              Get a ticket <span aria-hidden="true">→</span>
            </a>
            <a className="lace-button lace-button--secondary" href="#tickets">
              View ticket options
            </a>
          </div>
        </Assemble>

        <Assemble className="lace-landmark-stage" style={LANDMARK_STYLE}>
          <figure className="landmark-figure landmark-figure--theatre">
            <button
              type="button"
              aria-label="Highlight National Theatre, Iganmu"
              aria-pressed={theatreActive}
              onClick={() => setTheatreActive((active) => !active)}
            >
              <NationalTheatre />
            </button>
            <figcaption>National Theatre, Iganmu</figcaption>
          </figure>
          <figure className="landmark-figure landmark-figure--bridge">
            <button
              type="button"
              aria-label="Highlight Lekki–Ikoyi Link Bridge"
              aria-pressed={bridgeActive}
              onClick={() => setBridgeActive((active) => !active)}
            >
              <LekkiIkoyiBridge />
            </button>
            <figcaption>Lekki–Ikoyi Link Bridge</figcaption>
          </figure>
        </Assemble>
      </div>
    </header>
  );
}
