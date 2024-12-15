import { useState } from 'react';
import { FormControlLabel, Switch, Fade, Box } from '@mui/material';

import styles from './ShowBtn.module.scss';
import classNames from 'classnames/bind';
import Draggable from 'react-draggable';

const cx = classNames.bind(styles);
function ShowBtn({ name, children, color }) {
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className={cx('wrapper')}>
            <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label={name} />
            <Box sx={{ display: 'flex' }}>
                <Draggable>
                    <Fade in={checked} mountOnEnter unmountOnExit>
                        <div style={{ zIndex: 100, position: 'absolute' }}>{checked && children}</div>
                    </Fade>
                </Draggable>
            </Box>
        </div>
    );
}

export default ShowBtn;
