function App() {
  return <div>
    <center class="todo-container">
    <h1>TODO App</h1>
    <div class="row">
      <div className="col-6">
        <input type="text"placeholder="Enter todo here
        " /></div>

        <div className="col-4">
        <input type="date" />
        </div>

          <div className="col-2"><button type="button" 
          class="btn btn-success">Add</button></div>
          

          <div className="col-6">
        
          buy milk</div>

        <div className="col-4">
        10/09/2024
        </div>
        <div className="col-2"><button type="button" class="btn btn-danger">Delete</button></div>

          
          
          <div className="col-6">
          go to college
        </div>

        <div className="col-4">
        10/09/2024
        </div>

          <div className="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
          

          
          
          </div></center>
    </div>
}
export default App;