const createSlice = require('@reduxjs/toolkit').createSlice

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

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions