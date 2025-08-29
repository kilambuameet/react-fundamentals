import Navbar from "./components/navbar/Navbar";
import ReactFundamentals from "./pages/react-fundamentals/ReactFundamentals";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 ">
        <ReactFundamentals />
      </div>
    </>
  );
};

export default App;
