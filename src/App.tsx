import React, { useState } from 'react';
// ======= imgs ======
import bg from './assets/img/modal/bg-training.jpg';
// ======= Styles ======
import './styles/App.scss';
// ======= Components ======
import Header from './components/Header/Header'
import Modal from './components/UI/Modal/Modal';
import FormTraining from './components/FormTraining/FormTraining';
import Home from './components/Home/Home';
import AboutClub from './components/AboutClub/AboutClub';
import OurAdvantages from './components/OurAdvantages/OurAdvantages';
import OurPrograms from './components/OurPrograms/OurPrograms';


const App = () => {
  const [trainnigModal, setTrainnigModal] = useState(false);

  return (
    <div>
      <Modal bg={bg} modal={trainnigModal} setModal={setTrainnigModal}>
        <FormTraining
          darkMode={false}
        />
      </Modal>

      <Header setTrainingModal={setTrainnigModal} />

      <main>
        <Home />
        <AboutClub />

        <OurAdvantages />
        <OurPrograms />

      </main>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
