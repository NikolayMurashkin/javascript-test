import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Button = (props: ButtonProps) => {
    const { className, children, ...otherProps } = props;
    return (
        <button className={className} {...otherProps}>
            {children}
        </button>
    );
};
