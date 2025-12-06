import Card from "@/src/components/card/card"
import Typography from "@/src/components/typography/typography"
interface SolutionCardProps {
	card: {
		title: string
		paragraphTop: string
		paragraphBottom: string
	}
}
export default function SolutionCard({ card }: SolutionCardProps) {
	return (
		<Card className="lg:max-w-md" variant='orange'>
			<div className='h-[356px]'>
				<div className='flex flex-col gap-16'>
					<Typography className="lg:text-[26px]" variant='title'>{card.title}</Typography>
					<div className='flex flex-col'>
						<Typography className="max-w-[391px]" variant='description'>{card.paragraphTop}</Typography>
						<Typography className='mt-4' variant='description'>
							{card.paragraphBottom}
						</Typography>
					</div>
				</div>
			</div>
		</Card>
	)
}
