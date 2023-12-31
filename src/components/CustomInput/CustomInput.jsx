import { useField } from 'formik';
import PropTypes from 'prop-types';

import css from './CustomInput.module.css';

const CustomInput = ({ submitCount, isValid, ...props }) => {
  const [field, meta] = useField(props);
  const success = !meta.error && meta.value !== '';
  const error = !isValid && submitCount > 0 && meta.error;
  return (
    <>
      <input
        autoComplete="off"
        {...field}
        {...props}
        className={`${css.input} ${error ? css.inputError : ''} ${
          success ? css.inputSuccess : ''
        }`}
      />
      {error && <div className={css.error}>{meta.error}</div>}
    </>
  );
};

export default CustomInput;

CustomInput.propTypes = {
  submitCount: PropTypes.number.isRequired,
  isValid: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
