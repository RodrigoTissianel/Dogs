import Error from '../Helper/Error/Error';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, onBlur, error }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>
            <input
                type={type}
                id={name}
                className={styles.input}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <Error error={error} />}
        </div>
    );
};

export default Input;
