/**
 * 耽美漫画 Action
 * Songlcy create by 2017-01-19
 */
import HttpUtil from './../utils/HttpUtil';
import * as types from './../constant/actionTypes';

export let beautiful = (url, params, isLoading, isLoadMore, isRefresh) => {
    return dispatch => {
        dispatch(loadBeautifulData(isLoading, isLoadMore, isRefresh));
        return HttpUtil.fetchGet(url,
            params,
            (responseObj) => dispatch(receiveBeautifulData(responseObj.result.bookList)),
            (error) => dispatch(receiveBeautifulData([]))
        )
    }
}

let loadBeautifulData = (isLoading, isLoadMore, isRefresh) => {
    return {
        type: types.LOAD_CHOICE_BEAUTIFUL_LIST,
        isLoading: isLoading,
        isLoadMore: isLoadMore,
        isRefresh: isRefresh
    }
}

let receiveBeautifulData = (beautifulList) => {
    return {
        type: types.GET_CHOICE_BEAUTIFULL_LIST,
        beautifulList: beautifulList
    }
}