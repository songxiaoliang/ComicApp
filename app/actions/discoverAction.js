/**
 * 发现 Action
 * Songlcy create by 2017-01-19
 */
import * as types from './../constant/actionTypes';
import HttpUtil from './../utils/HttpUtil';

export let discover = (url, params, isLoading, isLoadingMore, isRefresh) => {
    return dispatch => {
        dispatch(loadDiscoverData(isLoading, isLoadingMore, isRefresh));
        return HttpUtil.fetchGet(url,
            params,
            (responseObj) => dispatch(receiveDiscoverData(responseObj.result.bookList)),
            (error) => dispatch(receiveDiscoverData([]))
        )
    }
}

let loadDiscoverData = (isLoading, isLoadingMore, isRefresh) => {
    return {
        type: types.LOAD_DISCOVERY_LIST,
        isLoading: isLoading,
        isLoadingMore: isLoadingMore,
        isRefresh: isRefresh
    }
}

let receiveDiscoverData = (discoverList) => {
    return {
        type: types.GET_DISCOVERY_LIST,
        discoverList: discoverList
    }
}
