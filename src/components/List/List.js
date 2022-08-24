import React, { useState, useRef, useEffect } from "react";
import './List.css';
const List = () => {

  const [newList, setNewList] = useState("");
  const [items, setItems] = useState([]);
  const itemInput = useRef(null);
  const [itemErrorMsg, setItemErrorMsg] = useState("")

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
    setNewList({ name: e.target.value });
  };



  const handleClick = (e) => {
    e.preventDefault();
    itemInput.current.value = "";

    if (newList === "") {
      setItemErrorMsg("Can't leave the title blank");

    }
    else {
      let updateItem = JSON.stringify([...items, newList]);
      localStorage.setItem("items", updateItem);
      setNewList("")
      setItems([...items, newList]);
      setItemErrorMsg("")
    };
  };


  return (
    <div className="height-min mt-5">
      <div className="container p-5 d-flex justify-content-center mt-5">
        <div className=" card w-50 text-bg-light">
          <div className="card-body">
            <h1 className="card-title">To do list</h1>
            <form className="col-12 d-flex m-3 justify-content-center pe-3">
              <div className="col-5 ">

                <input
                  className="form-control"
                  ref={itemInput}
                  onChange={handleInput}
                />              {itemErrorMsg && <p className="text-danger">{itemErrorMsg}</p>}

              </div>

              <div>
                <button className="btn purpleButton  ms-3" onClick={handleClick}>
                  <span class="material-symbols-outlined">arrow_forward_ios</span>
                </button>
              </div>
            </form>
            <ul className="list-group ">
              {items.length > 0 ? (
                items.map((items, index) => (
                  <li key={index} className="list-group-item mt-2">
                    {items.name}
                    <button className="btn purpleButton float-end" 
                    onClick={() => { deleteItem(index); }}>X</button>
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
