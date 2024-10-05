/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const userLoginFunction = async () => {
        // validation 
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required")
            return;
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            // console.log(users.user)

            try {
                const q = query(
                    collection(fireDB, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user));
                    setUserLogin({
                        email: "",
                        password: ""
                    });
                    toast.success("Login Successfully");
                    setLoading(false);
                    if(user.role === "user") {
                        navigate('/user-dashboard');
                    } else {
                        navigate('/admin-dashboard');
                    }
                });
                return () => data;
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    }

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            {loading && <Loader />}
            {/* Login Form  */}
            <div className="login_Form bg-white px-10 py-8 border border-gray-300 rounded-lg shadow-lg w-full max-w-sm">

                {/* Top Heading  */}
                <div className="mb-6 text-center">
                    <h2 className='text-3xl font-semibold text-gray-800'>
                        Login
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={userLogin.email}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value
                            })
                        }}
                        className='bg-gray-50 border border-gray-300 px-4 py-3 w-full rounded-md outline-none placeholder-gray-400 focus:ring-2 focus:ring-pink-300'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userLogin.password}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value
                            })
                        }}
                        className='bg-gray-50 border border-gray-300 px-4 py-3 w-full rounded-md outline-none placeholder-gray-400 focus:ring-2 focus:ring-pink-300'
                    />
                </div>

                {/* Login Button  */}
                <div className="mb-4">
                    <button
                        type='button'
                        onClick={userLoginFunction}
                        className='bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 text-white w-full py-3 font-semibold rounded-md transition duration-200'
                    >
                        Login
                    </button>
                </div>

                <div className="text-center">
                    <p className='text-gray-700'>Don't have an account? <Link className='text-pink-500 font-semibold' to={'/signup'}>Sign up</Link></p>
                </div>

            </div>
        </div>
    );
}

export default Login;
