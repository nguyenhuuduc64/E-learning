import styles from '../Homework.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Lession() {
    return <div className={cx('wrapper')}>this is lession</div>;
}

export default Lession;
