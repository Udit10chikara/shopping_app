import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import Api from '../api/Api';
import '../css/product.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Detail() {
    const {id} = useParams();
    const url = "http://localhost:3001/products/"+id;
    const product = Api(url);
    const [cart,setCart] = useState({Bag:[]})
    //console.log(product);
    const dispatch = useDispatch();
    const Favourite=(product)=>{
       if(localStorage.getItem('cart')!=undefined){
        var arr = JSON.parse(localStorage.getItem('cart'));
        if(arr.includes(id)){
          //alert("Already added exits");
          toast.error("Already added !", {
            position: "top-center",
          }); 
        }
        else{
            arr.push(id);
            localStorage.setItem('cart',JSON.stringify(arr));
            dispatch({type:'ADDCART',payload:product})
            //dispatch({type:'total'})
            //setCart({Bag:product});
            //alert("Add to cart succesfully");
            toast.success("Add to cart succesfully !", {
                position: "top-right",
              }); 
        }
       }
       else{
        let arr = [];
        arr.push(id);
        localStorage.setItem('cart',JSON.stringify(arr));
        dispatch({type:'ADDCART',payload:product})
        //dispatch({type:'total'})
        //setCart({Bag:product});
        //alert("Add to cart succesfully");
        toast.success("Add to cart succesfully !", {
            position: "top-right",
          }); 
       }
    }
  return (
    <div>
    
    <div className="container">
    <div className="col-lg-8 border p-3 main-section bg-white">
        
        <div className="row m-0">
            <div className="col-lg-4 left-side-product-box pb-3">
                <img src={product.thumbnail} className="border p-3"/>
                 {/* <span className="sub-img">
                    
                    <img src="http://nicesnippets.com/demo/pd-image2.jpg" className="border p-2"/>
                    <img src="http://nicesnippets.com/demo/pd-image3.jpg" className="border p-2"/>
                    <img src="http://nicesnippets.com/demo/pd-image4.jpg" className="border p-2"/>
                </span>  */}
            </div>
            <div className="col-lg-8">
                <div className="right-side-pro-detail border p-3 m-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <span>{product.title}</span>
                        </div>
                        <div className="col-lg-12">
                            <p className="m-0 p-0 price-pro">{product.price}</p>
                            <hr className="p-0 m-0"/>
                        </div>
                        <div className="col-lg-12 pt-2">
                            <h5>{product.brand}</h5>
                            <span>{product.description}</span>
                            <hr className="m-0 pt-2 mt-2"/>
                        </div>
                        <div className="col-lg-12">
                            <p className="tag-section"><strong>Tag : </strong>{product.category}</p>
                            <p className="tag-section"><strong>Rating : </strong>{product.rating}</p>
                        </div>
                        <div className="col-lg-12">
                            <h6>Quantity : {product.quantity} </h6>  
                            {/* <input type="number" className="form-control text-center w-100" value="1"/> */}
                        </div>
                        <div className="col-lg-12 mt-3">
                            <div className="row">
                                <div className="col-lg-6 pb-2">
                                    <button className="btn btn-danger w-100" onClick={()=>Favourite(product)}>Add To Cart</button>
                                </div><ToastContainer />
                                <div className="col-lg-6">
                                    {/* <a  className="btn btn-success w-100">Shop Now</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* <div className="row">
            <div className="col-lg-12 text-center pt-3">
                <h4>More Product</h4>
            </div>
        </div>
        <div className="row mt-3 p-0 text-center pro-box-section">
            <div className="col-lg-3 pb-2">
                <div className="pro-box border p-0 m-0">
                    <img src="http://nicesnippets.com/demo/pd-b-image1.jpg"/>
                </div>
            </div>
            <div className="col-lg-3 pb-2">
                <div className="pro-box border p-0 m-0">
                    <img src="http://nicesnippets.com/demo/pd-b-images2.jpg"/>
                </div>
            </div>
            <div className="col-lg-3 pb-2">
                <div className="pro-box border p-0 m-0">
                    <img src="http://nicesnippets.com/demo/pd-b-images3.jpg"/>
                </div>
            </div>
            <div className="col-lg-3 pb-2">
                <div className="pro-box border p-0 m-0">
                    <img src="http://nicesnippets.com/demo/pd-b-images4.jpg"/>
                </div>
            </div>
        </div>   */}
        
    </div>
    
</div>
</div>
  )
}
