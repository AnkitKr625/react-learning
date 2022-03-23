import { useState } from "react";

const UseState = () => {

  const initialItems = ['item1', 'item2'];

  const [newItems, setNewItems] = useState(initialItems);

  const addNewItem = () => {
    setNewItems([...newItems, `item${newItems.length+1}`]);
  }

  const removeParticularItem = (item) => {
    let items = newItems.filter((value) => {
      return  value != item;
    });
    setNewItems(items);
  }

  const removeItem = () => {
    let items = newItems.filter((value,index) => {
      return index < newItems.length-1;
    });
    setNewItems(items);
  }

  return (
    <section>
      {newItems.map((item,i) => {
        return(
          <div key={i}>
            <div> {item} </div>
            <button onClick={() => removeParticularItem(item)}>Remove Item</button>
          </div>
        )
      })}
      <button onClick={addNewItem}>Add Item</button>
      <button onClick={removeItem}>Remove Item</button>
    </section>
  )
}

export default UseState;