import styles from './Desmos.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useRef } from 'react';
import Desmos from 'desmos';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function DesmosGraph() {
    const calculatorRef = useRef(null);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.counter.value);
    const handleChange = () => {
        dispatch(toggle());
    };
    useEffect(() => {
        if (calculatorRef.current) {
            const calculator = Desmos.GraphingCalculator(calculatorRef.current);

            return () => calculator.destroy();
        }
    }, []);

    return (
        <div>
            <div className={cx('desmos__header')}>
                <p className={cx('desmos__header__title')} style={{ textAlign: 'center' }}>
                    Máy tính đồ thị
                </p>
                <div
                    className={cx('desmos__header__close')}
                    onClick={() => {
                        handleChange();
                        console.log(state);
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div ref={calculatorRef} style={{ width: '50vw', height: '400px' }}></div>
        </div>
    );
}

export default DesmosGraph;
