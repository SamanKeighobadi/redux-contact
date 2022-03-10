import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-sky-400">
      <div className="flex items-center justify-between flex-wrap px-6 h-16">
        <h1 className="lg:text-2xl xl:text-2xl md:text-2xl sm:text-xl text-lg  font-semibold text-sky-100">
          Redux Contact App
        </h1>
        <button className="text-sky-100  rounded-lg px-2 py-1">
          <Link to={"/addContact"} >Add Contact</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
