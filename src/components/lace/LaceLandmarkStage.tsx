'use client';

import { useEffect, useState } from 'react';
import { Landmark } from 'lucide-react';

interface LandmarkStageProps {
  activeLandmark?: 'theatre' | 'bridge';
  onSelectLandmark?: (landmark: 'theatre' | 'bridge') => void;
  forcedActive?: 'theatre' | 'bridge' | null;
}

export default function LaceLandmarkStage({
  activeLandmark: controlledActive,
  onSelectLandmark,
  forcedActive,
}: LandmarkStageProps) {
  const [internalActive, setInternalActive] = useState<'theatre' | 'bridge'>('theatre');

  useEffect(() => {
    if (forcedActive) {
      setInternalActive(forcedActive);
    }
  }, [forcedActive]);

  const active = controlledActive ?? internalActive;

  const handleSelect = (landmark: 'theatre' | 'bridge') => {
    setInternalActive(landmark);
    if (onSelectLandmark) {
      onSelectLandmark(landmark);
    }
  };

  return (
    <div
      className="lace-landmark-container relative w-full overflow-visible select-none"
      aria-label="Lagos Architectural Landmarks"
    >
      {/* DevFest Lagos Ambient Clouds in Sky */}
      <div className="landmark-sky-clouds pointer-events-none" aria-hidden="true">
        <span className="cloud cloud--1" />
        <span className="cloud cloud--2" />
        <span className="cloud cloud--3" />
      </div>

      {/* DevFest Lagos Flying Birds Animation */}
      <div className="landmark-birds pointer-events-none" aria-hidden="true">
        <svg className="bird bird--1" viewBox="0 0 32 18">
          <path d="M0 9 Q8 0 16 9 Q24 0 32 9 Q24 14 16 10 Q8 14 0 9Z" fill="currentColor" />
        </svg>
        <svg className="bird bird--2" viewBox="0 0 32 18">
          <path d="M0 9 Q8 0 16 9 Q24 0 32 9 Q24 14 16 10 Q8 14 0 9Z" fill="currentColor" />
        </svg>
        <svg className="bird bird--3" viewBox="0 0 32 18">
          <path d="M0 9 Q8 0 16 9 Q24 0 32 9 Q24 14 16 10 Q8 14 0 9Z" fill="currentColor" />
        </svg>
      </div>

      {/* Spacious Open Viewport for Background Monument Display */}
      <div className="landmark-viewport relative w-full h-[160px] sm:h-[220px] md:h-[480px] lg:h-[580px] flex flex-col justify-end items-center p-2 md:p-4 pointer-events-none" />
    </div>
  );
}

