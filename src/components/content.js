import React,{ PureComponent } from 'react'
import ContentItem from './content-items'
export default class Content extends PureComponent{
    render(){
        const { filter } = this.props;
        const abbr = filter.split('')
        return <section className = 'content'>
            {  abbr.map((key,index) => <ContentItem {...this.props} filter = {key} key = {`${index}`} />)}
        </section>
    }
}
