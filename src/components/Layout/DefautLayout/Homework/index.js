import styles from '../Homework.module.scss';
import classNames from 'classnames/bind';
import wrapperStyles from '../../../Wrapper/Wrapper.module.scss';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Homework() {
    const [data, setData] = useState([]);
    /* kết nối với google sheet để lấy link bài tập */
    const sheetId = '1aFLWwj6Hct1pFcJAqeKt_xDSCzlEN6RwcQuYzrtr8rY'; // Thay bằng Sheet ID
    const apiKey = 'AIzaSyC1TmM97RdPCO_48gl6bIhrXbi4jKcmdFU'; // Thay bằng API Key
    const range = 'elearning!A2:H10'; // Tùy chỉnh phạm vi dữ liệu
    useEffect(() => {
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.values) {
                    setData(data.values);
                } else {
                    console.error('No data returned:', data);
                }
            })
            .catch((error) => console.error('Error:', error));
    }, []);
    const homeworkName = [];
    const homeworkLink = [];
    data.map((item, index) => {
        homeworkLink.push(item[1]);
        homeworkName.push(item[0]);
    });
    console.log(homeworkLink);

    return (
        <div className={cx('wrapper')}>
            <div className={wrapperStyles.wrapper}>
                <div className={cx('content')}>
                    <table className={cx('table')}>
                        <thead className={cx('table-header')}>
                            <tr>
                                <th>STT</th>
                                <th>Tên bài tập</th>
                                <th>Link bài tập</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr
                                        key={index}
                                        style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}
                                        className={cx('hover', index % 2 === 0 ? '#f2f2f2' : 'white')}
                                    >
                                        <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                        <td>{item[0]}</td>
                                        <td>
                                            <a href={item[1]} target="_blank" rel="noreferrer">
                                                {item[1]}
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Homework;
