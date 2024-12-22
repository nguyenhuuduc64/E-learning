import classNames from 'classnames/bind';
import styles from './Wrapper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, style, onClick }) {
    return (
        <div className={cx('wrapper')} style={style} onClick={onClick}>
            {children}
        </div>
    );
}

export default Wrapper;
