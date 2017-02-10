import * as types from './../constant/actionTypes';

const initState = {
    beautifulList: [],
    isLoading: true,
    isLoadMore: false,
    isRefresh: false
}

let beautifulReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_CHOICE_BEAUTIFUL_LIST:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
                isLoadMore: action.isLoadMore,
                isRefresh: action.isRefresh
            });
        case types.GET_CHOICE_BEAUTIFULL_LIST:
            return Object.assign({}, state, {
                isLoading: false,
                isRefresh: false,
                beautifulList: action.isLoadMore ? state.beautifulList.concat(action.beautifulList) : action.beautifulList
            });
        default:
            return state;
    }
}

export default beautifulReducer;