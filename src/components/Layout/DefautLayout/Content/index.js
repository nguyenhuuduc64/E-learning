import DesmosGraph from '../../../DesmosGraph';
import Homework from '../Homework';
import Sidebar from '../Sidebar';
import styles from './Content.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Content() {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <Homework />
        </div>
    );
}

export default Content;
