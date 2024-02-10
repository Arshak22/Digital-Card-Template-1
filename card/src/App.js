import IntroSection from "./Components/IntroSection";
import Listings from "./Components/Listings";
import Testimonials from "./Components/Testimonials";
import BookAppoinment from "./Components/BookAppointment";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <IntroSection />
      <Listings />
      <Testimonials />
      <BookAppoinment />
      <Footer />
    </div>
  );
}

export default App;