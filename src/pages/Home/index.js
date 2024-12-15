import Header from '../../components/Layout/DefautLayout/Header';
import Content from '../../components/Layout/DefautLayout/Content';
import Sidebar from '../../components/Layout/DefautLayout/Sidebar';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);
function Home() {
    return (
        <>
            <Header />
            <div className={cx('content')}>
                <Content />
            </div>
        </>
    );
}

export default Home;
