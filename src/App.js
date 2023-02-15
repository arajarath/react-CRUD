import "./styles.css";
import React, { useRef, useState } from "react";
export default function App() {
  const list = [
    // {
    //   id: 1,
    //   name: "Sachin",
    //   age: 45
    // },
    // {
    //   id: 2,
    //   name: "Dhoni",
    //   age: "38"
    // },
    // {
    //   id: 3,
    //   name: "Virat",
    //   age: 31
    // }
  ];
  const [lists, setList] = useState(list);

  const handleDelete = (id) => {
    const newList = lists.filter((list) => list.id !== id);
    setList(newList);
  };
  return (
    <div className="App">
      <div>
        <AddList setList={setList} />
        {lists && lists.length > 0 ? (
          <table>
            <tbody>
              {lists.map((items) => (
                <tr key={items.id}>
                  <td>{items.id}</td>
                  <td>{items.name}</td>
                  <td>{items.age}</td>
                  <td>
                    <button className="edit">Edit</button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(items.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "No data available"
        )}
      </div>
    </div>
  );
}

function AddList({ setList }) {
  const nameRef = useRef();
  const ageRef = useRef();
  const addHandler = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const age = e.target.elements.age.value;

    const newList = {
      id: Math.random(),
      name,
      age
    };

    setList((prevList) => {
      return prevList.concat(newList);
    });
    nameRef.current.value = "";
    ageRef.current.value = "";
  };
  return (
    <form onSubmit={addHandler}>
      <input
        type="text"
        name="name"
        placeholder="Enter name..."
        ref={nameRef}
      />
      <input type="text" name="age" placeholder="Enter age..." ref={ageRef} />
      <button className="add" type="submit">
        Add
      </button>
    </form>
  );
}
