import { useState } from 'react';
import { motion } from 'framer-motion';
import { PenTool, CheckSquare, Award, Sparkles } from 'lucide-react';
import Button from '../common/Button';

export default function ExerciseRenderer({ exercise, onComplete }) {
  if (exercise.type === 'structured-template') {
    return <StructuredTemplate exercise={exercise} onComplete={onComplete} />;
  }
  if (exercise.type === 'self-assess') {
    return <SelfAssess exercise={exercise} onComplete={onComplete} />;
  }
  return null;
}

function StructuredTemplate({ exercise, onComplete }) {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const allFilled = exercise.fields.every((f) => values[f.id]?.trim());

  function handleSubmit() {
    setSubmitted(true);
    onComplete?.({
      exerciseId: exercise.id,
      type: 'structured-template',
      values,
      xp: exercise.xpReward,
    });
  }

  return (
    <div className="surface-card p-7 my-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-2xl bg-blue-5 flex items-center justify-center">
          <PenTool size={20} className="text-blue-100" />
        </div>
        <div>
          <h4 className="text-title text-[16px] text-gray-160">{exercise.title}</h4>
          <p className="text-[13px] text-gray-50">+{exercise.xpReward} XP</p>
        </div>
      </div>

      <p className="text-[15px] text-gray-100 mb-6 leading-relaxed">{exercise.instructions}</p>

      <div className="space-y-5">
        {exercise.fields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={`field-${field.id}`}
              className="block text-[14px] font-medium text-gray-130 mb-2 tracking-tight"
            >
              {field.label}
            </label>
            <textarea
              id={`field-${field.id}`}
              placeholder={field.placeholder}
              value={values[field.id] || ''}
              onChange={(e) => setValues((v) => ({ ...v, [field.id]: e.target.value }))}
              disabled={submitted}
              rows={3}
              className="w-full rounded-2xl border-0 bg-gray-5 px-4 py-3.5 text-[15px] text-gray-160 placeholder:text-gray-50/60 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none disabled:opacity-60 transition-all duration-200 resize-y min-h-[52px]"
            />
          </div>
        ))}
      </div>

      {!submitted ? (
        <div className="mt-6">
          <Button onClick={handleSubmit} disabled={!allFilled} size="md">
            Submit Response
          </Button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="mt-6 p-5 bg-gradient-to-br from-green-5 to-white rounded-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-spark-100/10 flex items-center justify-center">
              <Sparkles size={20} className="text-spark-100" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-gray-160">
                +{exercise.xpReward} XP earned!
              </p>
              <p className="text-[13px] text-gray-100 mt-0.5">Great work on this exercise.</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function SelfAssess({ exercise, onComplete }) {
  const [checked, setChecked] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const allChecked = exercise.rubric.every((r) => checked[r.id]);

  function toggleItem(id) {
    if (submitted) return;
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function handleSubmit() {
    setSubmitted(true);
    const checkedCount = Object.values(checked).filter(Boolean).length;
    onComplete?.({
      exerciseId: exercise.id,
      type: 'self-assess',
      checkedCount,
      totalItems: exercise.rubric.length,
      xp: exercise.xpReward,
    });
  }

  return (
    <div className="surface-card p-7 my-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-2xl bg-spark-5 flex items-center justify-center">
          <CheckSquare size={20} className="text-spark-140" />
        </div>
        <div>
          <h4 className="text-title text-[16px] text-gray-160">{exercise.title}</h4>
          <p className="text-[13px] text-gray-50">+{exercise.xpReward} XP</p>
        </div>
      </div>

      <p className="text-[15px] text-gray-100 mb-6 leading-relaxed">{exercise.instructions}</p>

      <div className="space-y-2">
        {exercise.rubric.map((item) => (
          <motion.label
            key={item.id}
            whileHover={!submitted ? { scale: 1.01 } : {}}
            whileTap={!submitted ? { scale: 0.99 } : {}}
            className={`flex items-start gap-3.5 p-4 rounded-2xl cursor-pointer transition-all duration-200 min-h-[48px] ${
              checked[item.id]
                ? 'bg-green-5 shadow-[0_0_0_1px_rgba(42,135,3,0.2)]'
                : 'bg-gray-5/60 hover:bg-gray-5'
            } ${submitted ? 'cursor-default' : ''}`}
          >
            <input
              type="checkbox"
              checked={checked[item.id] || false}
              onChange={() => toggleItem(item.id)}
              disabled={submitted}
              className="mt-0.5 accent-green-100 min-w-[18px] min-h-[18px] rounded"
            />
            <span className="text-[15px] text-gray-130 leading-relaxed">{item.label}</span>
          </motion.label>
        ))}
      </div>

      {!submitted ? (
        <div className="mt-6">
          <Button onClick={handleSubmit} disabled={!allChecked} size="md">
            Complete Self-Assessment
          </Button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="mt-6 p-5 bg-gradient-to-br from-green-5 to-white rounded-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-spark-100/10 flex items-center justify-center">
              <Award size={20} className="text-spark-100" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-gray-160">
                +{exercise.xpReward} XP earned!
              </p>
              <p className="text-[13px] text-gray-100 mt-0.5">
                Reflective practice is powerful.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
