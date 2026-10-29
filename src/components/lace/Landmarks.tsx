import type { CSSProperties, SVGProps } from 'react';

/**
 * NationalTheatre component — architectural illustration of the National Theatre in Iganmu, Lagos
 * Rendered in Hammet's brand purple gradient palette with gold fin rim accents and luminous cyan glazing.
 */
export function NationalTheatre({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYBottom meet"
      role="img"
      aria-labelledby="nt-title nt-desc"
      className={className || 'landmark-art landmark-art--theatre'}
      {...props}
    >
      <title id="nt-title">National Theatre, Iganmu — Lagos Landmark</title>
      <desc id="nt-desc">
        Architectural illustration of the National Theatre in Iganmu, Lagos with shallow saucer roof,
        leaning concrete fins, glowing glazing bands and stepped podium.
      </desc>
      <defs>
        <radialGradient id="nt-halo-react" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#5B21B6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3B0764" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nt-roof-react" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#4C1D95" />
          <stop offset="50%" stopColor="#6D28D9" />
          <stop offset="100%" stopColor="#3B0764" />
        </linearGradient>
        <linearGradient id="nt-rim-gold-react" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="nt-fin-react" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EDE9FE" />
          <stop offset="40%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="nt-glass-react" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E1035" />
          <stop offset="50%" stopColor="#2E1065" />
          <stop offset="100%" stopColor="#1E1035" />
        </linearGradient>
        <linearGradient id="nt-podium-react" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.6" />
        </linearGradient>
        <filter id="nt-glow-cyan-react" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient Light Halo */}
      <ellipse cx="600" cy="380" rx="520" ry="260" fill="url(#nt-halo-react)" />

      {/* Podium / Ground Plaza */}
      <g id="nt-ground" className="landmark-ground">
        <path
          d="M115 528 C304 486 796 481 1084 532 C1048 579 827 612 575 616 C347 616 166 583 115 528Z"
          fill="url(#nt-podium-react)"
          stroke="#5B21B6"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M115 528 C309 488 813 484 1084 532 C1008 553 890 571 760 578 C504 592 254 575 115 528Z"
          fill="#F5F3FF"
          opacity="0.8"
          stroke="#4C1D95"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M173 539 C371 574 814 574 1018 540"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="1.8"
          opacity="0.7"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M171 548 C350 588 793 596 1004 548"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="1.5"
          opacity="0.6"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M209 512 L186 528 M275 500 L251 520 M937 501 L960 521 M1001 511 L1024 530"
          fill="none"
          stroke="#6D28D9"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </g>

      {/* Main Structure */}
      <g id="nt-structure" className="landmark-structure">
        {/* Saucer Roof Shell */}
        <path
          d="M230 260 C324 217 464 183 611 192 C766 201 913 240 1016 294 C1039 307 1046 320 1034 331 C1015 347 972 340 930 326 C827 290 713 272 605 279 C460 287 343 316 265 319 C222 321 197 309 203 297 C207 286 217 270 230 260Z"
          fill="url(#nt-roof-react)"
          stroke="#3B0764"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
        {/* Underlip */}
        <path
          d="M203 297 C294 312 387 314 496 300 C648 282 809 285 929 307 C980 317 1019 313 1034 331 L1027 350 C1004 361 969 359 927 350 C799 323 656 324 504 342 C377 358 272 356 216 342Z"
          fill="#3B0764"
          stroke="#2E1065"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
        {/* Upper Glazing */}
        <path
          d="M255 279 C339 262 444 249 556 248 C690 246 815 264 931 286 L927 307 C809 286 651 282 504 300 C401 312 322 315 265 305Z"
          fill="url(#nt-glass-react)"
          stroke="#06B6D4"
          strokeWidth="1.5"
          strokeOpacity="0.8"
          vectorEffect="non-scaling-stroke"
        />
        {/* 12 Concrete Fins */}
        <path
          d="M232 293 L277 268 L310 486 L280 504 L245 472Z M300 296 L337 279 L365 489 L341 505 L316 480Z M365 296 L397 284 L419 492 L396 507 L375 481Z M430 291 L457 282 L475 494 L453 507 L438 482Z M496 285 L520 279 L534 497 L512 508 L501 482Z M562 280 L583 277 L594 499 L573 509 L566 483Z M628 279 L649 279 L655 498 L635 508 L631 482Z M694 280 L719 282 L718 494 L699 506 L699 480Z M760 282 L790 286 L781 490 L761 504 L765 477Z M826 285 L861 292 L842 485 L820 499 L829 473Z M891 289 L932 298 L901 479 L878 492 L895 468Z M953 292 L1000 302 L960 467 L935 482 L956 454Z"
          fill="url(#nt-fin-react)"
          stroke="#3B0764"
          strokeWidth="2"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* Mid Balcony */}
        <path
          d="M253 357 C372 374 479 373 602 356 C723 340 837 343 948 363 L944 391 C824 371 720 369 604 385 C473 403 360 402 259 383Z"
          fill="#4C1D95"
          stroke="#6D28D9"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        {/* Lower Glazing */}
        <path
          d="M257 397 C362 412 480 413 606 396 C731 379 832 381 940 401 L935 420 C827 401 732 400 608 417 C478 435 358 433 261 416Z"
          fill="url(#nt-glass-react)"
          stroke="#06B6D4"
          strokeWidth="1.5"
          strokeOpacity="0.85"
          vectorEffect="non-scaling-stroke"
        />
        {/* Lower Podium Shell */}
        <path
          d="M267 417 C373 433 486 435 612 418 C736 401 829 402 933 421 L924 478 C816 463 714 463 610 477 C488 493 372 489 276 474Z"
          fill="url(#nt-fin-react)"
          stroke="#3B0764"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M276 476 C377 493 491 496 612 480 C726 465 818 465 924 480"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
      </g>

      {/* Details & Illuminated Window Ovals */}
      <g id="nt-detail" className="landmark-detail">
        <path
          d="M278 268 L312 481 M336 279 L365 485 M396 284 L418 488 M457 282 L476 490 M520 279 L535 492 M583 277 L594 494 M649 279 L655 493 M719 282 L718 489 M790 286 L781 485 M861 292 L842 480 M932 298 L901 474 M1000 302 L960 462"
          stroke="#FFFFFF"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M270 306 C407 321 505 303 606 291 C730 276 826 283 944 309"
          stroke="#06B6D4"
          strokeWidth="2"
          fill="none"
          opacity="0.9"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M283 326 C392 340 498 329 606 315 C730 299 835 302 937 326"
          stroke="#7C3AED"
          strokeWidth="1.8"
          fill="none"
          opacity="0.8"
          vectorEffect="non-scaling-stroke"
        />

        {/* Illuminated Ovals */}
        <g filter="url(#nt-glow-cyan-react)" stroke="#06B6D4" strokeWidth="1.5">
          <ellipse cx="307" cy="363" rx="14" ry="9" fill="#06B6D4" opacity="0.95" />
          <ellipse cx="360" cy="369" rx="14" ry="9" fill="#06B6D4" opacity="0.95" />
          <ellipse cx="416" cy="370" rx="14" ry="9" fill="#06B6D4" opacity="0.95" />
          <ellipse cx="475" cy="366" rx="14" ry="9" fill="#06B6D4" opacity="0.95" />
          <ellipse cx="537" cy="360" rx="14" ry="9" fill="#06B6D4" opacity="0.95" />
          <ellipse cx="600" cy="353" rx="14" ry="9" fill="#FBBF24" opacity="0.95" />
          <ellipse cx="664" cy="351" rx="14" ry="9" fill="#FBBF24" opacity="0.95" />
          <ellipse cx="729" cy="353" rx="14" ry="9" fill="#06B6D4" opacity="0.95" />
          <ellipse cx="793" cy="359" rx="14" ry="9" fill="#06B6D4" opacity="0.95" />
          <ellipse cx="855" cy="367" rx="14" ry="9" fill="#06B6D4" opacity="0.95" />
          <ellipse cx="911" cy="375" rx="14" ry="9" fill="#06B6D4" opacity="0.95" />
        </g>

        <path
          d="M297 430 L292 472 M326 434 L323 477 M355 437 L354 481 M384 438 L385 483 M414 440 L417 486 M445 440 L450 488 M477 438 L483 489 M509 434 L516 489 M542 430 L549 488 M576 425 L584 486 M610 420 L617 484 M645 416 L651 480 M680 413 L684 477 M715 411 L717 475 M750 411 L749 474 M785 412 L782 474 M820 414 L815 475 M855 417 L848 477 M888 420 L880 478 M917 424 L909 479"
          stroke="#6D28D9"
          strokeWidth="1.5"
          opacity="0.8"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </g>

      {/* Gold Crown Accents */}
      <g id="nt-accent" className="landmark-accent" fill="url(#nt-rim-gold-react)" stroke="#D97706" strokeWidth="1.5" vectorEffect="non-scaling-stroke">
        <path d="M347 225 L359 222 L360 233 L348 236Z M433 211 L446 209 L447 219 L434 222Z M534 202 L547 201 L548 211 L535 212Z M638 202 L651 203 L650 213 L637 212Z M742 206 L755 208 L753 218 L740 216Z M844 216 L857 219 L854 229 L841 226Z M935 232 L947 236 L943 245 L931 241Z" />
        <path d="M203 528 L228 524 M976 526 L1001 530 M311 567 L333 570 M865 566 L889 562" fill="none" stroke="#F59E0B" strokeWidth="2.5" opacity="0.9" />
      </g>
    </svg>
  );
}

