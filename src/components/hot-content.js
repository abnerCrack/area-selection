import React,{ PureComponent } from 'react'
import Block from './block'
export default  class HotContent extends PureComponent{
    render(){
        const { foucusCitys } = this.props;
        return <section className = 'hot-content'>
            {  foucusCitys.map(((key,index) => <Block  city = {key} key = {`${index}`} />))}
        </section>
    }
}
