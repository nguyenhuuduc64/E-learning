import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ShowBtn from '../../../ShowBtn';
import DesmosGraph from '../../../DesmosGraph';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import LongMenu from '../../../LongMenu';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    let current_user = true;
    const location = useLocation();
    return (
        <header className={cx('wrapper')}>
            <div>
                <div>
                    {/*logo */}
                    {/*name */}
                </div>

                <div className={cx('wrapper__user-panel')}>
                    {current_user ? (
                        <>
                            <p style={{ fontWeight: 'bolder' }}>{'Nguyễn Hữu Đức'}</p>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            <LongMenu />
                        </>
                    ) : (
                        <>
                            <a style={{ fontWeight: 'bolder' }}>{'Đăng nhập'}</a>
                        </>
                    )}
                </div>
            </div>
            {location.pathname != '/admin' && (
                <div className={cx('wrapper__subnav')}>
                    <ShowBtn name="Đồ thị" color="--sidebar-color1">
                        <DesmosGraph />
                    </ShowBtn>
                </div>
            )}
        </header>
    );
}

export default Header;
