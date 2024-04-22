import { Test } from '@/features';
import { Button } from '@/shared';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TestPageForm } from '../model/types/test';
import { Questions } from '@/shared/types';

const TestPage = () => {
    const navigate = useNavigate();

    const onNavigateToHome = () => {
        navigate('/', {
            replace: true,
        });
    };

    const methods = useForm<TestPageForm>({
        mode: 'all',
    });

    const questions: Questions[] = [
        {
            question: 'Какой-то вопрос №1',
            answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
            type: 'multiple',
        },
        {
            question: 'Какой-то вопрос №2',
            answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
            type: 'single',
        },
        {
            question: 'Какой-то вопрос №3',
            answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
            type: 'single',
        },
        {
            question: 'Какой-то вопрос №4',
            answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
            type: 'multiple',
        },
        {
            question: 'Какой-то вопрос №5',
            answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
            type: 'single',
        },
        {
            question: 'Какой-то вопрос №6',
            type: 'input',
        },
    ];

    return (
        <section>
            <FormProvider {...methods}>
                <Button onClick={onNavigateToHome}>Вернуться назад</Button>
                <Test name='Тестирование' questions={questions} />
            </FormProvider>
        </section>
    );
};

export default TestPage;
