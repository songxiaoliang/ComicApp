/**
 * 少女漫画 Action
 * Songlcy create by 2017-01-19
 */
import HttpUtil from './../utils/HttpUtil';
import * as types from './../constant/actionTypes';

export let gril = (url, params, isLoading, isLoadMore, isRefresh) => {
    return dispatch => {
        dispatch(loadGrilData(isLoading, isLoadMore, isRefresh));
        return HttpUtil.fetchGet(url,
            params,
            (responseObj) => dispatch(receiveGrilData(responseObj.result.bookList)),
            (error) => dispatch(receiveGrilData([])))
    }
}

let loadGrilData = (isLoading, isLoadMore, isRefresh) => {
    return {
        type: types.LOAD_CHOICE_GRIL_LIST,
        isLoading: isLoading,
        isLoadMore: isLoadMore,
        isRefresh: isRefresh
    }
}

let receiveGrilData = (grilList) => {
    return {
        type: types.GET_CHOICE_GRIL_LIST,
        grilList: grilList
    }
}
