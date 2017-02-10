/**
 * 耽美漫画
 * Songlcy create by 2017-01-15
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    Navigator,
    RefreshControl,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import * as Api from './../../constant/api';
import { beautiful } from './../../actions/beautifulAction';

import { choiceStyle } from './../../style/choiceStyle';
import StaticContainer from 'react-static-container';
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
    type: '耽美漫画',
    skip: ''
}

let isFirstLoad = true;

class SlashComic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    componentDidMount() {
        const {beautiful} = this.props;
        beautiful(Api.API_COMBIC_LIST, params, isLoading, isLoadMore, isRefresh);
    }

    render() {

        const {Beautiful} = this.props;
        let beautifulList = Beautiful.beautifulList;
        if (beautifulList.length) {
            isFirstLoad = false;
        }
        return (
            <View style={choiceStyle.container}>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(beautifulList)}
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
        const {beautiful} = this.props;
        params.skip = '',
            beautiful(Api.API_COMBIC_LIST, params, isLoading, isLoadMore, isRefresh);
    }

    /**
     * 加载更多
     */
    _onEndReach() {

        if (!isFirstLoad) {
            isLoading = false;
            isRefresh = false;
            isLoadMore = true;
            const {beautiful} = this.props;
            params.skip = +params.skip + 20;
            beautiful(Api.API_COMBIC_LIST, params, isLoading, isLoadMore, isRefresh);
        }
    }

    /**
     * 底部
     */

    _renderFooter() {

        const {Beautiful} = this.props;
        if (Beautiful.isLoadMore && Beautiful.beautifulList.length > 0) {
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
    const {Beautiful} = state;
    return {
        Beautiful
    }
}, { beautiful })(SlashComic)