/**
 * LekkiIkoyiBridge component — architectural illustration of the cable-stayed Lekki-Ikoyi Link Bridge
 * Rendered in Hammet/DevFest Lagos vibrant emerald and royal indigo palette with luminous white stay cables and glowing lampposts.
 */
export function LekkiIkoyiBridge({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYBottom meet"
      role="img"
      aria-labelledby="lb-title lb-desc"
      className={className || 'landmark-art landmark-art--bridge'}
      {...props}
    >
      <title id="lb-title">Lekki–Ikoyi Link Bridge — Lagos Landmark</title>
      <desc id="lb-desc">
        Architectural illustration of the cable-stayed Lekki–Ikoyi Link Bridge with towering crossed-X pylon,
        luminous stay cables, curved highway deck, and lagoon waters.
      </desc>
      <defs>
        <radialGradient id="lb-sky-react" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#3B0764" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#160D33" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lb-pylon-react" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="lb-pylon-dark-react" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#064E3B" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <linearGradient id="lb-deck-react" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="50%" stopColor="#312E81" />
          <stop offset="100%" stopColor="#1E1B4B" />
        </linearGradient>
        <linearGradient id="lb-water-react" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0891B2" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#164E63" stopOpacity="0.6" />
        </linearGradient>
        <filter id="lb-glow-cyan-react" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Sky Aura */}
      <ellipse cx="600" cy="280" rx="580" ry="240" fill="url(#lb-sky-react)" />

      {/* Lagoon Water Base & Wave Ribbons */}
      <g id="lb-ground" className="landmark-ground">
        <path d="M0 450 C250 435 550 420 850 400 C1020 390 1120 375 1200 370 L1200 600 L0 600 Z" fill="url(#lb-water-react)" />
        <path d="M0 486 C211 468 354 474 510 461 C735 442 961 445 1200 420" fill="none" stroke="#0891B2" strokeWidth="2.5" opacity="0.85" vectorEffect="non-scaling-stroke" />
        <path d="M44 527 L431 450 M641 489 L1164 381" fill="none" stroke="#06B6D4" strokeWidth="1.8" opacity="0.6" vectorEffect="non-scaling-stroke" />
        <path d="M22 507 L168 493 M198 501 L318 487 M917 461 L1065 447 M1084 439 L1181 431" fill="none" stroke="#22D3EE" strokeWidth="1.5" opacity="0.75" vectorEffect="non-scaling-stroke" />
        <path d="M0 552 C217 528 381 534 542 518 C792 491 1006 498 1200 473" fill="none" stroke="#0284C7" strokeWidth="2" opacity="0.5" vectorEffect="non-scaling-stroke" />
        <path d="M92 467 C276 469 410 444 553 431 C754 413 963 389 1110 357" fill="none" stroke="#0E7490" strokeWidth="1.5" opacity="0.6" vectorEffect="non-scaling-stroke" />
      </g>

      {/* Crossed-X Pylon and Highway Deck */}
      <g id="lb-structure" className="landmark-structure">
        <path d="M564 72 L583 73 L625 270 L507 427 L486 424 L603 270Z" fill="url(#lb-pylon-react)" stroke="#064E3B" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        <path d="M629 73 L649 72 L615 270 L718 402 L698 411 L594 270Z" fill="url(#lb-pylon-dark-react)" stroke="#064E3B" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        <path d="M486 424 L507 427 L500 444 L477 443Z M698 411 L718 402 L729 419 L707 428Z" fill="#047857" stroke="#064E3B" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        <path d="M565 80 L591 165 L607 265 M645 80 L621 165 L601 265" fill="none" stroke="#34D399" strokeWidth="4.5" opacity="0.9" vectorEffect="non-scaling-stroke" />

        {/* Bridge Highway Deck */}
        <path d="M80 437 C227 434 354 414 501 400 C708 380 918 356 1118 322 L1125 340 C924 379 714 402 505 423 C345 440 211 460 84 460Z" fill="url(#lb-deck-react)" stroke="#1E1B4B" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        <path d="M85 460 C211 462 348 443 506 426 C719 405 926 382 1125 344 L1121 357 C920 395 715 417 507 439 C341 456 211 477 91 476Z" fill="#312E81" stroke="#4338CA" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />

        {/* Piers */}
        <path d="M270 424 L287 423 L280 484 L263 485Z M853 365 L867 362 L864 424 L850 427Z M1041 337 L1054 334 L1052 395 L1038 398Z" fill="#E0E7FF" stroke="#312E81" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        <path d="M250 485 L296 484 M842 427 L871 424 M1031 398 L1059 395" fill="none" stroke="#22D3EE" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />

        {/* Central Pier & Guard Rail */}
        <path d="M583 395 L615 391 L630 419 L569 426Z" fill="#C7D2FE" stroke="#312E81" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        <path d="M562 421 L638 412" fill="none" stroke="#22D3EE" strokeWidth="2" opacity="0.8" vectorEffect="non-scaling-stroke" />
        <path d="M565 94 L556 94 M650 94 L641 94" fill="none" stroke="#10B981" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <path d="M91 438 C237 435 367 416 507 402 C713 382 918 359 1118 326" fill="none" stroke="#06B6D4" strokeWidth="2" opacity="0.9" vectorEffect="non-scaling-stroke" />
      </g>

      {/* Luminous Stay Cables */}
      <g id="lb-detail" className="landmark-detail">
        <g stroke="#FFFFFF" opacity="0.85" filter="url(#lb-glow-cyan-react)">
          <path d="M556 96 L124 434 M556 96 L158 433 M556 96 L192 430 M556 96 L226 427 M556 96 L260 424 M556 96 L294 421 M556 96 L328 418 M556 96 L362 415 M556 96 L396 412 M556 96 L430 408 M556 96 L464 405 M556 96 L498 402 M556 96 L532 398 M556 96 L566 395" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </g>
        <g stroke="#22D3EE" opacity="0.9" filter="url(#lb-glow-cyan-react)">
          <path d="M647 96 L626 390 M647 96 L660 384 M647 96 L694 378 M647 96 L728 372 M647 96 L762 366 M647 96 L796 360 M647 96 L830 354 M647 96 L864 348 M647 96 L898 342 M647 96 L932 336 M647 96 L966 330 M647 96 L1000 324 M647 96 L1034 318 M647 96 L1068 312 M647 96 L1102 306" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </g>
        <path d="M550 112 L141 434 M650 112 L648 386 M571 191 L207 428 M630 191 L784 362" stroke="#67E8F9" strokeWidth="1.8" opacity="0.6" fill="none" vectorEffect="non-scaling-stroke" />
        <path d="M111 450 C242 450 365 431 506 414 C719 389 923 365 1122 336" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="14 12" opacity="0.9" fill="none" vectorEffect="non-scaling-stroke" />
        <path d="M90 464 C225 465 354 447 507 431 C719 410 924 387 1124 351" stroke="#F59E0B" strokeWidth="2" opacity="0.8" fill="none" vectorEffect="non-scaling-stroke" />

        {/* Street Lamps */}
        <g stroke="#374151" strokeWidth="1.8" fill="none" vectorEffect="non-scaling-stroke">
          <path d="M180 448 C180 435 186 432 193 433" />
          <path d="M314 434 C314 421 320 418 327 419" />
          <path d="M445 420 C445 407 451 404 458 405" />
          <path d="M690 400 C690 387 696 384 703 385" />
          <path d="M820 382 C820 369 826 366 833 367" />
          <path d="M950 365 C950 352 956 349 963 350" />
          <circle cx="193" cy="433" r="3.5" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1" />
          <circle cx="327" cy="419" r="3.5" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1" />
          <circle cx="458" cy="405" r="3.5" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1" />
          <circle cx="703" cy="385" r="3.5" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1" />
          <circle cx="833" cy="367" r="3.5" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1" />
          <circle cx="963" cy="350" r="3.5" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1" />
        </g>
      </g>

      {/* Emerald Accents */}
      <g id="lb-accent" className="landmark-accent" fill="none" stroke="#34D399" strokeWidth="2" vectorEffect="non-scaling-stroke">
        <path d="M575 83 L590 170 M638 83 L622 170" opacity="0.9" />
        <path d="M604 273 L502 420 M605 273 L704 397" opacity="0.85" />
        <path d="M170 516 L224 510 M968 486 L1033 478" opacity="0.75" stroke="#06B6D4" />
      </g>
    </svg>
  );
}

export const LANDMARK_STYLE: CSSProperties = {
  '--land-fill': '#EDE9FE',
  '--land-glass': '#3B0764',
  '--land-accent': '#06B6D4',
} as CSSProperties;
