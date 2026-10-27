import type { CSSProperties } from 'react';

/*
 * The vectors below are hand-set paths measured against the reference photos in
 * design-references/. The public SVGs are exported from these same source strings
 * by scripts/export-lace-landmarks.mjs; only their CSS variables/currentColor are
 * replaced with literal colours.
 */
const THEATRE_GRAPHIC = String.raw`<title id="nt-title">National Theatre, Iganmu</title>
<desc id="nt-desc">A three-quarter architectural drawing of the National Theatre's shallow saucer roof, leaning concrete fins, dark glazing, curved balcony bands and elliptical podium.</desc>
<g id="nt-ground" class="landmark-ground" opacity=".35">
  <path d="M115 528 C304 486 796 481 1084 532 C1048 579 827 612 575 616 C347 616 166 583 115 528Z" fill="var(--land-fill)" opacity=".44"/>
  <path d="M115 528 C309 488 813 484 1084 532 C1008 553 890 571 760 578 C504 592 254 575 115 528Z" fill="none" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke"/>
  <path d="M173 539 C371 574 814 574 1018 540" fill="none" stroke="currentColor" stroke-width="1" opacity=".55" vector-effect="non-scaling-stroke"/>
  <path d="M171 548 C350 588 793 596 1004 548" fill="none" stroke="currentColor" stroke-width="1" opacity=".45" vector-effect="non-scaling-stroke"/>
  <path d="M209 512 L186 528 M275 500 L251 520 M937 501 L960 521 M1001 511 L1024 530" fill="none" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke"/>
</g>
<g id="nt-structure" class="landmark-structure" opacity=".35">
  <path d="M230 260 C324 217 464 183 611 192 C766 201 913 240 1016 294 C1039 307 1046 320 1034 331 C1015 347 972 340 930 326 C827 290 713 272 605 279 C460 287 343 316 265 319 C222 321 197 309 203 297 C207 286 217 270 230 260Z" fill="var(--land-fill)" opacity=".76" stroke="currentColor" stroke-width="2.5" vector-effect="non-scaling-stroke"/>
  <path d="M203 297 C294 312 387 314 496 300 C648 282 809 285 929 307 C980 317 1019 313 1034 331 L1027 350 C1004 361 969 359 927 350 C799 323 656 324 504 342 C377 358 272 356 216 342Z" fill="var(--land-fill)" opacity=".92" stroke="currentColor" stroke-width="2.5" vector-effect="non-scaling-stroke"/>
  <path d="M232 293 L277 268 L310 486 L280 504 L245 472Z M300 296 L337 279 L365 489 L341 505 L316 480Z M365 296 L397 284 L419 492 L396 507 L375 481Z M430 291 L457 282 L475 494 L453 507 L438 482Z M496 285 L520 279 L534 497 L512 508 L501 482Z M562 280 L583 277 L594 499 L573 509 L566 483Z M628 279 L649 279 L655 498 L635 508 L631 482Z M694 280 L719 282 L718 494 L699 506 L699 480Z M760 282 L790 286 L781 490 L761 504 L765 477Z M826 285 L861 292 L842 485 L820 499 L829 473Z M891 289 L932 298 L901 479 L878 492 L895 468Z M953 292 L1000 302 L960 467 L935 482 L956 454Z" fill="var(--land-fill)" opacity=".98" stroke="currentColor" stroke-width="2" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M255 279 C339 262 444 249 556 248 C690 246 815 264 931 286 L927 307 C809 286 651 282 504 300 C401 312 322 315 265 305Z" fill="var(--land-glass)" opacity=".68" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke"/>
  <path d="M253 357 C372 374 479 373 602 356 C723 340 837 343 948 363 L944 391 C824 371 720 369 604 385 C473 403 360 402 259 383Z" fill="var(--land-fill)" opacity=".91" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
  <path d="M257 397 C362 412 480 413 606 396 C731 379 832 381 940 401 L935 420 C827 401 732 400 608 417 C478 435 358 433 261 416Z" fill="var(--land-glass)" opacity=".57" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke"/>
  <path d="M267 417 C373 433 486 435 612 418 C736 401 829 402 933 421 L924 478 C816 463 714 463 610 477 C488 493 372 489 276 474Z" fill="var(--land-fill)" opacity=".82" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
  <path d="M276 476 C377 493 491 496 612 480 C726 465 818 465 924 480" fill="none" stroke="currentColor" stroke-width="2.5" vector-effect="non-scaling-stroke"/>
</g>
<g id="nt-detail" class="landmark-detail" fill="none" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke" opacity=".35">
  <path d="M278 268 L312 481 M336 279 L365 485 M396 284 L418 488 M457 282 L476 490 M520 279 L535 492 M583 277 L594 494 M649 279 L655 493 M719 282 L718 489 M790 286 L781 485 M861 292 L842 480 M932 298 L901 474 M1000 302 L960 462" opacity=".46"/>
  <path d="M270 306 C407 321 505 303 606 291 C730 276 826 283 944 309" opacity=".65"/>
  <path d="M283 326 C392 340 498 329 606 315 C730 299 835 302 937 326" opacity=".45"/>
  <path d="M297 430 L292 472 M326 434 L323 477 M355 437 L354 481 M384 438 L385 483 M414 440 L417 486 M445 440 L450 488 M477 438 L483 489 M509 434 L516 489 M542 430 L549 488 M576 425 L584 486 M610 420 L617 484 M645 416 L651 480 M680 413 L684 477 M715 411 L717 475 M750 411 L749 474 M785 412 L782 474 M820 414 L815 475 M855 417 L848 477 M888 420 L880 478 M917 424 L909 479" opacity=".68"/>
  <ellipse cx="307" cy="363" rx="13" ry="8" fill="var(--land-glass)" opacity=".82" stroke-width="1.5"/>
  <ellipse cx="360" cy="369" rx="13" ry="8" fill="var(--land-glass)" opacity=".82" stroke-width="1.5"/>
  <ellipse cx="416" cy="370" rx="13" ry="8" fill="var(--land-glass)" opacity=".82" stroke-width="1.5"/>
  <ellipse cx="475" cy="366" rx="13" ry="8" fill="var(--land-glass)" opacity=".82" stroke-width="1.5"/>
  <ellipse cx="537" cy="360" rx="13" ry="8" fill="var(--land-glass)" opacity=".82" stroke-width="1.5"/>
  <ellipse cx="600" cy="353" rx="13" ry="8" fill="var(--land-glass)" opacity=".82" stroke-width="1.5"/>
  <ellipse cx="664" cy="351" rx="13" ry="8" fill="var(--land-glass)" opacity=".82" stroke-width="1.5"/>
  <ellipse cx="729" cy="353" rx="13" ry="8" fill="var(--land-glass)" opacity=".82" stroke-width="1.5"/>
  <ellipse cx="793" cy="359" rx="13" ry="8" fill="var(--land-glass)" opacity=".82" stroke-width="1.5"/>
  <ellipse cx="855" cy="367" rx="13" ry="8" fill="var(--land-glass)" opacity=".82" stroke-width="1.5"/>
  <ellipse cx="911" cy="375" rx="13" ry="8" fill="var(--land-glass)" opacity=".82" stroke-width="1.5"/>
  <path d="M287 437 L289 475 M337 443 L339 480 M391 445 L393 483 M447 445 L449 486 M505 440 L507 487 M565 433 L567 486 M625 426 L627 483 M685 419 L687 478 M745 416 L743 476 M804 417 L801 476 M862 421 L858 477 M911 428 L907 478" opacity=".6"/>
</g>
<g id="nt-accent" class="landmark-accent" fill="var(--land-accent)" stroke="var(--land-accent)" stroke-width="1" vector-effect="non-scaling-stroke" opacity=".35">
  <path d="M347 225 L359 222 L360 233 L348 236Z M433 211 L446 209 L447 219 L434 222Z M534 202 L547 201 L548 211 L535 212Z M638 202 L651 203 L650 213 L637 212Z M742 206 L755 208 L753 218 L740 216Z M844 216 L857 219 L854 229 L841 226Z M935 232 L947 236 L943 245 L931 241Z" opacity=".65"/>
  <path d="M203 528 L228 524 M976 526 L1001 530 M311 567 L333 570 M865 566 L889 562" fill="none" opacity=".78"/>
</g>`;

