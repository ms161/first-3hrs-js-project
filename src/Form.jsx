import { useState } from "react";
const Form = (props) => {
  // let data=[{}]
  const [id, setId] = useState("");
  const [price, setPrice] = useState();
  const [price2, setPrice2] = useState(0);

  const [name, setName] = useState();
  const [details, setDetails] = useState([]);

  const idHandler = (e) => {
    setId(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
    // setPrice2(e.target.value)
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
 
  let data = {
    id: id,
    price: price,
    name: name,
  };

  function submitHandler() {
   
    setPrice2((p) => {
      return parseInt(p) + parseInt(price);
    });
    setDetails((p) => {
      return [data, ...p];
    });
    // console.log(data)
    let newObj = JSON.stringify(data);
    localStorage.setItem(data.id, newObj);
    console.log(details);

    console.log(price2);
    console.log(data)
  }
  console.log(price2);

  function deleteHandler(e) {
    let delObj = JSON.parse(e.target.value);
    // let del = JSON.parse(e.target.value);
    console.log(delObj);
    e.target.parentElement.remove();
setPrice2((p)=>{
    return parseInt(p)-delObj.price
})
    localStorage.removeItem(delObj.id)
  }

  return (
    <>
      <label htmlFor="id">Product Id</label>
      <input onChange={idHandler} type="text" id="id" />
      <label htmlFor="price"> Selling Price </label>
      <input onChange={priceHandler} type="number" id="price" />
      <label htmlFor="pname"> Product Name</label>
      <input onChange={nameHandler} type="text" id="pname" />
      <button type="submit" onClick={submitHandler}>
        Add product
      </button>
      <h1>Products</h1>
      {details.map((element) => (
        <div>
          <div>
            {" "}
            {element.price}- {element.name}{" "}
            <button value={JSON.stringify(element)} onClick={deleteHandler}>
              delete
            </button>
          </div>

          <div> </div>
        </div>
      ))}

      <h3>Total value of products: rs {price2} </h3>
    </>
  );
};
export default Form;
