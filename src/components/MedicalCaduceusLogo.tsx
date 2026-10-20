import React from 'react';

interface MedicalCaduceusLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withGlow?: boolean;
}

export const MedicalCaduceusLogo: React.FC<MedicalCaduceusLogoProps> = ({
  className = 'w-10 h-10',
  size = 'md',
  withGlow = true,
}) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {withGlow && (
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-teal-400/20 to-amber-400/25 rounded-full blur-md animate-pulse pointer-events-none" />
      )}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-sm"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="dnaGrad" x1="20" y1="10" x2="80" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>

          <linearGradient id="laurelGold" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="45%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>

          <linearGradient id="stethGrad" x1="30" y1="20" x2="70" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <linearGradient id="shieldGrad" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#022C22" />
          </linearGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Circular Shield Base */}
        <circle cx="50" cy="50" r="46" fill="url(#shieldGrad)" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.4" />
        <circle cx="50" cy="50" r="42" stroke="url(#laurelGold)" strokeWidth="0.8" strokeDasharray="3 2" strokeOpacity="0.6" />

        {/* Subtle Golden Laurel Wings Left */}
        <g stroke="url(#laurelGold)" strokeWidth="1.2" strokeLinecap="round" opacity="0.85">
          {/* Left Laurel Leaves */}
          <path d="M 22 48 C 18 42, 18 36, 24 32 C 24 38, 23 44, 22 48 Z" fill="url(#laurelGold)" fillOpacity="0.25" />
          <path d="M 20 60 C 15 54, 16 48, 22 45 C 23 51, 21 57, 20 60 Z" fill="url(#laurelGold)" fillOpacity="0.25" />
          <path d="M 24 72 C 18 68, 18 60, 23 58 C 25 64, 24 69, 24 72 Z" fill="url(#laurelGold)" fillOpacity="0.25" />
          <path d="M 32 82 C 26 80, 23 74, 28 70 C 31 75, 32 79, 32 82 Z" fill="url(#laurelGold)" fillOpacity="0.25" />
          
          {/* Right Laurel Leaves */}
          <path d="M 78 48 C 82 42, 82 36, 76 32 C 76 38, 77 44, 78 48 Z" fill="url(#laurelGold)" fillOpacity="0.25" />
          <path d="M 80 60 C 85 54, 84 48, 78 45 C 77 51, 79 57, 80 60 Z" fill="url(#laurelGold)" fillOpacity="0.25" />
          <path d="M 76 72 C 82 68, 82 60, 77 58 C 75 64, 76 69, 76 72 Z" fill="url(#laurelGold)" fillOpacity="0.25" />
          <path d="M 68 82 C 74 80, 77 74, 72 70 C 69 75, 68 79, 68 82 Z" fill="url(#laurelGold)" fillOpacity="0.25" />
        </g>

        {/* Central DNA Double-Helix Spiral Spine */}
        <g stroke="url(#dnaGrad)" strokeWidth="2" strokeLinecap="round" filter="url(#glowFilter)">
          {/* Strand 1 Sine Wave */}
          <path d="M 43 20 Q 57 28 43 36 Q 57 44 43 52 Q 57 60 43 68 Q 57 76 43 84" fill="none" strokeWidth="2.2" />
          {/* Strand 2 Cosine Wave */}
          <path d="M 57 20 Q 43 28 57 36 Q 43 44 57 52 Q 43 60 57 68 Q 43 76 57 84" fill="none" strokeWidth="2.2" strokeOpacity="0.9" />

          {/* DNA Base Pair Rungs */}
          <line x1="45" y1="24" x2="55" y2="24" stroke="#FDE047" strokeWidth="1.6" opacity="0.9" />
          <line x1="43" y1="36" x2="57" y2="36" stroke="#06B6D4" strokeWidth="1.6" opacity="0.9" />
          <line x1="46" y1="48" x2="54" y2="48" stroke="#10B981" strokeWidth="1.6" opacity="0.9" />
          <line x1="43" y1="60" x2="57" y2="60" stroke="#FDE047" strokeWidth="1.6" opacity="0.9" />
          <line x1="46" y1="72" x2="54" y2="72" stroke="#06B6D4" strokeWidth="1.6" opacity="0.9" />
          <line x1="43" y1="84" x2="57" y2="84" stroke="#10B981" strokeWidth="1.6" opacity="0.9" />
        </g>

        {/* Intertwined Medical Stethoscope Loop */}
        <g stroke="url(#stethGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Left Earpiece & Binaural Tube */}
          <path d="M 36 15 C 38 18, 42 22, 47 24" />
          {/* Right Earpiece & Binaural Tube */}
          <path d="M 64 15 C 62 18, 58 22, 53 24" />
          {/* Eartips */}
          <circle cx="35" cy="15" r="1.8" fill="#38BDF8" />
          <circle cx="65" cy="15" r="1.8" fill="#38BDF8" />

          {/* Stethoscope Y-Junction Tubing looping down */}
          <path d="M 50 24 C 50 30, 34 38, 34 54 C 34 68, 46 76, 50 82" strokeWidth="2" />
          {/* Stethoscope Chestpiece / Diaphragm */}
          <circle cx="50" cy="84" r="5" fill="#0F172A" stroke="url(#laurelGold)" strokeWidth="2" />
          <circle cx="50" cy="84" r="2.2" fill="#10B981" />
        </g>

        {/* Apex Star / Golden Beacon of Excellence at Top */}
        <path
          d="M 50 8 L 52 13 L 57 14 L 53 17 L 54 22 L 50 19 L 46 22 L 47 17 L 43 14 L 48 13 Z"
          fill="url(#laurelGold)"
          filter="url(#glowFilter)"
        />
      </svg>
    </div>
  );
};
