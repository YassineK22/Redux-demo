const redux = require('redux')
const thunkMiddleware = require('redux-thunk').thunk
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const produce = require('immer').produce

const initialState = {
    loding: false,
    users: [],
    error: '',
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return produce(state, (draft) => {
                draft.loding = true
            })
        case FETCH_USERS_SUCCEEDED:
            return produce(state, (draft) => {
                draft.loding = false,
                    draft.users = action.payload,
                    draft.error = ''
            })
            case FETCH_USERS_FAILED:
                return produce(state, (draft) => {
                    draft.loding = false,
                    draft.error = action.payload
                })           
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                //response.data is the users
                const users = response.data.map((user) => user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch((error) => {
                //error.message is the error message
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware)) 

store.subscribe(()=> {
    console.log(store.getState())
})
store.dispatch(fetchUsers())