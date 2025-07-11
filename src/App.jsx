import './App.css';
import About from './componenets/about/About';
import Contact from './componenets/contact/Contact';
import Footer from './componenets/footer/Footer';
import Header from './componenets/header/Header';
import Home from './componenets/home/Home';
import ScrollUp from './componenets/scrollup/ScrollUp';
import Services from './componenets/services/Services';
import Skills from './componenets/skills/Skills';
import Testimonials from './componenets/testimonials/Testimonials';
import Works from './componenets/works/Works';

function App() {
	return (
		<>
			<Header />

			<main className='main'>
				<Home />
				<About />
				<Skills />
				<Services />
				<Works />
				<Testimonials />
				<Contact />
			</main>

			<Footer />
			<ScrollUp />
		</>
	);
}

export default App;
