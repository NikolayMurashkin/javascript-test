import { InputHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    control: Control;
    name: string;
}

export const Input = (props: InputProps) => {
    const { control, name, ...inputProps } = props;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <input {...field} value={field.value || ''} {...inputProps} />
            )}
        />
    );
};
