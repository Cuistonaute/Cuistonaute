import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/main.scss';

import Header from './components/Header'
import Home  from './container/Home';
import Recettes from './container/Recettes';
import Connexion from './container/Connexion';
import Ingredients from './container/Ingredients';
import Themes from './container/Themes';
import Astuces from './container/Astuces';
import ProposerSaRecette from './container/ProposerSaRecette';
import Favoris from './container/Favoris';
import CGU from './container/CGU';
import PolitiqueConfidentialite from './container/PolitiqueConfidentialite';
import Footer from './components/Footer';
import Contact from './container/Contact';
import Inscription from './container/Inscription';



const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/Cuistonaute' element={<Home />} />
        <Route path='/Recettes' element={<Recettes />} />
        <Route path='/Connexion' element={<Connexion />} />
        <Route path='/Inscription' element={<Inscription />} />
        <Route path='/Ingredients' element={<Ingredients />} />
        <Route path='/Themes' element={<Themes />} />
        <Route path='/Astuces' element={<Astuces />} />
        <Route path='/Proposer-sa-recette' element={<ProposerSaRecette />} />
        <Route path='/Favoris' element={<Favoris />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/CGU' element={<CGU />} />
        <Route path='/PolitiqueConfidentialite' element={<PolitiqueConfidentialite />} />
      </Routes> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
