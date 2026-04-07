import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      onClick={onToggle}
      className="fixed top-6 right-6 z-[100] w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-500"
      style={{
        background: isDark
          ? 'rgba(255,255,255,0.05)'
          : 'rgba(0,0,0,0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isDark
          ? '1px solid rgba(255,255,255,0.1)'
          : '1px solid rgba(0,0,0,0.1)',
        boxShadow: isDark
          ? '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
          : '0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: isDark
          ? '0 0 30px rgba(10,111,190,0.3), 0 4px 24px rgba(0,0,0,0.3)'
          : '0 0 30px rgba(251,191,36,0.3), 0 4px 24px rgba(0,0,0,0.1)',
      }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Sun
              size={20}
              className="text-amber-400"
              style={{ filter: 'drop-shadow(0 0 8px rgba(251,191,36,0.5))' }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Moon
              size={20}
              className="text-[#0A6FBE]"
              style={{ filter: 'drop-shadow(0 0 8px rgba(10,111,190,0.5))' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
