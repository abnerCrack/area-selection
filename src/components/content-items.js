import React,{ PureComponent } from 'react'
import Block from './block'
export default class ContentItem extends PureComponent{
    render(){
        const { filter ,foucusCitys } = this.props;
        const allItems = foucusCitys.filter((key)=> key.group ===filter)
        return <section className = 'content-item'>
            <h3>{filter}</h3>
            <section>
                { allItems.map((city,index)=><Block city = {city} key = {`${index}`}/>)}
            </section>
        </section>
    }
}
