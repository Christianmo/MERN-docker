import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

function Input({
  name,
  value,
  onChange,
  errorMessage,
  disabled,
  customInputStyle,
  customContainerStyle,
}) {
  return (
    <div className={`${styles.container} ${customContainerStyle}`}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${customInputStyle}`}
        disabled={disabled}
      />
      {errorMessage && <div className={styles.error}>errorMessage</div>}
    </div>
  );
}

Input.defaultProps = {
  value: '',
  errorMessage: '',
  customContainerStyle: null,
  customInputStyle: null,
  disabled: false,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errorMessage: PropTypes.string,
  customContainerStyle: PropTypes.objectOf(),
  customInputStyle: PropTypes.objectOf(),
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default memo(Input);
