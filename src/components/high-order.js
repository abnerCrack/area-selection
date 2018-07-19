import React,{ PureComponent } from 'react'
import HotContent from './hot-content'
import Content  from './content'
// 没有静态方法 懒得拷贝
export function ContentPooxy(WrapComponent){
    return class ContentProxyComponent extends PureComponent {
        render(){
        const { filter  } = this.props;
        if( filter === '热门' ) return <HotContent {...this.props}/>
            return <WrapComponent {...this.props}/>
        }
    }
}

export default ContentPooxy(Content)