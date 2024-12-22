import { configureStore, createSlice } from '@reduxjs/toolkit';

// Tạo slice
const counterSlice = createSlice({
    name: 'counter', //sử dụng lúc lấy state const state = useSelector((state) => state.counter.value);
    initialState: { value: false },
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        },
    },
});

// Export action creator toggle
export const { toggle } = counterSlice.actions;

// Tạo store
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

export default store;
