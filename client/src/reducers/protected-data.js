import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';

const initialState = {
    data: [],
    error: null
};

// export default function reducer(state = initialState, action) {
//     if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
//         console.log(state, action);
//         return Object.assign({}, state, {
//             data: action.data,
//             error: null
//         });
//     } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
//         return Object.assign({}, state, {
//             error: action.error
//         });
//     }
//     return state;
// }


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PROTECTED_DATA_SUCCESS:
        console.log('pears', state);
        console.log('watermelon', action.data.slice(0,6), typeof action.data);
        console.log('oranges', typeof state.data, typeof action.data);
         return {
           ...state,
          data: action.data.slice(0,6),
          error: null
        };

        case FETCH_PROTECTED_DATA_ERROR:

            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }

}