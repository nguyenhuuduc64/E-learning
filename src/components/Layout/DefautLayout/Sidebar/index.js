import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Sử dụng Link để điều hướng

import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { adminRoutes, publicRoutes } from '../../../../routes';

import Wrapper from '../../../Wrapper/wrapper';
const cx = classNames.bind(styles);

function Sidebar() {
    const [clickIndex, setClickIndex] = useState(null);
    const refItem = useRef();
    const location = useLocation();
    const sidebarItems = location.pathname != '/admin' ? publicRoutes : adminRoutes;
    console.log(sidebarItems);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('navbar__container')}>
                <nav>
                    <ul>
                        {sidebarItems.map((route, index) => {
                            if (route.title)
                                return (
                                    <Wrapper
                                        key={route.path}
                                        onClick={() => setClickIndex(index)}
                                        style={{ backgroundColor: index == clickIndex ? '#51b7ff' : 'white' }}
                                    >
                                        <Link to={route.path} className={cx('items')} ref={refItem}>
                                            <p style={{ color: clickIndex == index ? 'white' : '#51b7ff' }}>
                                                {route.title}
                                            </p>
                                        </Link>
                                    </Wrapper>
                                );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
