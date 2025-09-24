import React from 'react';
import { Sun, RotateCcw, CheckCircle } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { ChecklistItem } from '../components/ChecklistItem';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { useRoutine } from '../contexts/RoutineContext';

interface MorningRoutineProps {
  onNavigate: (page: string) => void;
}

export function MorningRoutine({ onNavigate }: MorningRoutineProps) {
  const { 
    morningRoutine, 
    toggleTask, 
    resetTasks, 
    isTaskCompleted, 
    getCompletionPercentage 
  } = useRoutine();

  const progress = getCompletionPercentage('morning');
  const completedTasks = morningRoutine.tasks.filter(task => isTaskCompleted(task.id)).length;
  const totalTasks = morningRoutine.tasks.length;

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all morning tasks? This action cannot be undone.')) {
      resetTasks();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        title="Morning Routine"
        showBackButton
        onBack={() => onNavigate('home')}
        onHome={() => onNavigate('home')}
      />
      
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Header Card */}
        <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-amber-100 p-2 rounded-lg">
                <Sun className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <CardTitle className="text-xl">{morningRoutine.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {morningRoutine.description}
                </p>
              </div>
            </div>
            
            {/* Progress Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Progress: {completedTasks} of {totalTasks} tasks
                </span>
                <span className="text-sm text-muted-foreground">
                  {progress}%
                </span>
              </div>
              <Progress value={progress} className="h-2" />
              
              {progress === 100 && (
                <div className="flex items-center gap-2 text-green-700 bg-green-50 p-3 rounded-lg border border-green-200">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Morning routine complete! Great job! ☕</span>
                </div>
              )}
            </div>
          </CardHeader>
        </Card>

        {/* Reset Button */}
        <div className="flex justify-end">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleReset}
            className="flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reset All Tasks
          </Button>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {morningRoutine.tasks.map((task) => (
            <ChecklistItem
              key={task.id}
              task={task}
              isCompleted={isTaskCompleted(task.id)}
              onToggle={toggleTask}
            />
          ))}
        </div>

        {/* Footer */}
        <Card className="bg-white">
          <CardContent className="p-4">
            <div className="text-center text-sm text-muted-foreground">
              <p>Complete all tasks to ensure a smooth opening.</p>
              <p className="mt-1">Tasks are automatically saved as you check them off.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}