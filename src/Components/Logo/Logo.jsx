import React from 'react'

const Logo = ({
  size = 40,
  className = '',
  showText = false,
  theme = 'light',
  colors = {
    primary: '#ff6b35',
    secondary: '#f7931e',
    accent: '#ffb627',
    text: '#2c1810',
    border: '#ff6b35'
  }
}) => {
  const { primary, secondary, accent, text, border } = colors
  const gradientId = `logo-gradient-${primary.replace('#', '')}-${secondary.replace('#', '')}`
  const gradientDef = (
    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor={primary} />
      <stop offset="50%" stopColor={secondary} />
      <stop offset="100%" stopColor={accent} />
    </linearGradient>
  )

  return (
    <div
      className={`logo-container ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
    >
      <svg
        key={theme}
        width={size}
        height={size}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>{gradientDef}</defs>

        {/* Background circle */}
        <circle
          cx="16"
          cy="16"
          r="15"
          fill={`url(#${gradientId})`}
          stroke={border}
          strokeWidth="1"
        />

        {/* J letter (corrected direction) */}
        <path
          d="M18 8 L18 18 Q18 22 14 22 Q10 22 10 18 L10 16"
          fill="none"
          stroke={text}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* H letter */}
        <path
          d="M22 8 L22 24 M22 16 L26 16 M26 8 L26 24"
          fill="none"
          stroke={text}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Subtle glow effect */}
        <circle
          cx="16"
          cy="16"
          r="15"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="0.6"
          opacity="0.7"
        />
      </svg>

      {showText && (
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: `${size * 0.4}px`,
            color: 'var(--text-color)'
          }}
        >
          Jan Horak
        </span>
      )}
    </div>
  )
}

export default Logo
