/**
 * 发现
 * Songlcy create by 2017-01-13
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    StatusBar,
    Navigator,
    RefreshControl,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import * as Api from './../../constant/api';
import { discover } from './../../actions/discoverAction';

import ToolBar from './../../widget/ToolBar';
import StaticContainer from 'react-static-container';
import LoadingMoreFooter from './../../widget/LoadMoreFooter';
import { discoverStyle } from './../../style/discoverStyle';
import Chapter from './../../components/chapter/comicChapter';

/**
 * 初始化状态
 */
let isLoading = true;
let isLoadingMore = false;
let isRefreshing = false;

//url参数
let params = {
    type: '青年漫画',
    skip: 20
}

let isFirstLoad = true;
class Discover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    // 请求网络数据
    componentDidMount() {
        const {discover} = this.props;
        discover(Api.API_COMBIC_LIST, params, isLoading, isLoadingMore, isRefreshing);
    }

    render() {

        // 取到返回的网络数据
        const {Discover} = this.props;
        let discoverList = Discover.discoverList;
        if (discoverList.length) {
            isFirstLoad = false;
        }
        return (
            <View style={discoverStyle.container}>
                <ToolBar
                    title="发现"
                    titleStyle={{ textAlign: 'center' }}
                    />
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(discoverList)}
                    style={discoverStyle.listview}
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
     * 渲染Listview的Item
     */
    _renderRow(rowData, sectionId, rowId) {
        return <TouchableOpacity activeOpacity={0.8} onPress={this._onPressRow.bind(this, rowData, rowId)}>
            <View style={discoverStyle.listitem}>
                <Image source={{ uri: rowData.coverImg }} style={discoverStyle.img} resizeMode={'cover'} />
                <Text style={discoverStyle.disc} numberOfLines={2}>{rowData.des}</Text>
            </View>
        </TouchableOpacity>
    }

    /**
     * 下拉刷新
     */
    _onRefresh() {

        isRefreshing = true;
        isLoading = false;
        isLoadingMore = false;
        const {discover} = this.props;
        params.skip = 20;//初始到第一页
        discover(Api.API_COMBIC_LIST, params, isLoading, isLoadingMore, isRefreshing);
    }

    /**
     * 加载更多
     */
    _onEndReach() {

        // 防止第一次Load就触发加载更多
        if (!isFirstLoad) {
            isLoadingMore = true;
            isLoading = false;
            isRefreshing = false;
            const {discover} = this.props;
            params.skip = +params.skip + 20;
            console.info(params.skip);
            discover(Api.API_COMBIC_LIST, params, isLoading, isLoadingMore, isRefreshing);
        }
    }

    /**
     * 底部
     */
    _renderFooter() {

        const {Discover} = this.props;
        if (Discover.isLoadingMore && Discover.discoverList.length > 0) {
            return <StaticContainer>
                <LoadingMoreFooter />
            </StaticContainer>
        }
    }

    /**
     * 点击ListView Item跳转到详情页
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
    const {Discover} = state;
    return {
        Discover
    }
}, { discover })(Discover)