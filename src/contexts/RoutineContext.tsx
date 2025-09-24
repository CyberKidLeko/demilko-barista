import React, { createContext, useContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { routinesData } from '../data/routines';

interface Task {
  id: string;
  title: string;
  description: string;
  estimated_time: string;
  instructions: string[];
}

interface Routine {
  title: string;  
  description: string;
  tasks: Task[];
}

interface RoutineContextType {
  morningRoutine: Routine;
  closingRoutine: Routine;
  completedTasks: string[];
  toggleTask: (taskId: string) => void;
  resetTasks: () => void;
  isTaskCompleted: (taskId: string) => boolean;
  getCompletionPercentage: (routineType: 'morning' | 'closing') => number;
}

const RoutineContext = createContext<RoutineContextType | undefined>(undefined);

export function RoutineProvider({ children }: { children: ReactNode }) {
  const [completedTasks, setCompletedTasks] = useLocalStorage<string[]>('barista-completed-tasks', []);

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const resetTasks = () => {
    setCompletedTasks([]);
  };

  const isTaskCompleted = (taskId: string) => {
    return completedTasks.includes(taskId);
  };

  const getCompletionPercentage = (routineType: 'morning' | 'closing') => {
    const routine = routineType === 'morning' ? routinesData.morning : routinesData.closing;
    const totalTasks = routine.tasks.length;
    const completedCount = routine.tasks.filter(task => completedTasks.includes(task.id)).length;
    return Math.round((completedCount / totalTasks) * 100);
  };

  const value = {
    morningRoutine: routinesData.morning,
    closingRoutine: routinesData.closing,
    completedTasks,
    toggleTask,
    resetTasks,
    isTaskCompleted,
    getCompletionPercentage
  };

  return (
    <RoutineContext.Provider value={value}>
      {children}
    </RoutineContext.Provider>
  );
}

export function useRoutine() {
  const context = useContext(RoutineContext);
  if (context === undefined) {
    throw new Error('useRoutine must be used within a RoutineProvider');
  }
  return context;
}