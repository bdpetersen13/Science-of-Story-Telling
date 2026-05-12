/**
 * Certificate Page
 * Printable course completion certificate
 */

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Download, Printer, Award, Star, Lock } from 'lucide-react';
import { useCourse } from '../../store/CourseContext';
import { getOverallProgress, getPartProgress } from '../../store/progress';
import { getEarnedBadges, getLevelInfo } from '../../store/gamification';
import Button from '../common/Button';

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.1 } } },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  },
};

export default function CertificatePage() {
  const navigate = useNavigate();
  const { store } = useCourse();
  const certRef = useRef(null);
  
  const overall = getOverallProgress();
  const earnedBadges = getEarnedBadges();
  const levelInfo = getLevelInfo(store.gamification.level);
  
  // Check if all 4 boss assessments are complete
  const part1Complete = store.progress.parts[1]?.bossCompleted;
  const part2Complete = store.progress.parts[2]?.bossCompleted;
  const part3Complete = store.progress.parts[3]?.bossCompleted;
  const part4Complete = store.progress.parts[4]?.bossCompleted;
  const courseComplete = part1Complete && part2Complete && part3Complete && part4Complete;
  
  const userName = store.profile.name || 'Storyteller';
  const completionDate = part4Complete 
    ? new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : null;

  const handlePrint = () => {
    window.print();
  };

  if (!courseComplete) {
    return (
      <motion.div
        variants={stagger.container}
        initial="initial"
        animate="animate"
        className="max-w-2xl mx-auto px-6 py-8 pb-20"
      >
        <motion.div variants={stagger.item} className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 rounded-xl hover:bg-gray-10 transition-colors"
            aria-label="Back to dashboard"
          >
            <ChevronLeft size={24} className="text-gray-100" />
          </button>
          <div>
            <h1 className="text-headline text-[28px] text-gray-160">Certificate</h1>
            <p className="text-[15px] text-gray-100">Complete the course to unlock your certificate</p>
          </div>
        </motion.div>

        <motion.div variants={stagger.item} className="surface-card p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-10 flex items-center justify-center">
            <Lock size={40} className="text-gray-50" />
          </div>
          <h2 className="text-headline text-xl text-gray-160 mb-3">Certificate Locked</h2>
          <p className="text-[15px] text-gray-100 mb-6">
            Complete all 35 chapters and pass all 4 Boss Assessments to unlock your certificate.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <PartStatus part={1} complete={part1Complete} title="Creating a World" />
            <PartStatus part={2} complete={part2Complete} title="The Flawed Self" />
            <PartStatus part={3} complete={part3Complete} title="The Dramatic Question" />
            <PartStatus part={4} complete={part4Complete} title="Plot, Endings & Meaning" />
          </div>

          <p className="text-[13px] text-gray-50">
            Progress: {overall.completed}/{overall.total} chapters complete ({overall.percent}%)
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={stagger.container}
      initial="initial"
      animate="animate"
      className="max-w-4xl mx-auto px-6 py-8 pb-20"
    >
      {/* Header - hidden in print */}
      <motion.div variants={stagger.item} className="flex items-center justify-between mb-8 print:hidden">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 rounded-xl hover:bg-gray-10 transition-colors"
            aria-label="Back to dashboard"
          >
            <ChevronLeft size={24} className="text-gray-100" />
          </button>
          <div>
            <h1 className="text-headline text-[28px] text-gray-160">Your Certificate</h1>
            <p className="text-[15px] text-gray-100">Congratulations on completing the course!</p>
          </div>
        </div>
        <Button onClick={handlePrint}>
          <Printer size={18} className="mr-2" />
          Print Certificate
        </Button>
      </motion.div>

      {/* Certificate */}
      <motion.div
        variants={stagger.item}
        ref={certRef}
        className="certificate-container bg-white rounded-2xl shadow-xl overflow-hidden print:shadow-none print:rounded-none"
      >
        {/* Certificate Border */}
        <div className="border-8 border-double border-blue-100 m-2 print:m-0">
          <div className="p-8 md:p-12 text-center">
            {/* Header */}
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-140 flex items-center justify-center shadow-lg">
                  <Award size={32} className="text-white" />
                </div>
              </div>
              <p className="text-[12px] uppercase tracking-[0.3em] text-gray-100 mb-2">Certificate of Completion</p>
              <h2 className="text-[32px] md:text-[40px] font-bold text-gray-160 leading-tight">
                The Science of Storytelling
              </h2>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-spark-100" />
              <Star size={20} className="text-spark-100" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-spark-100" />
            </div>

            {/* Recipient */}
            <p className="text-[14px] text-gray-100 mb-2">This certifies that</p>
            <p className="text-[28px] md:text-[36px] font-serif font-bold text-blue-100 mb-2">
              {userName}
            </p>
            <p className="text-[14px] text-gray-100 mb-8">
              has successfully completed all requirements of the course
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
              <AchievementBadge icon="📚" value="35" label="Chapters" />
              <AchievementBadge icon="🏆" value="4" label="Boss Trials" />
              <AchievementBadge icon="🎖️" value={earnedBadges.length} label="Badges" />
            </div>

            {/* Parts Completed */}
            <div className="bg-gray-5 rounded-xl p-4 mb-8 max-w-lg mx-auto">
              <p className="text-[11px] uppercase tracking-wide text-gray-100 mb-3">Mastery Achieved In</p>
              <div className="grid grid-cols-2 gap-2 text-[12px] text-gray-160">
                <div>✓ Part 1: Creating a World</div>
                <div>✓ Part 2: The Flawed Self</div>
                <div>✓ Part 3: The Dramatic Question</div>
                <div>✓ Part 4: Plot, Endings & Meaning</div>
              </div>
            </div>

            {/* Level */}
            <p className="text-[14px] text-gray-100 mb-1">Final Level Achieved</p>
            <p className="text-[20px] font-bold text-spark-140 mb-8">
              Level {store.gamification.level}: {levelInfo.title}
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-32 bg-gray-30" />
            </div>

            {/* Date & Signature */}
            <div className="grid md:grid-cols-2 gap-8 max-w-md mx-auto">
              <div>
                <p className="text-[12px] text-gray-100 mb-1">Date of Completion</p>
                <p className="text-[14px] font-semibold text-gray-160 border-t border-gray-30 pt-2">
                  {completionDate}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-gray-100 mb-1">Certified By</p>
                <p className="text-[14px] font-semibold text-gray-160 border-t border-gray-30 pt-2">
                  The Science of Storytelling
                </p>
              </div>
            </div>

            {/* Footer */}
            <p className="text-[10px] text-gray-50 mt-8">
              Certificate ID: SST-{store.profile.createdAt?.slice(0, 10).replace(/-/g, '')}-{userName.slice(0, 3).toUpperCase()}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .certificate-container, .certificate-container * {
            visibility: visible;
          }
          .certificate-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

function PartStatus({ part, complete, title }) {
  return (
    <div className={`p-3 rounded-xl text-left ${
      complete ? 'bg-green-5' : 'bg-gray-5'
    }`}>
      <div className="flex items-center gap-2 mb-1">
        {complete ? (
          <span className="text-green-100">✓</span>
        ) : (
          <Lock size={14} className="text-gray-50" />
        )}
        <span className={`text-[12px] font-semibold ${
          complete ? 'text-green-100' : 'text-gray-50'
        }`}>
          Part {part}
        </span>
      </div>
      <p className={`text-[11px] ${
        complete ? 'text-green-100/80' : 'text-gray-50'
      }`}>
        {title}
      </p>
    </div>
  );
}

function AchievementBadge({ icon, value, label }) {
  return (
    <div className="text-center">
      <span className="text-2xl">{icon}</span>
      <p className="text-[20px] font-bold text-gray-160">{value}</p>
      <p className="text-[11px] text-gray-100">{label}</p>
    </div>
  );
}
