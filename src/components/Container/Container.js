import styles from './Container.module.scss';

const Container = props => {
  return (
    <div className={`${styles.container} ${props.className === undefined ? '' : props.className}`}>
      {props.children}
    </div>
)};

export default Container;