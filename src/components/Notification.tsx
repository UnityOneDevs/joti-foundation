import { useEffect, useState } from 'react'

interface NotificationProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
  duration?: number
}

export default function Notification({
  message,
  type,
  onClose,
  duration = 5000,
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300) // Allow fade out animation
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <>
      <style jsx>{`
        .notification {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 10000;
          padding: 16px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          max-width: 400px;
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          font-family: 'Open Sans', sans-serif;
        }

        .notification.show {
          transform: translateX(0);
        }

        .notification.success {
          background: #10b981;
          color: white;
          border-left: 4px solid #059669;
        }

        .notification.error {
          background: #ef4444;
          color: white;
          border-left: 4px solid #dc2626;
        }

        .notification-content {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .notification-icon {
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .notification-message {
          flex: 1;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 500;
        }

        .notification-close {
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          padding: 0;
          margin-left: 8px;
          opacity: 0.8;
          transition: opacity 0.2s;
        }

        .notification-close:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .notification {
            right: 10px;
            left: 10px;
            max-width: none;
            top: 10px;
          }
        }
      `}</style>

      <div className={`notification ${type} ${isVisible ? 'show' : ''}`}>
        <div className='notification-content'>
          <div className='notification-icon'>
            {type === 'success' ? '✅' : '❌'}
          </div>
          <div className='notification-message'>{message}</div>
          <button
            className='notification-close'
            onClick={handleClose}
            aria-label='Close notification'
          >
            ×
          </button>
        </div>
      </div>
    </>
  )
}
