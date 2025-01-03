import styles from '../../../src/components/Layout/DefautLayout/Homework.module.scss';
import classNames from 'classnames/bind';
import video from '../../assets/videos/home-video.mp4';
import { Style } from '@mui/icons-material';
const cx = classNames.bind(styles);
function Home() {
    const colors = ['--color-1', '--color-2', '--color-3', '--color-4', '--color-5', '--color-6'];
    var color = colors[Math.floor(Math.random() * 2)];
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('content-component')} style={{ height: '400px', overflow: 'hidden', padding: '0' }}>
                    <video src={video} autoPlay loop muted style={{ width: '100%', borderRadius: '10px' }} />
                </div>
                <div className={cx('content-row')}>
                    <div
                        className={cx('content-component')}
                        style={{ backgroundColor: `var(${colors[Math.floor(Math.random() * 5)]})` }}
                    >
                        <h3>Số ngày bạn đã học</h3>
                        <h1>125</h1>
                    </div>
                    <div
                        className={cx('content-component')}
                        style={{ backgroundColor: `var(${colors[Math.floor(Math.random() * 5)]})` }}
                    >
                        <h3>Đếm ngược thi đại học: </h3>
                        <h1 style={{ color: 'white' }}>62</h1>
                    </div>
                </div>
                <div>
                    <div
                        className={cx('content-component')}
                        style={{ backgroundColor: `var(${colors[Math.floor(Math.random() * 5)]})` }}
                    >
                        <h2>Đề thi THPTQG tham khảo</h2>
                        <p>
                            <span style={{ fontWeight: 'bolder' }}>Ngày 20/10</span> sẽ là ngày thi cuối cùng của kì thi
                            học kỳ 1
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
