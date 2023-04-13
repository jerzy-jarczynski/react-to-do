import styles from './Container.module.scss';

const Container = props => <div className={styles.container}>{props.children}</div>;

export default Container;