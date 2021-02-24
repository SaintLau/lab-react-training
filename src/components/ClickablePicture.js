import { render } from '@testing-library/react';
import React from 'react';

class ClickablePicture extends React.Component {
    state = {
        img: this.props.img 
    }

    //create function to click
    handleIncrementClick = () => {
       this.setState((state) => {
           return {
            img: state.img === this.props.img 
            ? this.props.imgClicked
            : this.props.img
           }
       })
    }
   
    render() {
        return(
            <div>
                < img src={this.state.img} onClick={this.handleIncrementClick} />
            </div>
        )
    }

}


export default ClickablePicture;