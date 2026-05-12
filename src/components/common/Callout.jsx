import { Lightbulb, BookOpen, ArrowRight, AlertTriangle, Info } from 'lucide-react';

const styles = {
  insight: {
    wrapper: 'bg-gradient-to-br from-spark-5 to-white border-l-[3px] border-spark-100',
    iconBg: 'bg-spark-100/10',
    icon: <Lightbulb size={18} className="text-spark-140" />,
    heading: 'Key Insight',
    headingColor: 'text-spark-140',
  },
  'key-concept': {
    wrapper: 'bg-gradient-to-br from-blue-5 to-white border-l-[3px] border-blue-100',
    iconBg: 'bg-blue-100/10',
    icon: <BookOpen size={18} className="text-blue-100" />,
    heading: 'Key Concept',
    headingColor: 'text-blue-130',
  },
  next: {
    wrapper: 'bg-gradient-to-br from-green-5 to-white border-l-[3px] border-green-100',
    iconBg: 'bg-green-100/10',
    icon: <ArrowRight size={18} className="text-green-100" />,
    heading: 'Up Next',
    headingColor: 'text-green-130',
  },
  warning: {
    wrapper: 'bg-gradient-to-br from-spark-5 to-white border-l-[3px] border-spark-140',
    iconBg: 'bg-spark-140/10',
    icon: <AlertTriangle size={18} className="text-spark-140" />,
    heading: 'Important',
    headingColor: 'text-spark-140',
  },
  info: {
    wrapper: 'bg-gradient-to-br from-cyan-5 to-white border-l-[3px] border-cyan-100',
    iconBg: 'bg-cyan-100/10',
    icon: <Info size={18} className="text-cyan-100" />,
    heading: 'Note',
    headingColor: 'text-cyan-100',
  },
};

export default function Callout({ variant = 'info', children }) {
  const s = styles[variant] || styles.info;

  return (
    <div className={`rounded-2xl p-5 my-6 ${s.wrapper}`} role="note">
      <div className="flex items-start gap-3.5">
        <span className={`mt-0.5 shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${s.iconBg}`}>
          {s.icon}
        </span>
        <div className="min-w-0">
          <p className={`font-semibold text-[13px] tracking-tight mb-1 ${s.headingColor}`}>
            {s.heading}
          </p>
          <div className="text-[15px] text-gray-130 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
