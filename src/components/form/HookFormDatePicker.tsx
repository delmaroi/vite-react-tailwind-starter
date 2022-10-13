import React, { forwardRef, useState } from 'react';
// material
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
// components
import { Controller } from 'react-hook-form';
import { BaseTextFieldProps } from '@mui/material/TextField/TextField';

interface HookFormDatePickerProps {
  control: any;
  name: BaseTextFieldProps['name'];
  error: BaseTextFieldProps['error'];
  label: BaseTextFieldProps['label'];
  helperText?: string;
  [key: string]: any; // for dynamically generated query object
}

const HookFormDatePicker = forwardRef<HTMLDivElement, HookFormDatePickerProps>((props, ref) => {
  const { control, name, label, helperText, error, ...otherDateTimePickerProps } = props;
  const [value, setValue] = useState(null);

  return (
    <Controller
      name={name as string}
      control={control}
      render={({ field }) => {
        const { value: valueProp, onChange, ...otherFieldProps } = field;

        return (
          <DatePicker
            {...otherDateTimePickerProps}
            renderInput={(params) => (
              <TextField {...params} helperText={helperText} error={error} />
            )}
            label={label}
            value={value !== null ? value : valueProp}
            {...otherFieldProps}
            onChange={(newValue) => {
              onChange(newValue);
              setValue(newValue);
            }}
            ref={ref}
            closeOnSelect
          />
        );
      }}
    />
  );
});

export default HookFormDatePicker;
