import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Products from "./components/internalUser1/Products";
import TermsAndConditions from "./components/TermsAndConditions";
import Users from "./components/internalUser1/Users";
import ExternalDrawer from "./Drawer/ExternalDrawer";
import InternalDrawer from "./Drawer/InternalDrawer";
import PrivateRoute from "./privateRouting/PrivateRoute";
import PageNotFound from "./components/PageNotFound";
import Sales from "./components/internalUser2/Sales";
import Marketing from "./components/internalUser2/Marketing";
import ExternalProducts from "./components/externalUser/ExternalProducts";
import ExternalUsers from "./components/externalUser/ExternalUsers";
import ExternalProfile from "./components/externalUser/ExternalProfile";
import ExternalAccount from "./components/externalUser/ExternalAccount";
import Home from "./components/Home";
import InternalUser1Profile from "./components/internalUser1/InternalUser1Profile";
import InternalUser1Account from "./components/internalUser1/InternalUser1Account";
import User2Profile from "./components/internalUser2/User2Profile";
import User2Account from "./components/internalUser2/User2Account";
import NotAutorized from "./components/NotAutorized";
import InternalUser1Dashboard from "./components/internalUser1/InternalUser1Dashboard";
import ProductDetails from "./components/internalUser1/ProductDetails";
import NewProduct from "./components/internalUser1/NewProduct";
import UserDetails from "./components/internalUser1/UserDetails";
import LoginExistPrivateRoute from "./privateRouting/LoginExistPrivateRoute";


function App() {
  const location = useLocation();
  const token = localStorage.getItem('type');

  return (
    <div className="App" style={{ display: "flex", marginTop: 80, paddingRight: "10px" }}>
      {location.pathname === "/login" ? (
        ""
      ) : location.pathname === "/terms" ? (
        ""
      ) : location.pathname === '/' ? (
        ""
      ) : (
        token === "internal1" ? <InternalDrawer /> : token === "internal2" ? <InternalDrawer /> : token === 'external' ? <ExternalDrawer /> : ""
      )}

      <Routes>

        <Route path="/" element={<Home />} />

        {/* <Route path="/login" element={<LoginExistPrivateRoute />}> */}
        <Route path="/login" element={<Login />} />
        {/* </Route> */}

        {/* internal user 1 routes start */}

        <Route path="/" element={<PrivateRoute />}>

          <Route path="/products">
            <Route index element={token === "internal1" ? <Products /> : <NotAutorized />} />
            <Route path=":id" element={token === "internal1" ? <ProductDetails /> : <NotAutorized />} />
            <Route path="new" element={token === "internal1" ? <NewProduct /> : <NotAutorized />} />
            <Route path=":id/users" element={token === "internal1" ? <Users /> : <NotAutorized />} />
            <Route path=":id/users/:id" element={token === "internal1" ? <UserDetails /> : <NotAutorized />} />
          </Route>

          <Route path="/users-1-dashboard"
            element={token === "internal1" ? <InternalUser1Dashboard /> : <NotAutorized />} />

          <Route path="/internal-user1-profile"
            element={token === "internal1" ? <InternalUser1Profile /> : <NotAutorized />} />

          <Route path="/internal-user1-account"
            element={token === "internal1" ? <InternalUser1Account /> : <NotAutorized />} />

        </Route>

        {/* internal user 1 routes end */}


        {/* internal user 2 routes start */}

        <Route path="/" element={<PrivateRoute />}>

          <Route path="/sales" element={token === "internal2" ? <Sales /> : <NotAutorized />} />
          <Route path="/marketing" element={token === "internal2" ? <Marketing /> : <NotAutorized />} />
          <Route path="/user-2-profile" element={token === "internal2" ? <User2Profile /> : <NotAutorized />} />
          <Route path="/user-2-account" element={token === "internal2" ? <User2Account /> : <NotAutorized />} />

        </Route>

        {/* internal user 2 routes end */}


        {/* external user routes start */}

        <Route path="/external-products" element={<PrivateRoute />}>
          <Route path="/external-products" element={token === 'external' ? <ExternalProducts /> : <NotAutorized />} />
        </Route>

        <Route path="/external-users" element={<PrivateRoute />}>
          <Route path="/external-users" element={token === 'external' ? <ExternalUsers /> : <NotAutorized />} />
        </Route>

        <Route path="/external-profile" element={<PrivateRoute />}>
          <Route path="/external-profile" element={token === 'external' ? <ExternalProfile /> : <NotAutorized />} />
        </Route>

        <Route path="/external-account" element={<PrivateRoute />}>
          <Route path="/external-account" element={token === 'external' ? <ExternalAccount /> : <NotAutorized />} />
        </Route>

        {/* external user routes end */}

        <Route path="/terms" element={<PrivateRoute />}>
          <Route path="/terms" element={<TermsAndConditions />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
