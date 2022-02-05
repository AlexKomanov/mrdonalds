import Navbar from "./componets/NavBar";
import Menu from "./componets/Menu";
import {GlobalStyle} from "./componets/GlobalStyle";
import {useState} from "react";
import ItemModalWindow from "./componets/ItemModalWindow";
import OrderSection from "./componets/OrderSection";





function App() {

    const [openItem, setOpenItem] = useState(null);

    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <OrderSection/>
            <Menu setOpenItem={setOpenItem}/>
            <ItemModalWindow openItem={openItem} setOpenItem={setOpenItem}/>

        </>
    );
}

export default App;
