import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux"
import {addToCart} from "./slice"

function App() {


  const state = useSelector((state)=> state)
  console.log(state);
  const dispatch = useDispatch()

  function addItemToCart(){
    dispatch(addToCart(([{id : 1}])))
  }

  return (
    <div className="App">
        <button onClick={addItemToCart}>add to cart</button>
    </div>
  );
}

export default App;
