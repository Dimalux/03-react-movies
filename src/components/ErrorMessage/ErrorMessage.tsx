// import css from "./ErrorMessage.module.css";



import styles from './ErrorMessage.module.css';

export default function ErrorMessage() {
    return <p className={styles.text}>Сталася помилка, будь ласка, спробуйте ще раз...</p>;
}