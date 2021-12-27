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
import Banner from './components/Banner/Banner';
import OurTrainers from './components/OurTrainers/OurTrainers';
import SectionForm from './components/SectionForm/SectionForm';
import ClubInterior from './components/ClubInterior/ClubInterior';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer'

const App = () => {
  const [trainnigModal, setTrainningModal] = useState(false);

  return (
    <div>
      <Modal bg={bg} modal={trainnigModal} setModal={setTrainningModal}>
        <FormTraining
          darkMode={false}
        />
        <p className='under-text'>
          Спортивное счастье уже рядом !
        </p>
      </Modal>

      <Header setTrainingModal={setTrainningModal} />

      <main>
        <Home />
        <AboutClub />

        <OurAdvantages />
        <OurPrograms setModal={setTrainningModal} />
        <Banner />
        <OurTrainers />
        <SectionForm />
        <ClubInterior />
        <Contacts />

      </main>

      <Footer />

    </div>
  );
}

export default App;
