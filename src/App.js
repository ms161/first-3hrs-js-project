import Form from "./Form";

function formData(data){
// console.log(`inside app  ${ data}`)
// console.log(data.name)
}

const App = () => {
  return (
    <div>
      <Form onClick={formData} ></Form>
      
    </div>
  );
};

export default App;
