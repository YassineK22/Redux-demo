const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCreams -= action.payload ?? 1
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload ?? 1
        },
    },
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions