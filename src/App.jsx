import React from "react";
import "/public/styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./styles/popups/app.scss";
import Login from "./Components/popups/LoginPopup";
import SignUp from "./Components/popups/SignupPopup";
import ResetPassword from "./Components/popups/ResetPassword";
import OTPPage from "./Components/popups/OTPpage";
import CreateNewPassword from "./Components/popups/CreateNewPassword";
import SuccessPage from "./Components/popups/PasswordChangeSuccess";
import BookAppointment from "./Components/popups/BookAppointment";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="parent">
      <div className="header">
        <div
          className=" login-btn"
          onClick={() => navigate("/login")}
          style={{ textDecoration: "none", whiteSpace: "nowrap" }}
        >
          Login
        </div>
        <div
          className=" animated-btn"
          onClick={() => navigate("/book-appointment")}
        >
          Start Free Trial{" "}
          <img
            src="public/Assets/ArrowRight.svg"
            alt="arrow"
            style={{ background: "white", borderRadius: "50%", padding: "2px" }}
            width="25px"
          />
        </div>
      </div>

      {/* Modals rendered based on route */}
      <Routes>
        <Route
          path="/login"
          element={
            <ModalWrapper>
              <Login
                onClose={() => navigate("/")}
                onSignup={() => navigate("/signup")}
                onForgot={() => navigate("/reset-password")}
              />
            </ModalWrapper>
          }
        />
        <Route
          path="/signup"
          element={
            <ModalWrapper>
              <SignUp
                onClose={() => navigate("/")}
                onLogin={() => navigate("/login")}
              />
            </ModalWrapper>
          }
        />
        <Route
          path="/reset-password"
          element={
            <ModalWrapper>
              <ResetPassword
                onClose={() => navigate("/")}
                onSubmit={() => navigate("/otp-verification")}
              />
            </ModalWrapper>
          }
        />
        <Route
          path="/otp-verification"
          element={
            <ModalWrapper>
              <OTPPage
                onClose={() => navigate("/")}
                onSuccess={() => navigate("/create-new-password")}
              />
            </ModalWrapper>
          }
        />
        <Route
          path="/create-new-password"
          element={
            <ModalWrapper>
              <CreateNewPassword
                onClose={() => navigate("/")}
                onValid={() => navigate("/password-change-success")}
              />
            </ModalWrapper>
          }
        />
        <Route
          path="/password-change-success"
          element={
            <ModalWrapper>
              <SuccessPage
                onClose={() => navigate("/")}
                onLogin={() => navigate("/login")}
              />
            </ModalWrapper>
          }
        />
        <Route
          path="/book-appointment"
          element={
            <ModalWrapper>
              <BookAppointment onClose={() => navigate("/")} />
            </ModalWrapper>
          }
        />
      </Routes>
    </div>
  );
};

const ModalWrapper = ({ children }) => {
  return (
    <>
      <div className="popup-overlay">
        <div className="popup-content">{children}</div>
      </div>
    </>
  );
};

export default App;
