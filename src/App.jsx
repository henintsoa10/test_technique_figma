import Header from './components/Header'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import BlueSection from './components/BlueSection'
import Services from './components/Services'
import OrangeSection from './components/OrangeSection'
import Projects from './components/Projects'
import Highlight from './components/Highlight'
import FAQ from './components/FAQ'
import WaterSection from './components/WaterSection'
import Footer from './components/Footer'

function App() {
	return (
		<div className="flex flex-col bg-white">
			<Header />
			<div className="self-stretch bg-[#F8F9FA] overflow-hidden">
				<div id="hero" className="flex flex-col self-stretch bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uE5ydZUhPK/05v41yz5_expires_30_days.png')] bg-[length:100%_100%] pt-[19px] mb-[187px]">
					<Hero />
				</div>
				<Welcome />
				<BlueSection />
				<Services />
				<OrangeSection />
				<Projects />
				<Highlight />
				<FAQ />
				<WaterSection />
				<Footer />
			</div>
		</div>
	)
}

export default App
