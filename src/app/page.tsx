import Container from "../components/container/container"
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
			<Container>
				<Hero />
				<QuantityClients />
				<Technology />
				<Balance />
				<TuneNetWork />
				<Solution />
			</Container>
			<Reviews />
			<Container>
				<Russia />
				<ContactForm />
			</Container>
		</>
	)
}
