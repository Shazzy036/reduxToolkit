import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./component/Cart";
import Product from "./component/Product";
import NavBar from "./component/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
	return (
		<>
			<BrowserRouter>
				<Provider store={store}>
					{" "}
					<NavBar />
					<Routes>
						<Route exact path="/" element={<Product />} />
						<Route exact path="/cart" element={<Cart />} />
					</Routes>
				</Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
