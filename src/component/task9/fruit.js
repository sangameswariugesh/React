import React,{useState} from "react";
import Menu from "../menu/menu";
import './fruit.css';
import img1 from './ma3.gif'
import img2 from './ma4.gif'
export function Eat(){
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    return(
        <>
        <Menu/>
         <div className="ga container-fluit row"> 
         <div className="col-lg-2">
         </div>
         <div className="col-lg-8 bg-light">

        <div className="col-lg-12 cl"><h3 className="text-warning"> santhiya ate  {count} mangoes  {count1}  bananas</h3></div>

        <div className="row">
        <div className="col-lg-6 cl">
        <img src={img1}className="col-12"/>
        <button onClick={()=>{setCount(count+1)}} className="bg-success">Eat mango</button>
        </div>

        <div className="col-lg-6 cl">
        <img src={img2} className="col-12"/>
        <button onClick={()=>{setCount1(count1+1)}} className="bg-success">Eat banana</button>
         </div>
         </div>
         </div>
         <div className="col-lg-2"></div>
         </div>
        </>
    );
}
