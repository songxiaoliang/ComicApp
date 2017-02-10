import * as types from './../constant/actionTypes';

/**
 * 初始化状态
 */
const initState = {
    grilList: [],
    isLoading: true,
    isLoadMore: false,
    isRefresh: false
}

let girlReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_CHOICE_GRIL_LIST:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
                isLoadMore: action.isLoadMore,
                isRefresh: action.isRefresh
            });
        case types.GET_CHOICE_GRIL_LIST:
            return Object.assign({}, state, {
                isLoading: false,
                isRefresh: false,
                grilList: state.isLoadMore ? state.grilList.concat(action.grilList) : action.grilList
            });
        default:
            return state;
    }
}

export default girlReducer;