import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ShopingList(props) {
  const {shoppingList, setShoppingList} = props;
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
      <p>Shopping List</p>
        <ul>
        {shoppingList.map((product, index) => <li
         onContextMenu={(event)=>{
           event.preventDefault()
           setShoppingList(prevState=>prevState.filter((el,index1)=>{return index !== index1}))
          }}
         key={index}>{`${product.nazwa}`}</li>)}

        </ul>
      </header>
    </div>
  );
}

export default ShopingList;
