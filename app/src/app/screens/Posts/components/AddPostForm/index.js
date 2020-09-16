import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '@components/basic/Input';
import { POST_FIELDS } from '@constants/fieldNames';

function AddPostForm({ addPost }) {
  const [formValues, setFormValues] = useState({
    [POST_FIELDS.USER_NAME]: {
      value: '',
    },
  });

  function handleChange(e) {
    const { value, name } = e.target;
    const updatedFormValues = { ...formValues, [name]: { value } };
    setFormValues(updatedFormValues);
  }

  return (
    <form>
      <Input
        name={POST_FIELDS.USER_NAME}
        value={formValues[POST_FIELDS.USER_NAME].value}
        onChange={handleChange}
      />
      <p><button type="submit" onClick={addPost}>Add Post</button></p>
    </form>
  );
}

AddPostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default AddPostForm;
