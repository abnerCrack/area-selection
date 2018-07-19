import React,{ PureComponent } from 'react'

export default class Tab extends PureComponent{
    render(){
        const { allFilter,handleMouseEnter,handleMouseLeave} = this.props;
        return  <div className="tab-list">
            {allFilter.map((key,index) => <div 
                key={`${index}`} className="tab">
                <a 
                    onMouseEnter = { handleMouseEnter(key) } 
                    onMouseLeave = { handleMouseLeave } 
                    className="tab-link">{key}>
                </a>
            </div>)}
        </div>
    }
}
