/**
 * 标题栏
 * Songlcy create by 2017-01-13
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { toolBarStyle } from './../style/toolBarStyle';

export default class Toolbar extends Component {

	render() {
		let Toolbar = [];
		//1.左边返回按钮

		if (this.props.leftButton != undefined) {
			Toolbar.push(
				<TouchableOpacity key={'leftButtonIcon'} activeOpacity={0.6} onPress={this.props.leftIconAction} style={toolBarStyle.back}>
					<Icon
						name={this.props.leftButton}
						size={27}
						color='white'
						/>
				</TouchableOpacity>
			)
		}
		//2.标题 
		if (this.props.title != undefined) {
			Toolbar.push(
				<Text key={'title'} style={[toolBarStyle.title, this.props.titleStyle ? this.props.titleStyle : '']} numberOfLines={1}>
					{this.props.title}
				</Text>
			)
		}

		return (
			<View style={[toolBarStyle.container,this.props.containerStyle?this.props.containerStyle:'']}>
				{Toolbar}
			</View>
		)
	}
}

