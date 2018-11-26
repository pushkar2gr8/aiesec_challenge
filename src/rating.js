import React, { Component } from 'react';
import Rating from "react-rating"

class rating extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <Rating 
                    initialRating={this.props.rate}
                    readonly
                    onChange={data => alert(data)}
                    emptySymbol={<img style={{height:24, width:24}} src="./unrated.png" className="icon" />}
                    fullSymbol={<img style={{height:24, width:24}} src="./rated.png" className="icon" />}/>
            </div>
        );
    }
}

export default rating;