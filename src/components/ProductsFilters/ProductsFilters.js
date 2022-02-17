import React from 'react';
import styles from '../../common/styles/Headers.module.scss';

class ProductsFilters extends React.Component {

    handleSearchPhraseChange = (event) => {
        this.props.setSearchPhrase( event.target.value ) 
    }

    handleSelectProductCategory = (event) => {
        this.props.setSearchProductCategory( event.target.value )
    }
    handleSelectFoodProducts = (event) => {
        this.props.setSearchFoodProducts( event.target.checked )
    }


    getUniqueProductCategory = () => {
        const { products } = this.props;
        const ProductCategoryList = products.map((product) => product.kategoria)
        const uniqueProductCategoryList = [...new Set(ProductCategoryList)];
        return uniqueProductCategoryList
    }

    render(){
        const uniqueProductCategory = this.getUniqueProductCategory();
        const { searchPhrase, searchFoodProducts } = this.props;

    return (
        <div className={styles.Wrapper}>
            
            <p>Wyszukaj produkt:</p>
            <input value={searchPhrase} 
            onChange={this.handleSearchPhraseChange}>
            </input>
            
            <p> Kategoria Produktu </p>
                <select onChange={this.handleSelectProductCategory}>
                    <option 
                    key={'all'} 
                    value={''}>Wszystkie kategorie
                    </option>
                    {uniqueProductCategory.map((kategoria) =>
                    <option 
                    key={kategoria} 
                    value={kategoria}>{kategoria}
                    </option>)}
                </select>

            <p> Produkty spożywcze </p>
                <input type='checkbox' 
                onChange={this.handleSelectFoodProducts} 
                value={searchFoodProducts} >
                </input>  
        </div>
      );
  };
}
  export default ProductsFilters;