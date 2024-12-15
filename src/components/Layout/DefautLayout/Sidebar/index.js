import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Sử dụng Link để điều hướng

import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { publicRoutes } from '../../../../routes'; // Đảm bảo publicRoutes đã được import chính xác
import Wrapper from '../../../Wrapper/wrapper';
const cx = classNames.bind(styles);

function Sidebar() {
    const [hoverIndex, setHoverIndex] = useState(null);
    const refItem = useRef();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('navbar__container')}>
                <nav>
                    <ul>
                        {publicRoutes.map((route, index) => (
                            <Wrapper key={route.path}>
                                <Link to={route.path} className={cx('items')} ref={refItem}>
                                    <p
                                        onMouseEnter={() => {
                                            setHoverIndex(index);
                                        }}
                                        onMouseLeave={() => setHoverIndex(null)}
                                        style={{ color: hoverIndex == index ? 'white' : '#51b7ff' }}
                                    >
                                        {route.title}
                                    </p>
                                </Link>
                            </Wrapper>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
