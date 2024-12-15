import styles from '../Homework.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
const cx = classNames.bind(styles);

function Test() {
    return (
        <div className={cx('wrapper')}>
            <h1>Test Page</h1>
            <p>Welcome to the Test component!</p>
        </div>
    );
}

export default Test;
