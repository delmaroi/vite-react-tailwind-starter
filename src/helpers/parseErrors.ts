type errorType = {
  code: string;
  message: string;
};

type parseErrorProp = {
  response?: {
    data: {
      errors: errorType[];
    };
  };
  errors?: errorType[];
};

const parseError = (error: parseErrorProp, returnOnlyCode: boolean = false) => {
  const errorData = error.response?.data || error;
  const hasErrorData = Object.prototype.hasOwnProperty.call(errorData, 'errors');
  if (errorData?.errors && returnOnlyCode) {
    return hasErrorData ? `${errorData.errors[0].code}` : 'UNDEFINED_ERROR';
  }
  return hasErrorData && errorData?.errors
    ? `${errorData.errors[0].code}: ${errorData.errors[0].message}`
    : 'Undefined error';
};

export default parseError;
