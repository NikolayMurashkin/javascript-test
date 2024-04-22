export type AnswerType = 'multiple' | 'single' | 'input';

export type StepStatus = 'active' | 'completed' | 'inactive';

export type Questions = {
    question: string;
    answers?: string[];
    type: AnswerType;
}

