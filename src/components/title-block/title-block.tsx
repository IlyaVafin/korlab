import { ReactNode } from "react";

export default function TitleBlock({children}: {children: ReactNode}) {
	return (
		<h2 className='text-2xl text-white uppercase leading-8 tracking-[5%] lg:text-[32px] lg:leading-[39px]'>{children}</h2>
	)
}
