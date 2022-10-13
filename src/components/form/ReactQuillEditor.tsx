import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';
import ReactQuill from 'react-quill';
import { ErrorMessage } from '@hookform/error-message';
// components
import { Controller } from 'react-hook-form';
import { BaseTextFieldProps } from '@mui/material/TextField/TextField';

interface ReactQuillEditorProps {
  control: any;
  name: BaseTextFieldProps['name'];
  error: BaseTextFieldProps['error'];
  modulesExtend?: any;
  className?: string;
}

const ReactQuillEditor = forwardRef<HTMLDivElement, ReactQuillEditorProps>((props, ref) => {
  const { control, name, error, modulesExtend, className, ...otherReactQuillEditorProps } = props;
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    ...modulesExtend,
  };

  return (
    <Controller
      name={name as string}
      control={control}
      render={({ field, formState }) => {
        const { value: valueProp, onChange, name, ...otherFieldProps } = field;
        return (
          <>
            <ReactQuill
              {...field}
              modules={modules}
              placeholder={'Write Description'}
              onChange={(text) => {
                console.log(text);
                setValue(text);
                onChange(text);
              }}
              value={value !== null ? value : valueProp}
              className={clsx(error ? 'ql-error' : '', className)}
              {...otherFieldProps}
            />

            <ErrorMessage
              errors={formState.errors}
              name={name}
              render={({ message }) => (
                <div role="alert" aria-label={message} className="pt-12 pl-2 text-xs text-red-600">
                  {message}
                </div>
              )}
            />
          </>
        );
      }}
    />
  );
});

export default ReactQuillEditor;
