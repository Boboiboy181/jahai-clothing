import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {createUserDocumentFromAuth, onAuthStateChangedListener,} from "./Utils/firebase/firebase.utils.js";
import {setCurrentUser} from "./store/user/user.action.js";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user).then(r => r);
      }
      dispatch(setCurrentUser(user));
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  );
};

export default App;
