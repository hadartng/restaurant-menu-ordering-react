import Header from "./Header/Header";
import Menu from "./Menu/Menu";
//import Reviews from "./Reviews/Reviews";
import styles from "./App.module.css";
import {Provider} from "react-redux";
import store from "../features/store";

function App() {
    return (
        <Provider store={store}>
            <div className={styles.app}>
                <Header/>
                <Menu/>
                {/*<Reviews/>*/}
            </div>
        </Provider>
    );
}

export default App;
