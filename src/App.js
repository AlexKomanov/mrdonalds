import Navbar from "./componets/NavBar/NavBar";
import Menu from "./componets/Menu/Menu";
import {GlobalStyle} from "./componets/Styled/GlobalStyle";
import ItemModalWindow from "./componets/Modal/ItemModalWindow";
import OrderSection from "./componets/Order/OrderSection";
import {useOpenItem} from "./componets/Hooks/useOpenItem";
import {useOrders} from "./componets/Hooks/useOrders";


function App() {

    const openItem = useOpenItem();
    const orders = useOrders();

    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <OrderSection {...orders}/>
            <Menu {...openItem}/>
            {openItem.openItem && <ItemModalWindow {...openItem} {...orders}/>}

        </>
    );
}

export default App;
