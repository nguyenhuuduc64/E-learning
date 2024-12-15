import styles from '../Homework.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Solution() {
    return <div className={cx('wrapper')}>this is solution</div>;
}

export default Solution;
