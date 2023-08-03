import { InputHTMLAttributes } from 'react';
import { FormInputLabel, Group, Input } from './form-input.styles';

type FormInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          $shrink={Boolean((otherProps as Record<string, unknown>).value)}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
