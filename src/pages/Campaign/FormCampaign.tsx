import React, { useRef } from 'react';
import HookFormDatePicker from '@/components/form/HookFormDatePicker';
import ReactQuillEditor from '@/components/form/ReactQuillEditor';
// material
import { TextField, Box, Button, Stack } from '@mui/material';
// form
import { useForm, useFieldArray } from 'react-hook-form';
// validation
import * as yup from 'yup';
import { useYupValidationResolver } from '@/helpers/validation';

type IProps = {
  onSuccess: () => void;
};

type DataTypeInputs = {
  editor: string;
  description: string;
  email: string;
  scheduleDate: Date | '';
};

const defaultValues: DataTypeInputs = {
  editor: '',
  description: '',
  email: '',
  scheduleDate: '',
};

const FormCampaign = ({ onSuccess }: IProps) => {
  const inputEmailRef = useRef();
  const FORM_ID = 'campaing-form';

  const schema = yup.object().shape({
    editor: yup.string().required('required').max(30, 'max 30'),
    description: yup.string().required('required').max(30, 'max 30'),
    email: yup
      .array()
      .transform(function (value, originalValue) {
        console.log(value, 'value');
        console.log(originalValue, 'originalValue');
        if (this.isType(value) && value !== null) {
          return [];
        }

        return originalValue ? originalValue.split(/[\s,]+/) : [];
      })
      .of(
        yup
          .string()
          .required('required')
          .email(({ value }) => `${value} is not a valid email`)
      ),
    // email: yup.array(
    //   yup.object({
    //     email: yup
    //       .string()
    //       .required('required')
    //       .email(({ value }) => `${value} is not a valid email`)
    //       .nullable(),
    //   })
    // ),
    scheduleDate: yup.string().required('required'),
  });

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
    control,
  } = useForm<DataTypeInputs>({
    resolver: useYupValidationResolver(schema),
    defaultValues,
  });
  const { fields, append } = useFieldArray({
    control,
    name: 'email' as never,
  });
  const { description, email, scheduleDate, editor } = errors;

  const submitForm = (data: DataTypeInputs) => {
    onSuccess();
    // const { description, email, scheduleDate } = data;
    console.log(data, 'data');
  };

  return (
    <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <form id={FORM_ID} onSubmit={handleSubmit(submitForm)} style={{ height: '100%' }}>
        <Stack spacing={2}>
          <Box className="h-52">
            <span>Editor</span>
            <ReactQuillEditor
              control={control}
              {...register('editor')}
              name="editor"
              error={!!editor}
              className="h-32"
            />
          </Box>

          <TextField
            {...register('description')}
            autoFocus
            name="description"
            label="Description"
            fullWidth
            multiline
            rows={10}
            error={!!description}
            helperText={description ? description.message : ''}
          />

          <Box className="flex flex-row items-center justify-center">
            <TextField
              {...register('email')}
              name="email"
              label="Email"
              fullWidth
              error={!!email}
              helperText={email ? email.message : ''}
              inputRef={inputEmailRef}
            />

            <Box className="inline-flex p-0 m-0 align-top ">
              <Button
                type="button"
                variant="contained"
                sx={{ margin: '0', paddingLeft: 2 }}
                className="m-0 ml-2"
                // @ts-ignore
                onClick={() => {
                  const emails = [...fields, { email: inputEmailRef?.current?.value }];
                  console.log(emails, 'emails');
                  const xx = append([...fields, { email: inputEmailRef?.current?.value }]);
                  console.log(xx, 'xxx');
                }}
              >
                Append
              </Button>
            </Box>
          </Box>

          {fields.length > 0 && (
            <Box>
              <ul>
                {fields.map((item) => {
                  // @ts-ignore
                  return <li key={item.id}>{item.email}</li>;
                })}
              </ul>
            </Box>
          )}

          <Box>
            <HookFormDatePicker
              control={control}
              label="Schedule Date"
              {...register('scheduleDate')}
              helperText={scheduleDate ? scheduleDate.message : ''}
              error={!!scheduleDate}
              disableFuture
            />
          </Box>

          <Button fullWidth variant="contained" size="large" type="submit" form={FORM_ID}>
            Confirm
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default FormCampaign;
