import React from 'react';

/**
 * ModularFusionLogo
 * Replicates the custom modular geometric block letterform from Grace reference (Image 10)
 * Letters are solid black modular block shapes with an internal white dot-matrix pattern.
 */
export default function ModularFusionLogo({ className = '', scale = 1 }) {
  return (
    <div 
      className={`v6-modular-logo-container ${className}`} 
      style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
    >
      <svg
        viewBox="0 0 540 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="v6-modular-svg"
        style={{ width: 'clamp(280px, 38vw, 560px)', height: 'auto', display: 'block' }}
      >
        <defs>
          {/* Subtle Dot Grid Pattern matching reference Image 10 */}
          <pattern
            id="v6DotMatrixPattern"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="8" cy="8" r="1.4" fill="#ffffff" opacity="0.55" />
          </pattern>

          {/* Mask that defines the exact modular letter shapes */}
          <mask id="v6LettersShapeMask">
            <rect width="540" height="160" fill="#000000" />
            <g fill="#ffffff">
              {/* letter 'f' */}
              <rect x="36" y="26" width="26" height="110" rx="13" />
              <path d="M 49 26 C 49 12, 62 0, 76 0 L 86 0 C 93 0, 98 5, 98 12 C 98 19, 93 24, 86 24 L 76 24 C 69 24, 63 30, 63 37 L 63 56" />
              <rect x="18" y="46" width="60" height="24" rx="12" />

              {/* letter 'u' */}
              <path d="M 116 48 L 116 106 C 116 125, 131 140, 150 140 L 160 140 C 179 140, 194 125, 194 106 L 194 48 C 194 41, 189 36, 182 36 C 175 36, 170 41, 170 48 L 170 106 C 170 112, 165 116, 160 116 L 150 116 C 145 116, 140 112, 140 106 L 140 48 C 140 41, 135 36, 128 36 C 121 36, 116 41, 116 48 Z" />

              {/* letter 's' */}
              <path d="M 224 48 C 224 41, 229 36, 236 36 L 272 36 C 279 36, 284 41, 284 48 C 284 55, 279 60, 272 60 L 246 60 C 242 60, 238 64, 238 68 L 238 72 C 238 76, 242 80, 246 80 L 272 80 C 285 80, 296 91, 296 104 L 296 114 C 296 128, 285 140, 272 140 L 236 140 C 229 140, 224 135, 224 128 C 224 121, 229 116, 236 116 L 272 116 C 276 116, 280 112, 280 108 L 280 104 C 280 100, 276 96, 272 96 L 246 96 C 233 96, 224 85, 224 72 Z" />

              {/* letter 'i' (Square dot + rounded stem matching Grace Image 10) */}
              <rect x="314" y="10" width="26" height="26" rx="8" />
              <rect x="314" y="48" width="26" height="88" rx="13" />

              {/* letter 'o' (Rounded rectangle with hollow center) */}
              <rect x="358" y="44" width="66" height="94" rx="20" />
            </g>
            {/* Hollow cutout for 'o' */}
            <rect x="381" y="67" width="20" height="48" rx="10" fill="#000000" />
            
            <g fill="#ffffff">
              {/* letter 'n' */}
              <path d="M 442 48 L 442 136 C 442 143, 447 148, 454 148 C 461 148, 466 143, 466 136 L 466 82 C 466 74, 472 68, 480 68 L 488 68 C 496 68, 502 74, 502 82 L 502 136 C 502 143, 507 148, 514 148 C 521 148, 526 143, 526 136 L 526 82 C 526 62, 512 46, 492 46 L 476 46 C 463 46, 452 53, 446 63 L 446 48 C 446 41, 441 36, 434 36 C 427 36, 422 41, 422 48 Z" />
            </g>
          </mask>
        </defs>

        {/* 1. Solid Black Base Fill clipped to Letter Shapes */}
        <rect
          width="540"
          height="160"
          fill="#0a0a0a"
          mask="url(#v6LettersShapeMask)"
        />

        {/* 2. White Dot-Matrix Pattern overlay clipped inside Letter Shapes */}
        <rect
          width="540"
          height="160"
          fill="url(#v6DotMatrixPattern)"
          mask="url(#v6LettersShapeMask)"
        />

        {/* 3. Atelier Signature Red Dot at baseline */}
        <circle cx="532" cy="128" r="10" fill="#e50914" />
      </svg>
    </div>
  );
}

