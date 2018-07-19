import React,{ PureComponent } from 'react'

export default class Block extends PureComponent{
    render(){
        const { city } = this.props;
        return <div className="city">
            {city.display}
        </div>
    }
}



