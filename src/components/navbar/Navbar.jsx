import Themetoggle from "../theme-toggle/Themetoggle";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Logo</div>
      <ul className="flex space-x-6 text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Services</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
      <Themetoggle />
    </nav>
  );
};

export default Navbar;
