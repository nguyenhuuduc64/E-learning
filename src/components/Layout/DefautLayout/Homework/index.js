import { useEffect, useState } from 'react';
import styles from '../Homework.module.scss';
import classNames from 'classnames/bind';
import wrapperStyles from '../../../Wrapper/Wrapper.module.scss';
import { fetchData } from '../../../../service/sheetService';
const cx = classNames.bind(styles);

function Homework() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const fetchedData = await fetchData();
            setData(fetchedData);
        };
        getData();
        console.log('data', data);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={wrapperStyles.wrapper} style={{ height: '70vh' }}>
                <div className={cx('content')}>
                    <table className={cx('table')}>
                        <thead className={cx('table-header')}>
                            <tr>
                                <th>STT</th>
                                <th>Tên bài tập</th>
                                <th>Link bài tập</th>
                            </tr>
                        </thead>

                        <tbody className={cx('table-body')}>
                            {data.map((item, index) => (
                                <tr
                                    key={index}
                                    style={{ backgroundColor: index % 2 === 0 ? '#f3f3f3' : 'white' }}
                                    className={cx('hover')}
                                >
                                    <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                    <td style={{ paddingLeft: '20px' }}>{item[0]}</td>
                                    <td style={{ paddingLeft: '20px' }}>
                                        <a
                                            href={item[1]}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={cx('normal-style')}
                                        >
                                            {item[1]}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Homework;
