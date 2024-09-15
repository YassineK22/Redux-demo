import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIcecreams -= action.payload ?? 1
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload ?? 1
        },
    },
    extraReducers: (builder) => {
        builder.addCase('cake/ordered', (state) => {
            state.numOfIcecreams--;
        });
    },
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions