import React from 'react';
import './FormSubmit.css';

function FormSubmit({ name, type, onClick}) {
  return (
    <div className='formSubmit' type={type}>
      {name}
    </div>
  )
}

export default FormSubmit
