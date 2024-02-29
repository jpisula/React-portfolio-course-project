import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({ ctoText, onClick, mode }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.btn, mode === 'secondary' && styles.secondaryBtn)}
    >
      {ctoText}
    </button>
  );
};

export default Button;
