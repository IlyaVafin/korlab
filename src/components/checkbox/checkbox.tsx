export default function Checkbox() {
	return (
		<div className='w-fit flex justify-center items-center'>
			<label htmlFor=''></label>
			<input
				className='appearance-none relative w-[17px] h-[17px] bg-black rounded-0.5 border border-(--color-aqua)  after:content-[""] after:h-0 after:w-0 after:absolute checked:after:w-[9px] checked:after:h-[9px] after:bg-(--color-aqua) after:top-[3px] after:left-[3px]  delay-500 after:transition-all'
				type='checkbox'
			/>
		</div>
	)
}
