import React from 'react'
import {Link} from 'react-router-dom'
//import { context } from './api/context'
import Api from '../api/Api';
export default function Home() {
    const url = "http://localhost:3001/products";
    const res = Api(url);
    //const res = result.products;
  //console.log(res);
   
  return (
    <div className="container">
     <div className="row" style={{gap: "1rem"}}>
        {res?.map((value,index)=>
           //const title = value.title.substring(0,15);
           //const des = value.description.substring(0,15);
        <div className="col-sm-3" key={value.id}  >
            <div className="card">
               
                <img className="card-img-top" src={value.thumbnail} alt="Card image cap" style={{height:'200px'}}/>
                <div className="card-body">
                    <h5 className="card-title">{value.title.substring(0,15)?`${value.title.substring(0,15)}...`:value.title.substring(0,15)}</h5>
                    <p className="card-text">{value.description.substring(0,15)?`${value.description.substring(0,15)}...`:value.description.substring(0,15)}</p>
                    <Link to={`product/${value.id}`} className="btn btn-primary">Detail</Link>
                </div>
               
            </div>
        </div>
        
        )}
     </div>
    </div>
  )
}
