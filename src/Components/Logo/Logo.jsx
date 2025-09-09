import React from 'react'

const Logo = ({
  size = 40,
  className = '',
  showText = false,
  theme = 'light'
}) => {
  const colors = {
    light: {
      gradient: 'url(#warmGradientLight)',
      text: '#fef7f0',
      border: '#fef7f0'
    },
    dark: {
      gradient: 'url(#warmGradientDark)',
      text: '#2c1810',
      border: '#2c1810'
    }
  }

  const currentColors = colors[theme]

  return (
    <div
      className={`logo-container ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="warmGradientLight"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: '#ff6b35', stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: '#f7931e', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#ffb627', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="warmGradientDark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: '#ff6b35', stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: '#f7931e', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#ffb627', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          cx="16"
          cy="16"
          r="15"
          fill={currentColors.gradient}
          stroke={currentColors.border}
          strokeWidth="1"
        />

        {/* J letter (corrected direction) */}
        <path
          d="M18 8 L18 18 Q18 22 14 22 Q10 22 10 18 L10 16"
          fill="none"
          stroke={currentColors.text}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* H letter */}
        <path
          d="M22 8 L22 24 M22 16 L26 16 M26 8 L26 24"
          fill="none"
          stroke={currentColors.text}
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
          stroke={currentColors.gradient}
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
