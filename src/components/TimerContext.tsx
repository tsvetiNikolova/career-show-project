import { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';

interface TimerContextType {
  seconds: number;
  isRunning: boolean;
  setIsRunning: (value: boolean) => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

interface TimerProviderProps {
  children: ReactNode;
}

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: number | null = null; 

    if (isRunning) {
      interval = window.setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } 

    return () => {
      if (interval !== null) clearInterval(interval);
    };
  }, [isRunning]);

  const value = {
    seconds,
    isRunning,
    setIsRunning,
  };

  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
};

// Custom hook to use the timer context
export const useTimer = () => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};