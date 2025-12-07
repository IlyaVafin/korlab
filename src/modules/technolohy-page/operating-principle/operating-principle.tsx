import TitleBlock from "@/src/components/title-block/title-block"
import OperatingPrincipleMobile from "./ui/operating-principle-mobile"
import OperatingPrincipleDesktop from "./ui/operating-principle-desktop"

export default function OperatingPrinciple() {
	return (
		<section className='mt-[43px]'>
			<TitleBlock className='mb-[22px]'>Принцип работы</TitleBlock>
			<OperatingPrincipleMobile />
			<OperatingPrincipleDesktop />
		</section>
	)
}
