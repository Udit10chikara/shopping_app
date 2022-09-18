import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
//import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';
//import { getValue } from '@testing-library/user-event/dist/utils';
export default function Cart() {
    const cart = useSelector((state)=>state.cartData);
    const totalAmount = useSelector((state)=>state.totalAmount);
    //const lcl = JSON.parse(localStorage.getItem('cart'));
    
    const [discount,setDiscount] = useState(100);
    const dispatch = useDispatch();
    const increment=(id)=>{
        dispatch({type:'INC',payload:id})
        
    }
    
    useEffect(()=>{
      dispatch({type:'total'})
    },[cart])

    const decrement=(id)=>{
      dispatch({type:'DEC',payload:id})
      
    }
    
     const Delete=(id)=>{
      toast.error("Remove item from cart!", {
        position: "top-right",
      });
      
      dispatch({type:'DLT',payload:id})
        let storageItem=JSON.parse(localStorage.getItem('cart'));
        let fl=storageItem.filter(fl=>fl!=id);
        localStorage.setItem('cart',JSON.stringify(fl))
        
      
    }
  return (
    <div>
    <section className="h-100 h-custom" style={{backgroundColor: ""}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="card card-registration card-registration-2" style={{borderRadius: "10px"}}>
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-8">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                      <h6 className="mb-0 text-muted"> items</h6>
                    </div>
                    <hr className="my-4"/>
  
                    <div className="row mb-4 d-flex justify-content-between align-items-center" style={{gap:"1rem"}}>
                       {cart.map((val,i)=>
                        <div className="row" key={val.id}>
                            <div className="col-md-2 col-lg-2 col-xl-2">
                                <img src={val.thumbnail} className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">{val.title}</h6>
                                
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 col-xl-3">
                                <button className="btn btn-link px-2" onClick={()=>decrement(val.id)}> - </button>
                                <button className="btn btn-link px-2" >{val.quantity}</button>
                                <button className="btn btn-link px-2" onClick={()=>increment(val.id)}> + </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">{val.price*val.quantity}</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                {/* <a href="#!" className="text-muted"><i className="fa fa-trash"></i></a> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" onClick={()=>Delete(val.id)} color="red"  viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>

                            </div><ToastContainer />
                      </div>
                      
                      )}
                    </div>
  
                    <hr className="my-4"/>
  
                    <div className="pt-5">
                      <h6 className="mb-0"><Link to="/" className="text-body"><i
                            className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</Link></h6>
                    </div>
                  </div>
                </div>
                <aside className="col-lg-3" style={{paddingTop:"25px"}}>
                <div className="card mb-3">
                    <div className="card-body">
                        <form>
                            <div className="form-group"> <label>Have coupon?</label>
                                <div className="input-group"> <input type="text" className="form-control coupon" name="" placeholder="Coupon code"/> <span className="input-group-append"> <button className="btn btn-primary btn-apply coupon">Apply</button> </span> </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                  
                    <div className="card-body">
                        <dl className="dlist-align">
                            <dt>Total price:</dt>
                            <dd className="text-right ml-3">{totalAmount}</dd>
                        </dl>
                        <dl className="dlist-align">
                            <dt>Discount:</dt>
                            <dd className="text-right text-danger ml-3">{totalAmount>2000?discount:0}</dd>
                        </dl>
                        <dl className="dlist-align">
                            <dt>Total:</dt>
                            <dd className="text-right text-dark b ml-3"><strong>{totalAmount>2000?totalAmount-discount:totalAmount}</strong></dd>
                        </dl>
                        <hr/> <a  className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a>
                    </div>
                 
                </div>
            </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      </div>  
    
  )
}
// const mapStateToProps=(state)=>{
//   return{
//     mycount:state.count
//   }
// }
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     increment:()=>{
//       alert('hi');
//        dispatch({type:"INC",payload:1})
//     }
//   }
// }
//export default connect(mapStateToProps, mapDispatchToProps)(Cart);
//export default Cart;