  
import React from 'react';
import './App.css';
import Carousel from './Components/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class App extends React.Component {
  constructor(props){
    super (props);

    this.state = {
      products: [],
      inputValue: "" 
    }
  }
  
    handleChange(e){
      console.log(e.target.value)


      this.setState({
        inputValue: e.target.value
      })
    }

   async handleClick(){
    const searchValue = this.state.inputValue   
    const getCarouselData = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}&limit=8`)
    const getCarouselDataJson = await getCarouselData.json()
    
    console.log(getCarouselDataJson);

    this.setState({
      products: getCarouselDataJson.results 
    })

    }



  render() {
    return (
      <div>
        <div className='searchEngine'>
        <input className='input' type='text' onChange={(e)=> this.handleChange(e)} placeholder='Type here...'/>
       <button className='search' onClick={() => this.handleClick()}><FontAwesomeIcon className="iconSearch" icon={faSearch} />Search</button>
        </div>
       
       <Carousel title={this.state.inputValue} products={this.state.products} />
      </div>
    );
  }
}


export default App;