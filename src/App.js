import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [totalField, setTotalField] = useState(Number(1));
  const [fieldData, setFieldData] = useState([{ name: "", age: "" }]);
  const [disabledField, setDisabledField] = useState(false);

  const handleTotal = () => {
    updateField();
    setDisabledField(true);
  };

  const updateField = () => {
    const cloneFieldData = [];

    for (let i = 0; i < totalField; i++) {
      cloneFieldData.push({ name: "", age: "" });
    }

    setFieldData(cloneFieldData);
  };

  const addOneField = () => {
    setTotalField((prevTotal) => prevTotal + 1);

    console.log(totalField);

    const cloneFieldData = [...fieldData];

    cloneFieldData.push({ name: "", age: "" });

    setFieldData(cloneFieldData);
  };

  const handleName = (e, index) => {
    const cloneFieldData = [...fieldData];
    cloneFieldData[index].name = e.target.value;
    setFieldData(cloneFieldData);
  };

  const handleAge = (e, index) => {
    const cloneFieldData = [...fieldData];
    cloneFieldData[index].age = e.target.value;
    setFieldData(cloneFieldData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDelete = (index1) => {
    if (totalField === 1) return;

    setTotalField((prevNumber) => prevNumber - 1);

    const cloneFieldData = [...fieldData];

    const selectedData = cloneFieldData.filter((clone, index) => {
      return index !== index1;
    });

    setFieldData(selectedData);
  };

  return (
    <div className="App">
      <div>Total Input</div>

      {disabledField ? (
        <>
          {" "}
          <input
            value={totalField}
            type="text"
            disabled
            onChange={(e) => setTotalField(e.target.value)}
          />
          <button disabled style={{ margin: "0px 10px" }} onClick={handleTotal}>
            Save
          </button>
        </>
      ) : (
        <>
          <input
            value={totalField}
            type="text"
            onChange={(e) => setTotalField(e.target.value)}
          />
          <button style={{ margin: "0px 10px" }} onClick={handleTotal}>
            Save
          </button>
        </>
      )}

      <form onSubmit={handleSubmit}>
        {fieldData.map((field, index) => {
          return (
            <div style={{ margin: "20px 0px" }} key={index}>
              <div>
                <div style={{ textAlign: "left" }}>Person {index + 1}</div>

                <input
                  type="text"
                  placeholder="Name"
                  value={field.name}
                  onChange={(e) => handleName(e, index)}
                />

                <input
                  type="text"
                  placeholder="Age"
                  value={field.age}
                  onChange={(e) => handleAge(e, index)}
                  style={{ margin: "0px 10px" }}
                />

                <button onClick={() => handleDelete(index)}> Delete </button>
              </div>
            </div>
          );
        })}
        <button onClick={addOneField}> Add Passenger ( + )</button>

        <div style={{ margin: "20px 0px" }}>
          <button type="submit">Submit</button>
        </div>
      </form>

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
