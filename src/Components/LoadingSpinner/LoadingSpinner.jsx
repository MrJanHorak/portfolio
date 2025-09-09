import React from 'react'

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        fontSize: '1.2rem',
        color: 'var(--text-secondary)'
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '4px solid var(--primary-color)',
          borderTop: '4px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginRight: '1rem'
        }}
      ></div>
      Loading amazing content...
    </div>
  )
}

export default LoadingSpinner
