import { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore";
import { Link } from "react-router-dom";

const Cart = ({ user }) => {

    const { cart, fetchCart, removeCartItem } = useProductStore();

    // For Multiple Product Purchase
    const lineTotal = (item) => Number(item.price) * Number(item.quantity ?? 1);
    // grand total
    const totalPrice = cart.reduce((sum, item) => sum + lineTotal(item), 0);

    useEffect(() => {
        if (user?.id) {
            fetchCart(user.id);
        }
    }, [user, fetchCart]);

    return (
        <div className="pb-24 mt-10">
            {
                cart.length > 0 ? <>
                    <div className="ml-44 rounded-lg h-24 w-[1200px] bg-gradient-to-r from-cyan-500 to-blue-500 mb-10 ">
                        <h1 className="text-center font-semibold text-lime-400 text-4xl pt-5">MY CART</h1>

                    </div>
                    <div className="ml-40">
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>PRODUCT NAME</th>
                                        <th>PRODUCT IMAGE</th>
                                        <th>QTY</th>
                                        <th>UNIT PRICE</th>
                                        <th>TOTAL PRICE-(SAME ITEM)</th>
                                        <th>DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => (
                                        <tr key={item.cart_id}>
                                            <th>{index + 1}</th>
                                            <td>{item.product_name}</td>
                                            <td>
                                                <img src={item.image} alt={item.product_name} className="w-16 h-16 object-cover rounded" />
                                            </td>
                                            <td>{item.quantity}</td>
                                            <td>{Number(item.price).toFixed(2)} BDT</td>
                                            <td>{Number(item.price).toFixed(2)} * {item.quantity} = {lineTotal(item).toFixed(2)} BDT</td>
                                            <td>
                                                <button onClick={() =>
                                                    removeCartItem({ user_id: user.id, product_id: item.product_id })
                                                } className="btn btn-ghost btn-xl bg-red-500 text-xl">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>


                            </table>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mx-28 my-10  ">
                            <h2 className="text-2xl font-semibold">TOTAL ORDERS : {cart.length}</h2>
                            <div>
                                {
                                    cart.length ? <>
                                        <Link to='/payment'><button disabled={!cart.length} className="btn w-[400PX] ml-32  bg-gradient-to-r from-cyan-500 to-blue-500 text-white sm:btn-sm md:btn-md ">CHECKOUT</button></Link>
                                    </>
                                        :
                                        <>
                                            <h3 className="text-center font-semibold text-pink-600 text-3xl">YOU  HAVEN`T  ADDED  ANYTHING TO THE CART YET</h3>
                                        </>
                                }
                            </div>

                            <h2 className="text-2xl font-semibold">TOTAL PRICE : {totalPrice.toFixed(2)} BDT </h2>


                        </div>

                    </div>

                </> :
                    <>
                        <div className="pt-40  mb-10">
                            <h3 className="text-center font-semibold text-pink-600 text-3xl">YOU  HAVEN`T  ADDED  ANYTHING TO THE CART  YET</h3>
                        </div>
                    </>
            }





        </div>
    );
};

export default Cart;

// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../Hook/useAxiosSecure";
// import useCart from "../../../Hook/useCart";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { Link } from "react-router-dom";



// const Cart = () => {
//     const [cart, refetch] = useCart();
//     const totalPrice = cart.reduce((total, item) => total + item.price, 0)
//     const axiosSecure = useAxiosSecure();


//     const handleDelete = id => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "YOU WANT TO DELETE!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "YES!"
//         }).then((result) => {
//             if (result.isConfirmed) {

//                 axiosSecure.delete(`/carts/${id}`)
//                     .then(res => {
//                         if (res.data.deletedCount > 0) {
//                             refetch();
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "Your Cart Item Has Been Deleted.",
//                                 icon: "success"
//                             });
//                         }
//                     })
//             }
//         });
//     }
//     return (
//         <div >
//             {
//                 cart.length > 0 ? <>
//                     <div className="h-24 w-[1100px] bg-gradient-to-r from-cyan-500 to-blue-500 mb-20 ">
//                         <h1 className="text-center font-semibold text-white text-4xl pt-5">MY CART</h1>

//                     </div>


//                     <div className="ml-40">
//                         <div className="overflow-x-auto">
//                             <table className="table">
//                                 {/* head */}
//                                 <thead>
//                                     <tr>
//                                         <th>
//                                             #
//                                         </th>
//                                         <th>PRODUCT NAME</th>
//                                         <th>COMPANY</th>
//                                         <th>PRICE</th>
//                                         <th>DELETE</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         cart.map((item, index) => <tr key={item._id}>
//                                             <th>
//                                                 {index + 1}
//                                             </th>

//                                             <td>
//                                                 {item.product}
//                                             </td>
//                                             <td>
//                                                 {item.company}
//                                             </td>
//                                             <td>{item.price}</td>

//                                             <th>
//                                                 <button
//                                                     onClick={() => handleDelete(item._id)}
//                                                     className="btn btn-ghost btn-xl bg-red-500 text-xl"><RiDeleteBin6Line />
//                                                 </button>
//                                             </th>
//                                         </tr>)
//                                     }




//                                 </tbody>


//                             </table>
//                         </div>
//                     </div>
//                     <div>
//                         <div className="flex justify-between mx-28 my-10  ">
//                             <h2 className="text-2xl font-semibold">TOTAL ORDERS : {cart.length}</h2>
//                             <div>
//                                 {
//                                     cart.length ? <>
//                                         <Link to='/payment'><button disabled={!cart.length} className="btn w-[400PX]  bg-gradient-to-r from-cyan-500 to-blue-500 text-white sm:btn-sm md:btn-md ">CHECKOUT</button></Link>
//                                     </>
//                                         :
//                                         <>
//                                             <h3 className="text-center font-semibold text-pink-600 text-3xl">YOU  HAVEN`T  ADDED  ANYTHING TO THE CART YET</h3>
//                                         </>
//                                 }
//                             </div>

//                             <h2 className="text-2xl font-semibold">TOTAL PRICE : {parseFloat(totalPrice).toFixed(2)} BDT </h2>


//                         </div>

//                     </div>

//                 </> :
//                     <>
//                         <div className="pt-40  mb-10">
//                             <h3 className="text-center font-semibold text-pink-600 text-3xl">YOU  HAVEN`T  ADDED  ANYTHING TO THE CART  YET</h3>

//                         </div>
//                     </>
//             }





//         </div>
//     );
// };

// export default Cart;