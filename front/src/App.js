import { Route, Routes } from "react-router-dom";
import Template from './components/template';
import Home from './pages/pageHome';
import ClicAndCollect from './pages/clicAndCollect';
import Burger from './pages/pageBurger';
import Accompagnement from './pages/pageAccompagnement';
import Boisson from './pages/pageBoisson';
import Dessert from './pages/pageDessert';
import Panier from './pages/pagePanier';
import Paiement from './pages/pagePaiement';
import Final from './pages/pageFinal';
import DashboardBoisson from '../src/pages/dashBoard/boisson'

function App() {
  return (
   <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path='/clicAndCollect' element={<ClicAndCollect />} />
        <Route path='/burger' element={<Burger />} />
        <Route path='/accompagnement' element={<Accompagnement />} />
        <Route path='/boisson' element={<Boisson />} />
        <Route path='/dessert' element={<Dessert />} />
        <Route path='/panier' element={<Panier />} />
        <Route path='/paiement' element={<Paiement />} />
        <Route path='/final' element={<Final />} />
      </Route>
      <Route path="/admin/boisson" element={<DashboardBoisson/>} />
   </Routes>
  );
}

export default App;
