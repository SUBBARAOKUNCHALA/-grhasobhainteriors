
import Hero from './components/Hero';
import ModularKitchen from './components/Modular_Kitchen';
import CustomWardrobes from "./components/Custom_Wardrobes"
import TvUnits from './components/tvunits';
import PremiumWoodFinishes from "./components/PremiumWoodFinishes"
function App() {
  return (
    <>
      <Hero />
      <ModularKitchen />
      <CustomWardrobes />
      <TvUnits />
      <PremiumWoodFinishes/>
      {/* Add more sections below as you build them:
      <WoodFinishes />
      */}
    </>
  );
}

export default App;