import React from "react";
import "./App.css";
import HeaderComponent from "./components/header/header.component";
import "./styles/styles.css";
import "./styles/mediaquery.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./lib/feather.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import ServicesPage from "./pages/services.page";
import DoctorsPage from "./pages/doctors.page";
import EventsPage from "./pages/events.page";
import AboutPage from "./pages/about-us.page";
import ContactPage from "./pages/contact.page";
import TestimonialPage from "./pages/testimonial.page";
// components
import TopHeader from "./components/header/top-header.component";
import FooterComponent from "./components/footer/footer.component";
import LoaderComponent from "./components/loader/loader.component";
import TestimonialSubPage from "./sub-pages/testimonials.sub";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  const [currentTimeOut, setCurrentTimeOut] = React.useState(true);
  setTimeout(() => {
    setCurrentTimeOut(false);
  }, 3000);
  if (currentTimeOut) {
    return <LoaderComponent />;
  }
  return (
    <div>
      <Router>
        <TopHeader />
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/testimonials/reviews/:id"
            element={<TestimonialSubPage />}
          />
        </Routes>
        <FooterComponent />
      </Router>
      <MessengerCustomerChat
        pageId="100438442508559"
        appId="507978433662821"
        loggedInGreeting="Welcome To Balay Atipan"
        greetingDialogDisplay={show}
        themeColor="#00AF43"
      />
    </div>
  );
}

export default App;
