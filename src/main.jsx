import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/popups/LoginPopup.jsx";
import SignUp from "./Components/popups/SignupPopup.jsx";
import ResetPassword from "./Components/popups/ResetPassword.jsx";
import OTPpage from "./Components/popups/OTPpage.jsx";
import CreateNewPassword from "./Components/popups/CreateNewPassword.jsx";
import BookAppointment from "./Components/popups/BookAppointment.jsx";
import PasswordChangeSuccess from "./Components/popups/PasswordChangeSuccess.jsx";
import { EmailProvider } from "./Components/Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmailProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/otp-verification" element={<OTPpage />} />
          <Route path="/create-new-password" element={<CreateNewPassword />} />
          <Route
            path="/password-change-success"
            element={<PasswordChangeSuccess />}
          />
        </Routes>
      </BrowserRouter>
    </EmailProvider>
  </StrictMode>
);
