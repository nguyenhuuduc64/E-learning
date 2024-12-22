import styles from './AdminComponent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AdminComponent() {
    return <div className={cx('wrapper')}>this is admin</div>;
}

export default AdminComponent;
