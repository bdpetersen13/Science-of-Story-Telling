import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CourseProvider, useCourse } from './store/CourseContext';
import { useTheme } from './store/useTheme';
import ErrorBoundary from './components/common/ErrorBoundary';
import Onboarding from './components/layout/Onboarding';
import Header from './components/layout/Header';
import Dashboard from './components/layout/Dashboard';
import ChapterPage from './components/chapter/ChapterPage';
import BossAssessmentPage from './components/chapter/BossAssessmentPage';
import ReviewPage from './components/review/ReviewPage';
import ProgressPage from './components/progress/ProgressPage';
import SettingsPage from './components/settings/SettingsPage';
import AnalyticsPage from './components/analytics/AnalyticsPage';
import CertificatePage from './components/certificate/CertificatePage';

function AppRoutes() {
  const { isOnboarded } = useCourse();
  
  // Initialize theme on mount (applies .dark class to html)
  useTheme();

  if (!isOnboarded) return <Onboarding />;

  return (
    <div className="min-h-screen bg-surface-page">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chapter/:chapterId" element={<ChapterPage />} />
          <Route path="/boss/:bossId" element={<BossAssessmentPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CourseProvider>
          <AppRoutes />
        </CourseProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
