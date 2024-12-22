import { FormControlLabel, Switch, Fade, Box } from '@mui/material';
import { toggle } from '../../store';
import styles from './ShowBtn.module.scss';
import classNames from 'classnames/bind';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);
function ShowBtn({ name, children }) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.counter.value);

    return (
        <div className={cx('wrapper')}>
            <FormControlLabel
                control={<Switch checked={state} />}
                label={name}
                onClick={() => {
                    dispatch(toggle());
                }}
            />
            <Box sx={{ display: 'flex' }}>
                <Draggable>
                    <Fade in={state} mountOnEnter unmountOnExit>
                        <div style={{ zIndex: 100, position: 'absolute' }}>{children}</div>
                    </Fade>
                </Draggable>
            </Box>
        </div>
    );
}

export default ShowBtn;
