import React, { useState, useEffect } from "react";

const List = () => {
  
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  // const itemInput = useRef();

// Affter reaload page takes info from localStorage

  useEffect(() => {
    const storageList  = JSON.parse(localStorage.getItem("items"));
    if (storageList){
    setItems(storageList);
  }
  }, []);

  // Adding imput value in localStorage

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

// Delete list value 

  const deleteItem = (index) => {

    items.splice(index, 1)
    setItems([...items]);

  };



  const handleInput = (e) => {

    setNewItem({name: e.target.value});
  };

//

  const handleClick = (e) => {
    e.preventDefault();
    setNewItem("")

    setItems([ ...items, newItem]);

  };

  return (
    <div className="container">
      <div className="card w-25 text-bg-light">
        <div className="card-body">
          <h1 className="card-title">To do list</h1>
          <div className="row p-3">
            <input
              id="input"
              type="text"
              className="form-control"
              // value={""}
              onChange={handleInput}
            />
            <button className="btn btn-secondary" onClick={handleClick}>
              Click me
            </button>
          </div>
          <ul className="list-group">
            {items.length > 0 ? (
              items.map((items, index) => (
                <li key={index} className="list-group-item">
                  {items.name}
                  <button className="btn btn-warning float-end" onClick={() => { deleteItem(index); }}>
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <div>No items found!</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
