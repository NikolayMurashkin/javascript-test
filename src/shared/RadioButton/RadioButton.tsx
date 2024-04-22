import { Control, Controller } from 'react-hook-form';

interface RadioButtonProps {
    control: Control;
    name: string;
    label?: string;
    value: string;
}

export const RadioButton = (props: RadioButtonProps) => {
    const { control, name, value, label, ...radioProps } = props;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <label>
                    <input
                        type='radio'
                        value={value}
                        checked={field.value === value}
                        onChange={(e) => {
                            field.onChange(e);
                        }}
                        {...radioProps}
                    />
                    {label ? <span>{label}</span> : null}
                </label>
            )}
        />
    );
};