const BRIDGE_GRAPHIC = String.raw`<title id="lb-title">Lekki–Ikoyi Link Bridge</title>
<desc id="lb-desc">A three-quarter elevated drawing of the cable-stayed Lekki–Ikoyi Link Bridge, with its tall crossed X pylon, evenly fanned stays, curved deck, slender piers and lagoon.</desc>
<g id="lb-ground" class="landmark-ground" opacity=".35">
  <path d="M0 486 C211 468 354 474 510 461 C735 442 961 445 1200 420" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".54" vector-effect="non-scaling-stroke"/>
  <path d="M44 527 L431 450 M641 489 L1164 381" fill="none" stroke="currentColor" stroke-width="1" opacity=".4" vector-effect="non-scaling-stroke"/>
  <path d="M22 507 L168 493 M198 501 L318 487 M917 461 L1065 447 M1084 439 L1181 431" fill="none" stroke="currentColor" stroke-width="1" opacity=".55" vector-effect="non-scaling-stroke"/>
  <path d="M0 552 C217 528 381 534 542 518 C792 491 1006 498 1200 473" fill="none" stroke="currentColor" stroke-width="1" opacity=".3" vector-effect="non-scaling-stroke"/>
  <path d="M92 467 C276 469 410 444 553 431 C754 413 963 389 1110 357" fill="none" stroke="currentColor" stroke-width="1" opacity=".34" vector-effect="non-scaling-stroke"/>
</g>
<g id="lb-structure" class="landmark-structure" opacity=".35">
  <path d="M564 72 L583 73 L625 270 L507 427 L486 424 L603 270Z M629 73 L649 72 L615 270 L718 402 L698 411 L594 270Z" fill="var(--land-fill)" opacity=".9" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M486 424 L507 427 L500 444 L477 443Z M698 411 L718 402 L729 419 L707 428Z" fill="var(--land-fill)" opacity=".9" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke"/>
  <path d="M565 80 L591 165 L607 265 M645 80 L621 165 L601 265" fill="none" stroke="var(--land-fill)" stroke-width="5" vector-effect="non-scaling-stroke"/>
  <path d="M80 437 C227 434 354 414 501 400 C708 380 918 356 1118 322 L1125 340 C924 379 714 402 505 423 C345 440 211 460 84 460Z" fill="var(--land-fill)" opacity=".9" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M85 460 C211 462 348 443 506 426 C719 405 926 382 1125 344 L1121 357 C920 395 715 417 507 439 C341 456 211 477 91 476Z" fill="var(--land-glass)" opacity=".55" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke"/>
  <path d="M270 424 L287 423 L280 484 L263 485Z M853 365 L867 362 L864 424 L850 427Z M1041 337 L1054 334 L1052 395 L1038 398Z" fill="var(--land-fill)" opacity=".78" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke"/>
  <path d="M250 485 L296 484 M842 427 L871 424 M1031 398 L1059 395" fill="none" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
  <path d="M583 395 L615 391 L630 419 L569 426Z" fill="var(--land-fill)" opacity=".82" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke"/>
  <path d="M562 421 L638 412" fill="none" stroke="currentColor" stroke-width="1" opacity=".7" vector-effect="non-scaling-stroke"/>
  <path d="M565 94 L556 94 M650 94 L641 94" fill="none" stroke="currentColor" stroke-width="2.5" vector-effect="non-scaling-stroke"/>
  <path d="M91 438 C237 435 367 416 507 402 C713 382 918 359 1118 326" fill="none" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke"/>
</g>
<g id="lb-detail" class="landmark-detail" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" opacity=".35">
  <path d="M556 96 L124 434 M556 96 L158 433 M556 96 L192 430 M556 96 L226 427 M556 96 L260 424 M556 96 L294 421 M556 96 L328 418 M556 96 L362 415 M556 96 L396 412 M556 96 L430 408 M556 96 L464 405 M556 96 L498 402 M556 96 L532 398 M556 96 L566 395" stroke-width="1.1" opacity=".76"/>
  <path d="M647 96 L626 390 M647 96 L660 384 M647 96 L694 378 M647 96 L728 372 M647 96 L762 366 M647 96 L796 360 M647 96 L830 354 M647 96 L864 348 M647 96 L898 342 M647 96 L932 336 M647 96 L966 330 M647 96 L1000 324 M647 96 L1034 318 M647 96 L1068 312 M647 96 L1102 306" stroke-width="1.1" opacity=".72"/>
  <path d="M550 112 L141 434 M650 112 L648 386 M571 191 L207 428 M630 191 L784 362" stroke-width="1" opacity=".28"/>
  <path d="M111 450 C242 450 365 431 506 414 C719 389 923 365 1122 336" stroke-width="2" opacity=".75"/>
  <path d="M90 464 C225 465 354 447 507 431 C719 410 924 387 1124 351" stroke-width="1" opacity=".7"/>
  <path d="M180 448 L193 447 M222 445 L236 444 M314 434 L328 432 M382 425 L397 423 M690 400 L704 398 M749 393 L763 391 M921 372 L936 369 M1004 356 L1018 354" stroke-width="1.2" opacity=".62"/>
</g>
<g id="lb-accent" class="landmark-accent" fill="none" stroke="var(--land-accent)" stroke-width="1.5" vector-effect="non-scaling-stroke" opacity=".35">
  <path d="M575 83 L590 170 M638 83 L622 170" opacity=".72"/>
  <path d="M604 273 L502 420 M605 273 L704 397" opacity=".6"/>
  <path d="M170 516 L224 510 M968 486 L1033 478" opacity=".62"/>
</g>`;

export function NationalTheatre() {
  return (
    <svg
      className="landmark-art landmark-art--theatre"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby="nt-title nt-desc"
      dangerouslySetInnerHTML={{ __html: THEATRE_GRAPHIC }}
    />
  );
}

export function LekkiIkoyiBridge() {
  return (
    <svg
      className="landmark-art landmark-art--bridge"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby="lb-title lb-desc"
      dangerouslySetInnerHTML={{ __html: BRIDGE_GRAPHIC }}
    />
  );
}

export const LANDMARK_STYLE: CSSProperties = {
  '--land-fill': 'var(--lace-paper)',
  '--land-glass': 'var(--lace-green-deep)',
  '--land-accent': 'var(--lace-green)',
} as CSSProperties;
