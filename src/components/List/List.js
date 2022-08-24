import React, { useState, useRef, useEffect } from "react";
import './List.css';
const List = () => {

  const [newList, setNewList] = useState("");
  const [items, setItems] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false)

  const itemInput = useRef(null);

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

  const handleEdit = (index) => {
    let newName = prompt("Edit task");
    const editedItems = JSON.parse(localStorage.getItem("items"));
    editedItems[index].name = newName;
    setItems(editedItems);
  };


  const handleClick = (e) => {
    e.preventDefault();
    itemInput.current.value = "";

    if (newList !== "") {
      setNewList("")

      setItems([...items, newList]);
      setErrorMsg(false)
    }
    else {
      setErrorMsg(true)
    };
  };

 
  return (
    <div className="height-min mt-5">
      <div className="container p-5 d-flex justify-content-center mt-5">
        <div className=" card w-50 text-bg-light">
          <div className="card-body">
            <h1 className=" card-title p-5">What's the Plan for Today?</h1>
            <form className="col-12 d-flex m-3 justify-content-center pe-3">
              <div className="col-5 ">
                <input
                  className="form-control"
                  ref={itemInput}
                  onChange={handleInput}
                />
                {errorMsg && <div className="text-danger">Please fill the input field</div>}
              </div>
              <div>
                <button className="btn  button-collor ms-3" onClick={handleClick}>
                  <span className="material-symbols-outlined">arrow_forward_ios</span>
                </button>
              </div>
            </form>
            <ul className="list-group ">
              {items.length > 0 ? (
                items.map((items, index) => (
                  
                  <li key={index} className="list-group-item mt-2">
                    {items.name}
                    <button className="btn button-collor float-end"
                      onClick={() => { deleteItem(index); }}>X</button>
                    <button onClick={() => { handleEdit(index); }}
                      className="btn button-collor  float-end mx-2">
                      Edit
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
