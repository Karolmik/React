import React , { useState, useEffect } from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';
import products from "./common/consts/produkty"


function App() {
  
  const [showProducts, setShowProducts] = useState(products);
  const [shoppingList, setShoppingList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);
 
  const [searchPhrase, setSearchPhrase] = useState('');
  const [searchProductCategory, setSearchProductCategory] = useState('');
  const [searchFoodProducts, setSearchFoodProducts] = useState(false);

useEffect(()=>{
  if (searchPhrase || searchProductCategory || searchFoodProducts){
    let filteredProducts = showProducts.filter((product) => product.nazwa.includes(searchPhrase))
    if (searchProductCategory)
    {filteredProducts = filteredProducts.filter((product) => product.kategoria === searchProductCategory)}
    
    if(searchFoodProducts){
      filteredProducts = filteredProducts.filter((product) => product.produktSpozywczy === true)}
    setFilteredProducts(filteredProducts)
  } else {setFilteredProducts(null)}

},[searchPhrase, searchProductCategory, searchFoodProducts, showProducts])

console.log(searchProductCategory);

  return (
    <div className={styles.appWrapper}>
      <AddProducts  showProducts={showProducts} setShowProducts={setShowProducts}/>
      <ProductsFilters searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} searchProductCategory={searchProductCategory} setSearchProductCategory= {setSearchProductCategory} products={showProducts} searchFoodProducts= {searchFoodProducts} setSearchFoodProducts={setSearchFoodProducts} />
      
      <div className={styles.columnsWrapper}>
        <ProductsList showProductsList={filteredProducts ? filteredProducts: showProducts } setShoppingList={setShoppingList} />
        <ShopingList shoppingList = {shoppingList} setShoppingList = {setShoppingList}/>
      </div>
    </ div>
  );
}

export default App;
