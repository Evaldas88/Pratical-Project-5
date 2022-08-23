import React, { useState, useRef, useEffect } from "react";
import './List.css';
const List = () => {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const itemInput = useRef();
  // Affter reaload page takes info from localStorage

  useEffect(() => {
    const storageList = JSON.parse(localStorage.getItem("items"));
    if (storageList) {
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


    setNewItem({ name: e.target.value })


  };



  const handleClick = (e) => {
    e.preventDefault();
    itemInput.current.value = "";

    // this prevent for input dublicate and to add the  empty input 
    if (newItem !== "") {
      setItems([...items, newItem]);
      setNewItem("")
    };
  };

  const handleKeyDown = event => {

    if (event.key === 'Enter' && newItem !== "") {
      handleInput(event)
      handleClick(event)
    }
  };
  return (

    <div className="container mt-5 ">
      <div className="d-flex justify-content-center">
        <div className=" card  width text-bg-light text-center">
          <div className="card-body">
            <h1 className="card-title">To do list</h1>
            <div className="row p-3">
              <input
                id="input"
                type="text"
                className="form-control"
                ref={itemInput}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
              />
              <button className="btn btn-info" onClick={handleClick}>
                <span class="material-symbols-outlined">
                  arrow_forward_ios
                </span>              </button>
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
    </div>

  );
};

export default List;
