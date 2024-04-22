import { Button } from '@/shared';
import { Questions } from '@/shared/types';
import { Step } from './Step/Step';
import { useFormContext } from 'react-hook-form';
import { Answers } from './Answers/Answers';

interface TestProps {
    name: string;
    questions: Questions[];
}

export const Test = (props: TestProps) => {
    const { name, questions } = props;

    const { control } = useFormContext();

    return (
        <>
            <div>
                <h1>{name}</h1>
                <div>timer</div>
            </div>
            <div>
                {questions.map((question) => (
                    <Step status='active' key={question.question} />
                ))}
            </div>
            {questions.map(({ answers, question, type }) => (
                <div key={question}>
                    <div>{question}</div>
                    <Answers
                        answers={answers}
                        type={type}
                        name={question}
                        control={control}
                    />
                </div>
            ))}
            <Button>Ответить</Button>
        </>
    );
};
