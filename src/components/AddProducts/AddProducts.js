import React, { useState } from 'react';
import styles from '../../common/styles/Headers.module.scss';


class AddProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nazwa: '',
            kategoria: '',
            produktSpozywczy: false,

        }
    }

    handleSubmit = (event) =>{
        const { setShowProducts } = this.props;
        event.preventDefault();
        setShowProducts(prevState=>[...prevState,this.state])
        
    }
    handleProductName = (event) => {
        this.setState({ nazwa: event.target.value })
    }
    handleProductCategory = (event) => {
        this.setState({ kategoria: event.target.value })
    }
    handleFoodProduct = (event) => {
        this.setState({ produktSpozywczy: event.target.checked })
    }


     render(){ 
         const {nazwa, kategoria, produktSpozywczy} = this.state;
    return (
        <div className={styles.Wrapper}>
            
            <form onSubmit={this.handleSubmit}>
            <label>
              Nazwa:
              <input type="text" value={nazwa} onChange={this.handleProductName} /><br></br>
            </label>
            <label>
              Kategoria:
              <input type="text" value={kategoria} onChange={this.handleProductCategory}/><br></br>
            </label>
            <label>
              Produkt spożywczy:
              <input type="checkbox" value={produktSpozywczy} onChange={this.handleFoodProduct} /><br></br>
            </label>
            <input type="submit" value="Dodaj" />
          </form>
          
          
        </div>
      );
    }
  };

  export default AddProducts;