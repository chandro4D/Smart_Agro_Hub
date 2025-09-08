import { useState } from "react";
import { useProductStore } from "../../store/useProductStore";

const UpdateProfile = ({ user }) => {
    const { updateProfile } = useProductStore();
    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        photo_url: user?.photo_url || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile(user.id, formData); // Pass updated data
    };

    return (
        <div className="flex justify-center gap-5 mx-auto pt-32 pb-36">
            <div className="lg:w-[650px] mr-8 pb-10 sm:w-[400px] lg:h-[420px] sm:h-[350px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <h2 className="text-center font-semibold text-4xl  font-mono tracking-widest 
                  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary pt-10">
                    YOUR PROFILE
                </h2>
                <h2 className="text-center font-semibold text-2xl  font-mono tracking-widest 
                  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary pt-4">
                    Your Name: {user.name || "Please Provide Your Name"}
                </h2>
                <h2 className="text-center font-semibold text-2xl  font-mono tracking-widest 
                  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary pt-4">
                    Your Email: {user.email || "Please Provide Your Email"}
                </h2>
                <h3 className="lg:ml-[130px] sm:ml-0 pt-5 pb-5 rounded-lg">
                    <img
                        className="w-[400px] h-[200px] rounded-lg"
                        src={
                            user.photo_url ||
                            "https://web.programming-hero.com/static/media/profileImage.934e5b10.png"
                        }
                        alt="Profile"
                    />
                </h3>
            </div>

            <div className="lg:w-[650px] lg:h-[420px] sm:w-[400px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg">
                <h2 className="text-center font-semibold text-4xl  font-mono tracking-widest 
                  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary pt-8">
                    UPDATE YOUR PROFILE
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="lg:ml-[130px] sm:ml-0 mt-10"
                >
                    <div className="lg:w-[400px] sm:w-[300px] h-[50px]">
                        <input
                            className="w-full h-full rounded-lg text-center"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div className="lg:w-[400px] sm:w-[300px] h-[50px]">
                        <input
                            className="w-full h-full text-center rounded-lg"
                            type="email"
                            placeholder="Enter Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div className="lg:w-[400px] sm:w-[300px] h-[50px]">
                        <input
                            className="w-full h-full text-center rounded-lg"
                            type="text"
                            placeholder="Enter Your Photo URL"
                            name="photo_url"
                            value={formData.photo_url}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div className="lg:w-[400px] sm:w-[300px] h-[50px] bg-lime-400 rounded-2xl">
                        <button
                            type="submit"
                            className="w-full h-full text-white"
                        >
                            UPDATE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
