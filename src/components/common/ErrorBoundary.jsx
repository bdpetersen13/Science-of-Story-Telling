import { Component } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Button from './Button';

/**
 * Error Boundary Component
 * Catches JavaScript errors in child component tree and displays fallback UI.
 * 
 * Usage:
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console (could send to error tracking service)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/dashboard';
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-surface-page flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="max-w-md w-full"
          >
            <div className="surface-card p-8 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-5 flex items-center justify-center"
              >
                <AlertTriangle size={32} className="text-red-100" />
              </motion.div>

              {/* Message */}
              <h1 className="text-headline text-2xl text-gray-160 mb-3">
                Oops! Something went wrong
              </h1>
              <p className="text-[15px] text-gray-100 mb-6 leading-relaxed">
                We encountered an unexpected error. Don't worry, your progress is saved.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={this.handleReload} variant="primary" size="md">
                  <RefreshCw size={16} />
                  Reload Page
                </Button>
                <Button onClick={this.handleGoHome} variant="secondary" size="md">
                  <Home size={16} />
                  Go to Dashboard
                </Button>
              </div>

              {/* Error details (dev mode) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-8 text-left">
                  <summary className="text-[13px] font-medium text-gray-50 cursor-pointer hover:text-gray-100 transition-colors">
                    Technical Details
                  </summary>
                  <div className="mt-4 p-4 bg-gray-5 rounded-xl overflow-auto max-h-48">
                    <pre className="text-[12px] text-red-130 font-mono whitespace-pre-wrap">
                      {this.state.error.toString()}
                    </pre>
                    {this.state.errorInfo && (
                      <pre className="text-[11px] text-gray-100 font-mono whitespace-pre-wrap mt-2">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                </details>
              )}
            </div>

            {/* Help text */}
            <p className="text-center text-[13px] text-gray-50 mt-4">
              If this keeps happening,{' '}
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                className="text-blue-100 hover:underline"
              >
                clear your data and start fresh
              </button>
              .
            </p>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Functional wrapper for specific sections
 * Usage: <SectionErrorBoundary fallback={<p>Error</p>}><Component /></SectionErrorBoundary>
 */
export function SectionErrorBoundary({ children, fallback }) {
  return (
    <ErrorBoundaryWrapper fallback={fallback}>
      {children}
    </ErrorBoundaryWrapper>
  );
}

class ErrorBoundaryWrapper extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Section error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-6 bg-red-5 rounded-2xl text-center">
          <p className="text-[15px] text-red-130">This section failed to load.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="text-[13px] text-blue-100 hover:underline mt-2"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
