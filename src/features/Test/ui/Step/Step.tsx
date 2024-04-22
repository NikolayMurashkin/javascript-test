import { StepStatus } from '@/shared/types/test';
import cn from 'classnames';
import styles from './Step.module.scss';
import { HTMLAttributes } from 'react';

interface StepProps extends HTMLAttributes<HTMLDivElement> {
    status: StepStatus;
}

export const Step = (props: StepProps) => {
    const { status, className, ...otherProps } = props;
    return (
        <div className={cn(className, styles[status])} {...otherProps}>
            Step
        </div>
    );
};
