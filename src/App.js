import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LogInRegister from "./pages/LogInRegister";
import RegistrationCustomer from "./pages/RegistrationCustomer";
import LogInCustomer from "./pages/LogInCustomer";
import RegistrationSeller from "./pages/RegistrationSeller";
import LogInSeller from "./pages/LogInSeller";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/registrationcustomer":
        title = "";
        metaDescription = "";
        break;
      case "/logincustomer":
        title = "";
        metaDescription = "";
        break;
      case "/registrationseller":
        title = "";
        metaDescription = "";
        break;
      case "/loginseller":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogInRegister />} />
      <Route path="/registrationcustomer" element={<RegistrationCustomer />} />
      <Route path="/logincustomer" element={<LogInCustomer />} />
      <Route path="/registrationseller" element={<RegistrationSeller />} />
      <Route path="/loginseller" element={<LogInSeller />} />
    </Routes>
  );
}
export default App;
