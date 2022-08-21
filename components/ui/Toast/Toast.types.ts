export interface ToastProps {
  title: string,
  description: string
  variant?: 'danger' | 'warning' | 'info' | 'success',
  className?: string,
  onClose: () => void
}