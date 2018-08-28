import React from 'react';
import Classnames from 'classnames';
import styles from '../../styles/button.css';

export const TYPES = {
	PRIMARY: 'primary',
	SUBMIT: 'submit',
	TOPIC: 'topic',
	READ: 'read',
	CONTINUE: 'continue',
	SAVE: 'save',
	// WARNING: 'warning',
	// DANGER: 'danger',
	// SUCCESS: 'success'
}

export const SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large'
}

const BaseButton = ({ 
  text, 
  onClick, 
  type, 
  disabled, 
  buttonType,
  buttonSize
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    Classnames={
      styles.button, 
      styles[ buttonType ],
      styles[ buttonSize || SIZES.MEDIUM ]
    }
  >
    {text}
  </button>
);

export const Primary = props => (
  <BaseButton { ...props } buttonType={TYPES.PRIMARY} />
);
export const Submit = props => (
  <BaseButton { ...props } buttonType={TYPES.SUBMIT} />
);
export const Topic = props => (
  <BaseButton { ...props } buttonType={TYPES.TOPIC} />
);
export const Read = props => (
  <BaseButton { ...props } buttonType={TYPES.READ} />
);
export const Continue = props => (
  <BaseButton { ...props } buttonType={TYPES.CONTINUE} />
);
export const Save = props => (
  <BaseButton { ...props } buttonType={TYPES.SAVE} />
);



// export const Warning = props => (
//   <BaseButton { ...props } buttonType={TYPES.WARNING} />
// );
// export const Danger = props => (
//   <BaseButton { ...props } buttonType={TYPES.DANGER} />
// );
// export const Success = props => (
//   <BaseButton { ...props } buttonType={TYPES.SUCCESS} />
// );