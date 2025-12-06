import Balance from "../modules/main-page/balance/balance"
import ContactForm from "../modules/main-page/contact-form/contact-form"
import Hero from "../modules/main-page/hero/hero"
import QuantityClients from "../modules/main-page/quantity-clients/QuantityClients"
import Reviews from "../modules/main-page/reviews/reviews"
import Russia from "../modules/main-page/russia/russia"
import Solution from "../modules/main-page/solution/solution"
import Technology from "../modules/main-page/technology/technology"
import TuneNetWork from "../modules/main-page/tune-network/tune-network"

export default function Home() {
	return (
		<>
			<div className='max-w-[1408px] ml-auto mr-auto mb-0 mt-0 max-[1200px]:pr-5 max-[1200px]:pl-5'>
				<Hero />
				<QuantityClients />
				<Technology />
				<Balance />
				<TuneNetWork />
				<Solution />
			</div>
			<Reviews />
			<div className='max-w-[1408px] ml-auto mr-auto mb-0 mt-0 max-[1200px]:pr-5 max-[1200px]:pl-5'>
				<Russia />
				<ContactForm/>
			</div>
		</>
	)
}
