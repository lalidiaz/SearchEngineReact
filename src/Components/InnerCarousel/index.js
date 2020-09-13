import React from 'react';
import './style.scss';
import Card from '../Card';


class InnerCarousel extends React.Component {

    

    render() {
        console.log(this.props.products)
        return (
            <div className='lasCards'>
                {this.props.products.map((product, key) => {
                    return (
                        <Card key={key} product={product} />
                    )   
                    
                })}
            </div>
        )
    }
}

export default InnerCarousel