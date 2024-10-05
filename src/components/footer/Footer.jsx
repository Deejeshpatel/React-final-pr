import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
           
            <footer className="text-gray-600 body-font bg-pink-600">
               
                <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                    
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <span className="text-xl font-bold">India-Mart</span>
                    </a>
                   
                    <div className=" font-medium justify-end justify-center text-white">
                        contect-number: +91 7229087192
                    </div>
                    
                </div>
            </footer>
        </div>
    );
}

export default Footer;