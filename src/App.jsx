import Client from "./components/Client";
import Footer from "./components/Footer";
import Pacakages from "./components/Pacakages";
const App = () => {
  return (
    <div className="bg-white p-10 ">
      <Pacakages />
      <Client />
      <Footer />
    </div>
  );
};

export default App;
