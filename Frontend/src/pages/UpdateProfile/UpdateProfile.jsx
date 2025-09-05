import { useProductStore } from "../../store/useProductStore";
const UpdateProfile = ({ user }) => {
    const { updateProfile } = useProductStore();
    return (
        <div className="flex justify-center gap-5 mx-auto pt-32 pb-36">

            <div className="lg:w-[650px] mr-8 pb-10 sm:w-[400px] lg:h-[400px] sm:h-[350px] bg-gradient-to-r from-cyan-500 to-blue-500  rounded-lg">
                <h2 className="text-center text-3xl font-bold text-emerald-100 pt-10"> YOUR PROFILE</h2>
                <h2 className="text-center text-2xl font-semibold text-sky-100 pt-4"> Your Name : {user.name || "Please Provide Your Name"}</h2>
                <h2 className="text-center text-2xl font-semibold text-sky-100 pt-4"> Your email : {user.email || "Please Provide Your Email"}</h2>
                <h3 className="lg:ml-[130px] sm:ml-0 pt-5 pb-5 rounded-lg"><img className="w-[400px] h-[200px] rounded-lg" src={user.photo_url || "https://web.programming-hero.com/static/media/profileImage.934e5b10.png"} /></h3>
            </div>
            <div className="lg:w-[650px] lg:h-[400px] sm:w-[400px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg">
                <h2 className="text-center text-3xl font-bold text-emerald-100 pt-8">UPDATE YOUR PROFILE</h2>
                <form className="lg:ml-[130px] sm:ml-0 mt-7">
                    <div className=" lg:w-[400px] sm:w-[300px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="name" placeholder="Your Name" required name="name" />
                    </div>
                    <br />
                    <div className=" lg:w-[400px] sm:w-[300px] h-[50px] ">
                        <input className="w-full h-full text-center rounded-lg" type="text" placeholder="Enter Your Email" required name="email" />
                    </div>
                    <br />
                    <div className=" lg:w-[400px] sm:w-[300px] h-[50px] ">
                        <input className="w-full h-full text-center rounded-lg" type="text" placeholder="Enter Your Photo URL" required name="PhotoURL" />
                    </div>
                    <br />
                    <div className=" lg:w-[400px] sm:w-[300px]  h-[50px] bg-lime-400 rounded-2xl">
                        <button onClick={() => updateProfile(user.id)} className="w-full h-full text-white">
                                UPDATE
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateProfile;