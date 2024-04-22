import { Checkbox, Input, RadioButton } from '@/shared';
import { AnswerType } from '@/shared/types/test';
import { Control } from 'react-hook-form';

interface AnswersProps {
    type: AnswerType;
    name: string;
    answers: string[];
    control: Control;
}
export const Answers = (props: AnswersProps) => {
    const { type, name, control, answers } = props;
    switch (type) {
        case 'input':
            return <Input control={control} name={name} />;
        case 'multiple':
            return answers.map((answer) => (
                <Checkbox
                    key={answer}
                    control={control}
                    name={answer}
                    label={answer}
                />
            ));
        default:
            return answers.map((answer) => (
                <RadioButton
                    key={answer}
                    control={control}
                    name={answer}
                    label={answer}
                    value={answer}
                />
            ));
    }
};
