import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="pt-10 pb-5">
            <div className="lg:w-[500px] lg:h-[700px] sm:w-[400px] sm:h-[550px] bg-gray-600 lg:ml-[500px] sm:ml-0  mb-10 rounded-xl">
                
                <div className=" pt-10">
                    <h2 className="text-center text-2xl font-bold text-white mb-2">WELCOME TO HEALTH HAVEN</h2>
                    <p className="text-center text-xl font-semibold text-black">Register to your account </p>
                </div>
                <form  className="pt-8 lg:pl-12 sm:pl-0">
                    <div className=" lg:w-[400px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="name" placeholder="Your Name" required name="name" />
                    </div>
                    <br />
                    <div className=" lg:w-[400px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="email" placeholder="Your Email" required name="email" />
                    </div>
                    <br />
                    <div className="flex ">
                        <div className="w-[400px] " >
                            <input className="text-black rounded-lg text-center w-full     h-[50px]" placeholder="password" required
                                type= "text"  name="password" />
                        </div>
                        <div className="mt-3  ">
                            <span className="" >
                                {
                                     <FaEyeSlash className="w-10 h-5"></FaEyeSlash> 
                                }
                            </span>
                        </div>
                    </div>


                    <br />
                    <div className=" lg:w-[400px] sm:w-[250px] h-[50px] ">
                        <input className="w-full h-full text-center rounded-lg" type="text" placeholder="Enter Your Photo URL" required name="PhotoURL" />
                    </div>
                    <br />

                    
                    <div>
                        <label className="form-control  lg:w-[400px] sm:w-[250px] h-[50px]">
                           
                           <select 
                            required 
                           className="select select-bordered">
                               
                               <option className="text-center  text-xl">user</option>
                               <option className="text-center  text-xl">seller</option>
                               
                           </select>
                           
                       </label>
                        
                    </div>


                    <br />
                    <div className=" lg:w-[400px] sm:w-[250px]]  h-[50px] bg-lime-400 rounded-2xl">
                        <button className="w-full h-full text-white"> Register</button>
                    </div>
                </form>
                {
                     <p className="text-red-700 text-center text-xl font-semibold mt-5"></p>
                }
                {
                     <p className="text-green-500 text-center text-xl font-semibold mt-5"></p>
                }
                <br />
                <div className="flex  ml-[240px]   ">
                    <div  >
                        <button  className=" mr-8    text-center pt-1 "><FcGoogle className="w-10 h-10"></FcGoogle></button>
                    </div>

                </div>
                <div>
                    <h3 className="text-center text-xl font-medium text-amber-600">Already Have An Account? <Link to={"/login"}><span className="text-lime-300" >LOGIN</span></Link></h3>
                </div>
                <div>

                </div>
            </div>
        </div>

    );
};

export default SignUp;