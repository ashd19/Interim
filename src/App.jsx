import Client from "./components/Client";
import Footer from "./components/Footer";
import Pacakages from "./components/Pacakages";
import Awards from "./components/Awards";
const App = () => {
  return (
    <div className="bg-white p-10 ">
      <Awards />
      <Pacakages />
      <Client />
      <Footer />
    </div>
  );
};

export default App;
