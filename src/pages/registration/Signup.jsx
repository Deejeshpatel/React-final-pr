/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    /**========================================================================
     *                          User Signup Function 
    *========================================================================**/

    const userSignupFunction = async () => {
        // validation 
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user reference
            const userReference = collection(fireDB, "user");

            // Add User Detail
            await addDoc(userReference, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            });

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Signup Failed");
        }
    }

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            {loading && <Loader />}
            {/* Signup Form  */}
            <div className="signup_form bg-white px-10 py-8 border border-gray-300 rounded-lg shadow-lg w-full max-w-md">

                {/* Top Heading  */}
                <div className="mb-6 text-center">
                    <h2 className='text-3xl font-semibold text-gray-800'>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder='Full Name'
                        value={userSignup.name}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                name: e.target.value
                            })
                        }}
                        className='bg-gray-50 border border-gray-300 px-4 py-3 w-full rounded-md outline-none placeholder-gray-500 focus:ring-2 focus:ring-pink-300'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={userSignup.email}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                email: e.target.value
                            })
                        }}
                        className='bg-gray-50 border border-gray-300 px-4 py-3 w-full rounded-md outline-none placeholder-gray-500 focus:ring-2 focus:ring-pink-300'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userSignup.password}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                password: e.target.value
                            })
                        }}
                        className='bg-gray-50 border border-gray-300 px-4 py-3 w-full rounded-md outline-none placeholder-gray-500 focus:ring-2 focus:ring-pink-300'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-4">
                    <button
                        type='button'
                        onClick={userSignupFunction}
                        className='bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 text-white w-full py-3 font-semibold rounded-md transition duration-200'
                    >
                        Signup
                    </button>
                </div>

                <div className="text-center">
                    <p className='text-gray-700'>Have an account? <Link className='text-pink-500 font-semibold' to={'/login'}>Login</Link></p>
                </div>

            </div>
        </div>
    );
}

export default Signup;
