// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import SayHello from "./components/Hello";
// import ButtonV2 from './components/ButtonV2';
// import "./components/ButtonV2/ButtonV2.css"
// import { FaShoppingCart, FaPhone } from "react-icons/fa";
// import ProductsList from './components/ButtonV2/ProductList';
// import ProductsList2 from './components/ButtonV2/ProductList2';
// import ButtonSocial from './components/ButtonV2/ButtonSocial';
// import { FaApple, FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import './App.css'
import MyCV from './components/ButtonV2/MyCV'
import ProductList from './components/ButtonV2/ProductList';
import TodoList from './components/ButtonV2/TodoList'
import TodoListItem from './components/ButtonV2/TodoListItem';


// const todos = [
//   { id: 1, text: "Quet nha", },
//   { id: 2, text: "Giat quan áo", },
//   { id: 3, text: "nau com", },
//   { id: 4, text: "Xem tivi"},
//   { id: 5, text: "Di ngu" },
// ];


function App() {

  return (
    <div className='bg-slate-300 py-20'>
      {/* <TodoList>
        {
          todos.map((todo,index)=>{
            return(
              <TodoListItem text={todo.text}/>
            )
          })
        }
      </TodoList> */}
      {/* <img src="https://github.com/nhannn87dn/Learn-ReactJs-Basic/raw/main/1.Lessions/Session-02-JSX-Components-Props/img/thing-component.png" alt="" />
      <ButtonV2 icon={<FaShoppingCart/>} label='Add to cart'/>
      <ButtonV2 icon={<FaPhone/>} type="button_dark" label='Call for more'/> */}


      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <ProductsList/>
    <ProductsList2/>
    <div className="flex flex-col gap-y-5 items-center mt-20">
        <ButtonSocial icon={<FaApple />} label="Apple" />
        <ButtonSocial varian="outline" icon={<FaGoogle />} label="Google" />
        <ButtonSocial varian="outline" icon={<FaFacebook />} label="Facebook" />
        <ButtonSocial varian="success" icon={<FaGithub />} label="Github" />
      </div> */}
      {/* <ProductList/> */}
      <div className="container mx-auto w-[940px] bg-slate-100	">
        <MyCV />
        
      </div>



    </div>
  )
}

export default App
