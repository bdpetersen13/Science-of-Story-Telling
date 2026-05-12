import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div className="my-8">
      <div className="flex bg-gray-5/80 rounded-2xl p-1 gap-1" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            aria-controls={`tabpanel-${i}`}
            className={`relative flex-1 px-4 py-2.5 text-[14px] font-medium rounded-xl transition-colors min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-100 ${
              active === i
                ? 'text-gray-160'
                : 'text-gray-50 hover:text-gray-100'
            }`}
            onClick={() => setActive(i)}
          >
            {active === i && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        id={`tabpanel-${active}`}
        role="tabpanel"
        className="p-5 text-[15px] text-gray-130 leading-relaxed"
      >
        {tabs[active].content}
      </motion.div>
    </div>
  );
}
