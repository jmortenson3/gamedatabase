import React from 'react';

const Button = (props) => {
  const { btnText } = props;
  const classNames = [ 'btn', ...props.classNames ].join(' ');
  console.log(classNames);
  return (
    <button type="button" className={ classNames }>
      { btnText }
    </button>
  );
}

export default Button;