import React, { Component } from 'react';

class DropdownItem extends Component {
    constructor(props) {
        super(props);
    }

    handleItemClick(item){
        this.props.whenItemClick(item)
    }
    render() {
        return (
            <div>
                <a className="dropdown-item" onClick ={this.handleItemClick.bind(this,this.props.text)}>{this.props.text}</a>
            </div>
        );
    }
}

export default DropdownItem;