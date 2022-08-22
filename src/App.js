import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main.jsx';
import PledgeModal from './Modals/PledgeModal/PledgeModal';
import ThanksYou from './Modals/ThanksYou/ThanksYou';
import MenuHamburger from './Modals/MenuHamburger/MenuHamburger';
import {useState , createContext} from "react"

export const GlobalContext = createContext();

function App() {

  const [showPledgeModal, setShowPledgeModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [isMenuHamburgerChecked, setIsMenuHamburgerChecked] = useState(false)
  const [totalBacked, setTotalBacked] = useState(89914);
  const [pledgeValue, setPledgeValue] = useState();
  const [backers, setBackers] = useState(5007);

  const [numberLeftBambooStand, setNumberLeftBambooStand ] = useState(101);
  const [numberLeftBlackEdition, setNumberLeftBlackEdition ] = useState(64);
  const [numberLeftMahogany, setNumberLeftMahogany ] = useState(1);

  const [selectedTitlePledge, setSelectedTitlePledge] = useState()

  const setShowPledgeModalHandler = () => {
    setShowPledgeModal(!showPledgeModal);
  }

  const setShowThankYouModalHandler = () => {
    setShowThankYouModal(!showThankYouModal);
    setShowPledgeModal(false);
  }

  const addPledgeHandler = (e) => {
    setPledgeValue(e.target.value)
  }

  const calculateBackedTotalHandler = () => {
    setTotalBacked(totalBacked + (+pledgeValue));
    setShowThankYouModal(!showThankYouModal);
    setBackers(+backers + 1);
    setPledgeValue(0)
  }

  const  subtractNumberLeftHandler  = (pledge) => {
    switch (pledge) {
        case 25 : {
            console.log("25");
            setNumberLeftBambooStand(numberLeftBambooStand - 1 );
            break;
        }
        case 75 : {
            console.log("75");
            setNumberLeftBlackEdition(numberLeftBlackEdition - 1 );
            break;
        }
        case 200 : {
            console.log("200");
            setNumberLeftMahogany(numberLeftMahogany - 1 );
            break;
        }
    }
  }

  const isMenuHamburgerCheckedHandler = () => {
    setIsMenuHamburgerChecked(!isMenuHamburgerChecked)
  }

  

  return (
    <div className="App">
      <GlobalContext.Provider value={{setShowPledgeModalHandler ,setShowThankYouModalHandler ,addPledgeHandler, 
                                      calculateBackedTotalHandler, subtractNumberLeftHandler,setSelectedTitlePledge,isMenuHamburgerCheckedHandler,
                                      totalBacked ,backers, pledgeValue,numberLeftBambooStand,numberLeftBlackEdition,numberLeftMahogany,selectedTitlePledge, isMenuHamburgerChecked}}>
        <Header />

        <Main />
          {
            showPledgeModal ? <PledgeModal /> : null
          }  

          {
            showThankYouModal ? <ThanksYou /> : null
          }

          {
            isMenuHamburgerChecked ? <MenuHamburger /> : null
          }
          
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
