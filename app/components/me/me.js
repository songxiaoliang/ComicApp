/**
 * 我
 * Songlcy create by 2017-01-13
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    findNodeHandle,
    TouchableOpacity
} from 'react-native';

import { meStyle } from './../../style/meStyle';
import SelectItem from './../../widget/SelectItem';
import { commonStyle } from './../../style/commonStyle';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Me extends Component {
    render() {
        return (
            <View style={meStyle.container}>
                <Image  source={require('./../../images/ic_head_bg.jpg')} style={meStyle.headbg} resizeMode={'cover'} />
                <TouchableOpacity activeOpacity={0.6} onPress={this._login.bind(this)} style={meStyle.headContainer}>
                    <Image
                        source={require('./../../images/ic_head.png')}
                        style={meStyle.head}
                        />
                </TouchableOpacity>
                <View style={meStyle.space} />
                <ScrollView>
                    <SelectItem title="优惠券" icon={require('./../../images/ic_coupon.png')} showline={true} onPress={this._coupon.bind(this)} />
                    <SelectItem title="我的收藏" icon={require('./../../images/ic_coll.png')} showline={true} onPress={this._collection.bind(this)} />
                    <SelectItem title="分享App" icon={require('./../../images/ic_share.png')} showline={true} onPress={this._share.bind(this)} />
                    <SelectItem title="关于我" icon={require('./../../images/ic_about.png')} showline={false} onPress={this._about.bind(this)} />
                    <View style={meStyle.space} />
                    <SelectItem title="设置" icon={require('./../../images/ic_setting.png')} onPress={this._setting.bind(this)} />
                    <View style={commonStyle.underline} />
                </ScrollView>
            </View>
        )
    }

    /**
     * 跳转到登录界面
     */
    _login() {

    }

    /**
     * 优惠券
     */
    _coupon() {

    }

    /**
     * 收藏
     */
    _collection() {

    }

    /**
     * 分享App
     */
    _share() {

    }

    /**
     * 关于我
     */
    _about() {

    }

    /**
     * 设置
     */
    _setting() {

    }

}