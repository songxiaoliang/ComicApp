import * as types from './../constant/actionTypes';

const initState = {
    mainList: [],
    isLoading: true,
    isLoadMore: false,
    isRefreshing: false
}

let mainReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_MAIN_LIST:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
                isLoadMore: action.isLoadMore,
                isRefreshing: action.isRefreshing
            });
        case types.GET_MAIN_LIST:
            return Object.assign({}, state, {
                isLoading: false,
                isRefreshing: false,
                mainList: state.isLoadMore ? state.mainList.concat(action.mainList) : action.mainList
            })
        default:
            return state;
    }
}

export default mainReducer;

