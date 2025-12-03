import Balance from "../modules/balance/balance"
import Hero from "../modules/hero/hero"
import QuantityClients from "../modules/quantity-clients/QuantityClients"
import Reviews from "../modules/reviews/reviews"
import Solution from "../modules/solution/solution"
import Technology from "../modules/technology/technology"
import TuneNetWork from "../modules/tune-network/tune-network"

export default function Home() {
	return (
		<>
		<div className="max-w-[1408px] ml-auto mr-auto mb-0 mt-0 max-[1200px]:pr-5 max-[1200px]:pl-5">
			<Hero />
			<QuantityClients />
			<Technology />
			<Balance/>
			<TuneNetWork/>
			<Solution/>
			</div>
			<Reviews/>
		</>
	)
}
