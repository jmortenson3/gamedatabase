import React from 'react';

const FormInput = (props) => {
  const { labelText,
          inputId,
          inputType,
          placeholderText,
          subtext,
          changeHandler,
          stateName
  } = props;

  return (
    <div>
      { labelText &&
        <label htmlFor={ inputId }>{ labelText }</label>
      }
      <input
        type={ inputType }
        id={ inputId }
        className="form-control"
        placeholder={ placeholderText }
        onChange={ (e) => changeHandler(e) }
        data-statename={ stateName } />
      { subtext &&
        <small className="form-text text-muted">{ subtext }</small>
      }
    </div>
  );
};

export default FormInput;