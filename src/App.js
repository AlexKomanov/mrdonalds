import Navbar from "./componets/NavBar";
import Menu from "./componets/Menu";
import {GlobalStyle} from "./componets/GlobalStyle";
import {useState} from "react";
import ItemModalWindow from "./componets/ItemModalWindow";





function App() {

    const [openItem, setOpenItem] = useState(null);

    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Menu setOpenItem={setOpenItem}/>
            <ItemModalWindow openItem={openItem} setOpenItem={setOpenItem}/>

        </>
    );
}

export default App;
