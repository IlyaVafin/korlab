import Image from "next/image";
import { principleCards } from "../const/principleCards";
import PrincipleCard from "./principle-card";

export default function OperatingPrincipleDesktop() {
	return (
		<ul className='hidden lg:flex gap-1 xl:justify-between'>
			{principleCards.map(card => (
				<li key={card.src}>
					<PrincipleCard className='max-w-md h-[387px] flex flex-col justify-between p-[15px]'>
						<Image
							width={0}
							height={0}
							className='w-full h-full max-h-[200px]'
							sizes='100vw'
							src={card.src}
							alt=''
						/>
						<p className='text-[20px] leading-[100%] uppercase'>
							{card.description}
						</p>
					</PrincipleCard>
				</li>
			))}
		</ul>
	)
}
