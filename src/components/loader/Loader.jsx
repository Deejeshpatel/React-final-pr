const Loader = () => {
    return (
        <div role="status" className=" absolute ">
            <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-pink-200 animate-spin fill-pink-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >]
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default Loader;
 