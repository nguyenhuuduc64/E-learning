import styles from './Desmos.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useRef } from 'react';
import Desmos from 'desmos';
const cx = classNames.bind(styles);

function DesmosGraph() {
    const calculatorRef = useRef(null);
    useEffect(() => {
        if (calculatorRef.current) {
            const calculator = Desmos.GraphingCalculator(calculatorRef.current);

            return () => calculator.destroy();
        }
    }, []);

    return (
        <div>
            <div>
                <p
                    style={{
                        fontWeight: 'bolder',
                        fontSize: '20px',
                        textAlign: 'center',
                        padding: '20px 0',
                        backgroundColor: 'gray',
                    }}
                >
                    Máy tính đồ thị
                </p>
            </div>
            <div ref={calculatorRef} style={{ width: '50vw', height: '400px' }}></div>
        </div>
    );
}

export default DesmosGraph;
