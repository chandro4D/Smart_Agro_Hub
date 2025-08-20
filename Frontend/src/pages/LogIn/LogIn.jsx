import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="pt-10 pb-5">
            <div className=" lg:w-[500px] sm:w-[350px] lg:h-[600px] sm:h-[500px] bg-lime-100  lg:ml-[500px]  mb-10 rounded-xl sm:ml-[0px]">
                

                <div className=" pt-12">
                    <h2 className="text-center text-2xl font-bold text-pink-400 mb-2">WELCOME TO <i>SMART AGRO HUB</i></h2>
                    <p className="text-center text-xl font-semibold text-black">Login To Your Account By Entering<br /> Your Email and Password</p>
                </div>
                <form  className="pt-10 lg:pl-12 sm:pl-0">
                    <div className=" lg:w-[400px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="email" placeholder="Your Email" required name="email" />
                    </div>
                    <br />
                    <div className=" lg:w-[400px] sm:w-[250px] h-[50px] ">
                        <input className="w-full h-full text-center rounded-lg" type="password" placeholder="Enter Your Password" required name="password" />
                    </div>

                    <br />

                    <div className=" lg:w-[400px] sm:w-[250px]  h-[50px] rounded-2xl">
                        <button className=" btn btn-outline btn-secondary w-full h-full text-white"> LOGIN</button>
                    </div>
                </form>
                <br />
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1450">
                    <h3 className="text-center text-2xl font-semibold text-yellow-600">Don`t Have An Account? <span className="text-lime-300"  > <Link to="/signup">Register</Link></span></h3>
                </div>
                <br />
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="divider divider-neutral text-xl font-medium ml-14 mr-14">
                        Continue With
                    </div>

                    <div className="flex  ml-[240px]   mt-6">
                        <div  >
                            <button  className=" mr-8    text-center pt-1 "><FcGoogle className="w-10 h-10"></FcGoogle></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default LogIn;