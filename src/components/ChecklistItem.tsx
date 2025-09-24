import React, { useState } from 'react';
import { Check, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

interface Task {
  id: string;
  title: string;
  description: string;
  estimated_time: string;
  instructions: string[];
}

interface ChecklistItemProps {
  task: Task;
  isCompleted: boolean;
  onToggle: (taskId: string) => void;
}

export function ChecklistItem({ task, isCompleted, onToggle }: ChecklistItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className={`mb-3 transition-all duration-200 ${isCompleted ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Button
            size="sm"
            variant={isCompleted ? "default" : "outline"}
            className={`mt-1 min-w-[40px] h-10 ${
              isCompleted 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'border-2 hover:border-primary'
            }`}
            onClick={() => onToggle(task.id)}
          >
            {isCompleted && <Check className="h-4 w-4" />}
          </Button>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className={`font-medium ${isCompleted ? 'line-through text-green-700' : ''}`}>
                {task.title}
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {task.estimated_time}
                </div>
                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-1">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                  </CollapsibleTrigger>
                </Collapsible>
              </div>
            </div>
            
            <p className={`text-sm text-muted-foreground mt-1 ${isCompleted ? 'line-through' : ''}`}>
              {task.description}
            </p>
            
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleContent className="mt-3">
                <div className="bg-muted/50 rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-2">Instructions:</h4>
                  <ol className="list-decimal list-inside space-y-1">
                    {task.instructions.map((instruction, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {instruction}
                      </li>
                    ))}
                  </ol>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}