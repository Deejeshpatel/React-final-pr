import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";

const categoryList = [
  { name: 'fashion' },
  { name: 'shirt' },
  { name: 'jacket' },
  { name: 'mobile' },
  { name: 'laptop' },
  { name: 'shoes' },
  { name: 'home' },
  { name: 'books' }
];

const AddProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate 
  const navigate = useNavigate();

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });

  // Add Product Function
  const addProductFunction = async () => {
    if (!product.title || !product.price || !product.productImageUrl || !product.category || !product.description) {
      return toast.error("All fields are required");
    }

    setLoading(true);
    try {
      const productRef = collection(fireDB, 'products');
      await addDoc(productRef, product);
      toast.success("Product added successfully");
      navigate('/admin-dashboard');
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading && <Loader />}
      <div className="bg-white px-10 py-8 border border-gray-200 rounded-xl shadow-lg w-full max-w-md">
        {/* Top Heading */}
        <h2 className="text-center text-3xl font-bold text-pink-600 mb-8">
          Add Product
        </h2>

        {/* Input for Title */}
        <div className="mb-4">
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            placeholder="Product Title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder-gray-400"
          />
        </div>

        {/* Input for Price */}
        <div className="mb-4">
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            placeholder="Product Price"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder-gray-400"
          />
        </div>

        {/* Input for Image URL */}
        <div className="mb-4">
          <input
            type="text"
            name="productImageUrl"
            value={product.productImageUrl}
            onChange={(e) => setProduct({ ...product, productImageUrl: e.target.value })}
            placeholder="Product Image URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder-gray-400"
          />
        </div>

        {/* Select for Category */}
        <div className="mb-4">
          <select
            value={product.category}
            onChange={(e) => setProduct({ ...product, category: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none bg-white text-gray-600"
          >
            <option value="" disabled>Select Product Category</option>
            {categoryList.map((value, index) => (
              <option key={index} value={value.name} className="first-letter:uppercase">
                {value.name}
              </option>
            ))}
          </select>
        </div>

        {/* Input for Description */}
        <div className="mb-6">
          <textarea
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            name="description"
            placeholder="Product Description"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder-gray-400"
          />
        </div>

        {/* Add Product Button */}
        <button
          onClick={addProductFunction}
          type="button"
          className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProductPage;
