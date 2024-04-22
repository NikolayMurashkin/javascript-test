import { Control, Controller } from 'react-hook-form';

interface CheckboxProps {
    control: Control;
    name: string;
    label?: string;
}

export const Checkbox = (props: CheckboxProps) => {
    const { control, name, label, ...checkboxProps } = props;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <label>
                    <input
                        type='checkbox'
                        checked={field.value}
                        {...field}
                        onChange={(e) => {
                            field.onChange(e);
                        }}
                        {...checkboxProps}
                    />
                    {label ? <span>{label}</span> : null}
                </label>
            )}
        />
    );
};
