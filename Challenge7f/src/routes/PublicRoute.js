import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../redux/store';
import Login from "../pages/authentication/login";
import Register from "../pages/authentication/register";
import Home from '../pages/Home';
import Search from "../pages/Searching/Search";
import SearchResult from "../pages/Searching/SearchResult";
import CarDetails from "../pages/DetailMobil/detailMobil";
import PrintTicket from "../pages/Print/Print";


const HandleLoginSuccessfully = () => {
    if (localStorage.getItem("access_token")) {
        return <Navigate to="/" replace />
    }
    return <Outlet />;
}

function PublicRoute() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path='search-result/:driverType/:date/:pickUpTime' element={<SearchResult />} />
                <Route path='search-result/:driverType/:date/:pickUpTime/:totalPassenger' element={<SearchResult />} />
                <Route path='car/:id' element={<CarDetails />} />
                <Route path='ticket' element={<PrintTicket />} />
            </Routes>

            <Routes>
                <Route element={<HandleLoginSuccessfully />}>
                    <Route path="register" element={<Register />} />
                    <Route path='login' element={<Login />} />
                </Route>
            </Routes>
        </Provider>
    );
  }
  
  export default PublicRoute;
  