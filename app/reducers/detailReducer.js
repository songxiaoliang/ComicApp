import * as types from './../constant/actionTypes';
/**
 * 初始化状态
 */
const initState = {
    detailList: [],
    isLoading: true,
}

let detailReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_COMBICK_DETIAL_LIST:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
            });
        case types.GET_COMBICK_DETIAL_LIST:
            return Object.assign({}, state, {
                isLoading: false,
                detailList: action.isLoadMore ? state.detailList.concat(action.detailList) : action.detailList
            });
        default:
            return state;
    }
}

export default detailReducer;