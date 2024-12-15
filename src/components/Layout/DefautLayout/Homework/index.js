import styles from '../Homework.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Homework() {
    return <div className={cx('wrapper')}>this is homeword</div>;
}

export default Homework;
