import React from 'react';
import './style.scss'



class Card extends React.Component {
    render() {
        console.log(this.props.product)
        return (
            <div className='cardWrapper'>
                <img src={this.props.product.thumbnail} />
                <p className='textoTitle'>Title: {this.props.product.title}</p>
                <p className='textoPrice'>Price:  {this.props.product.currency_id}$ {this.props.product.price}</p>
               
            </div>
        )
    }
}

export default Card