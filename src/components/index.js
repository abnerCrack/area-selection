import React,{ PureComponent } from 'react'
import Content from './high-order';
import Tab from './tab';

export default class AreaSelection extends PureComponent{
    state = {
        filter:'热门'
    }

    handleMouseEnter= (filter) => (e) => {
        e.preventDefault()
        this.setState({filter})
    }
    handleMouseLeave = (e) =>{
        e.preventDefault()
        this.setState({filter:'热门'})
    }
    render(){
        const { filter } = this.state;
        const { citys } = this.props;
        const allFilter = Object.keys(citys)
        const foucusCitys = citys[filter]
        return <div className="area-selection-wraper">
            <header className = 'header'>
                <div className="search"></div>
                <Tab handleMouseEnter = {this.handleMouseEnter} handleMouseLeave = {this.handleMouseLeave} allFilter = {allFilter} />
            </header>
            <Content filter = {filter} foucusCitys = {foucusCitys}  />
        </div>
    }
}