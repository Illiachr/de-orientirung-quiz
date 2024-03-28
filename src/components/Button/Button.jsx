import classes from './Button.module.css';

const Button = ({ children, disabled, value, type, onClick }) => {
  const {btn, inactive} = classes;

  const cls = disabled ? [btn, inactive].join(' ') : btn;

  return (
    <button
      className={cls}
      type={type ? type : 'button'}
      disabled={disabled}
      value={value || ''}
      onClick={onClick || null}
    >
      { children }
    </button>
  );
};

export default Button;
