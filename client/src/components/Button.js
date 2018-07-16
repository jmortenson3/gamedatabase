import React from 'react';

const Button = (props) => {
  const { btnText } = props;
  const classNames = props.classNames ? [ 'btn', ...props.classNames ].join(' ') : [ 'btn' ];
  return (
    <button type="submit" className={ classNames }>
      { btnText }
    </button>
  );
}

export default Button;