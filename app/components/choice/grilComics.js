/**
 * 少女漫画
 * Songlcy create by 2017-01-15
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    ListView,
    Navigator,
    RefreshControl,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import * as Api from './../../constant/api';
import { gril } from './../../actions/grilAction';

import StaticContainer from 'react-static-container';
import { choiceStyle } from './../../style/choiceStyle';
import LoadingMoreFooter from './../../widget/LoadMoreFooter';
import Chapter from './../../components/chapter/comicChapter';

/**
 * 初始化状态
 */
let isLoading = true;
let isLoadMore = false;
let isRefresh = false;

/**
 * url 参数 
 */
let params = {
    type: '少女漫画',
    skip: ''
}

let isFirstLoad = true;

class GrilComic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    // 拉取网络数据
    componentDidMount() {
        const {gril} = this.props;
        gril(Api.API_COMBIC_LIST, params, isLoading, isLoadMore, isRefresh);
    }

    render() {

        const {Gril} = this.props;
        let grilList = Gril.grilList;
        if (grilList.length) {
            isFirstLoad = false;
        }
        return (
            <View style={choiceStyle.container}>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(grilList)}
                    style={choiceStyle.listview}
                    onEndReachedThreshold={10}
                    enableEmptySections={true}
                    showsVerticalScrollIndicator={false}
                    renderRow={this._renderRow.bind(this)}
                    onEndReached={this._onEndReach.bind(this)}
                    renderFooter={this._renderFooter.bind(this)}
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            onRefresh={this._onRefresh.bind(this)}
                            colors={["#F70938"]}
                            />
                    }
                    />
            </View>
        )
    }

    /**
     * listview item
     */
    _renderRow(rowData, sectionId, rowId) {
        return <TouchableOpacity activeOpacity={0.8} onPress={this._onPressRow.bind(this, rowData, rowId)}>
            <View style={choiceStyle.listitem}>
                <Image source={{ uri: rowData.coverImg }} style={choiceStyle.img} />
                <Text style={choiceStyle.disc} numberOfLines={3}>{rowData.des}</Text>
            </View>
        </TouchableOpacity>
    }

    /**
     * 下拉刷新
     */
    _onRefresh() {

        isRefresh = true;
        isLoading = false;
        isLoadMore = false;
        const {gril} = this.props;
        params.skip = '';
        gril(Api.API_COMBIC_LIST, params, isLoading, isLoadMore, isRefresh);
    }

    /**
     * 加载更多
     */
    _onEndReach() {

        if (!isFirstLoad) {
            isLoadMore = true;
            isRefresh = false;
            isLoading = false;
            const {gril} = this.props;
            params.skip = +params.skip + 20;
            gril(Api.API_COMBIC_LIST, params, isLoading, isLoadMore, isRefresh);
        }
    }

    /**
     * 底部
     */

    _renderFooter() {

        const {Gril} = this.props;
        if (Gril.isLoadMore && Gril.grilList.length > 0) {
            return <StaticContainer>
                <LoadingMoreFooter />
            </StaticContainer>
        }
    }

    /**
     * item click
     */
    _onPressRow(rowData, rowId) {
        this.props.navigator.push({
            name: 'chapter',
            component: Chapter,
            sceneConfig: Navigator.SceneConfigs.PushFromRight,
            params: {
                name: rowData.name
            }
        })
    }
}

export default connect((state) => {
    const {Gril} = state;
    return {
        Gril
    }
}, { gril })(GrilComic)