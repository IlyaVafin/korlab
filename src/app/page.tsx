import Balance from "../modules/balance/balance"
import Hero from "../modules/hero/hero"
import QuantityClients from "../modules/quantity-clients/QuantityClients"
import Technology from "../modules/technology/technology"
import TuneNetWork from "../modules/tune-network/tune-network"

export default function Home() {
	return (
		<>
			<Hero />
			<QuantityClients />
			<Technology />
			<Balance/>
			<TuneNetWork/>
		</>
	)
}
