import React from 'react';

class LikeButton extends React.Component {
    state = {
        count: 0,
    };

    handleIncrementClick = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

render() {
    return(

    <div class="likeButton">
        <button onClick={this.handleIncrementClick}>
            {this.state.count} Like
        </button>
    </div>
    
    )}

}

export default LikeButton;