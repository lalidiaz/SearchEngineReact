import React from 'react'
import './style.scss'
import InnerCarousel from '../InnerCarousel'


class Carousel extends React.Component{
    render(){
        console.log(this.props.products)
        return(
            <div class='carouselWrapper'>
            {/* <h2>{this.props.title}</h2> */}
            <InnerCarousel products={this.props.products} />
            </div>
        )
    }
}

export default Carousel