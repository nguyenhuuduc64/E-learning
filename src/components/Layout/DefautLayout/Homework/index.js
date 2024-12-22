import styles from '../Homework.module.scss';
import classNames from 'classnames/bind';
import wrapperStyles from '../../../Wrapper/Wrapper.module.scss';
const cx = classNames.bind(styles);

function Homework() {
    return (
        <div className={cx('wrapper')}>
            <div className={wrapperStyles.wrapper}>
                <a
                    href="https://drive.google.com/file/d/1HxqJBGin-YuGolzJG32Z7XJWaVSgSHyv/view"
                    style={{ color: '#2F4F4F', textDecoration: 'none' }}
                >
                    bai tap
                </a>
            </div>
        </div>
    );
}

export default Homework;
