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
import TeamPage from "./pages/team.page";
import EventSub from "./sub-pages/events.sub";
import ScrollToTop from "./components/scroll.component";
import FooterComponentsTwo from "./components/footer/footer2.component";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <html lang="en" />
        <title>STA. MONICA HOMECARE</title>
        <meta
          name="description"
          content="The first comprehensive online homecare system in negros occidental."
        />
        <meta
          name="keywords"
          content="balayatipan, balay atipan, balay-atipan, sta monica homecare solution,homecare"
        />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.balayatipan.com" />
      </Helmet>
      <Router>
        <ScrollToTop />
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
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events/event_view/:id" element={<EventSub />} />
        </Routes>
        <FooterComponentsTwo />
      </Router>
      <MessengerCustomerChat
        pageId="100231752530357"
        appId="1134817277258354"
        loggedInGreeting="Welcome To Balay Atipan"
        // greetingDialogDisplay="show"
        // onCustomerChatDialogShow={true}
        // shouldShowDialog={true}
        themeColor="#00AF43"
      />
    </div>
  );
}

export default App;
