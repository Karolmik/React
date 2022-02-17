import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class ProductsList extends React.Component {
  render(){
    const {showProductsList, setShoppingList} = this.props;
    
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
      <p>Products List</p>
        <ul>
          {showProductsList.map((product) => <li onClick={()=> setShoppingList(prevState=>[...prevState,product])} key={product.nazwa}>{`${product.nazwa}`}</li>)}
        </ul>
      </header>
    </div>
  );
}
}
export default ProductsList;
