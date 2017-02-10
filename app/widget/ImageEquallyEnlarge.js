import React, { Component } from 'react';
import {
    Image
} from 'react-native';

export default class ImageEquallyEnlarge extends Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            //状态机变量是一个style, 它将被用于定义显示图片的样式
            style: {}
        };
        this.onImageLayout=this.onImageLayout.bind(this);
    }
    //此函数被挂接到组件的onLayout事件上, 当组件布局更新时, 此函数被调用
    //此函数中计算新的宽度与高度并将其保存在组件的状态机变量中
    //event 对应的值为 : {nativeEvent: {layout: {x, y, width, height}}}
    onImageLayout(event) {
        let layout=event.nativeEvent.layout;//获取layout
        //按照如果布局比图片小, 图片不会放大,不处理
        if(layout.width<=this.props.originalWidth) return;
        if(layout.height<=this.props.originalHeight) return;
        // 图片宽高比
        let originalAspectRatio=this.props.originalWidth/this.props.originalHeight;
        let currentAspectRatio=layout.width/layout.height;
        // 如果比例一样 不处理, 图片会自动放大
        if(originalAspectRatio===currentAspectRatio) return;
        if(originalAspectRatio>currentAspectRatio){// 图片原宽度相对高略宽
            let newHeight=layout.width/originalAspectRatio; //减少控件高度
            this.setState({
                style:{
                    height:newHeight
                }
            });
            return ;
        }
        //图片原宽度相对高略窄 减少控件宽度
        let newWidth=layout.height*originalAspectRatio;
        this.setState({
            style:{
                width:newWidth
            }
        });
    }
    // {...this.props} 是JSX语法, 意思是将ImageEquallyEnlarge组件收到的props透传给Image组件
    render(){
        return(
            <Image {...this.props}
                style={[this.props.style,this.state.style]}
                onLayout={this.onImageLayout}
            />
        )
    }
}

// 声明必须要有的图片原始宽度与高度
ImageEquallyEnlarge.propTypes = {
    originalWidth: React.PropTypes.number.isRequired,
    originalHeight: React.PropTypes.number.isRequired
};