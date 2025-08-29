import Navbar from "./components/navbar/Navbar";
import Forms from "./pages/forms/Forms";
import ReactFundamentals from "./pages/react-fundamentals/ReactFundamentals";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 ">
        <ReactFundamentals />
        <Forms />
      </div>
    </>
  );
};

export default App;
