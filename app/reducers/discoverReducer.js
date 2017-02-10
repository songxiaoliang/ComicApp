import * as types from './../constant/actionTypes';

/**
 * 初始化状态
 */
const initState = {
    discoverList: [],
    isLoading: true,
    isLoadingMore: false,
    isRefresh: false
}

let discoverReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_DISCOVERY_LIST:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
                isLoadingMore: action.isLoadingMore,
                isRefresh: action.isRefresh
            });
        case types.GET_DISCOVERY_LIST:
            return Object.assign({}, state, {
                isLoading: false,
                isRefresh: false,
                discoverList: state.isLoadingMore ? state.discoverList.concat(action.discoverList) : action.discoverList
            });
        default:
            return state;
    }
}

export default discoverReducer;