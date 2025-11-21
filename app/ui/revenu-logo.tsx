import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function RevenuLogo() {
	return (
		<Link href="/">
			<div
				className={`${montserrat.className} flex flex-row items-center leading-none text-white`}>
				<Image src="/revenu-logo.png" width={50} height={50} alt="Revenu-Logo" />
				<p className="text-[42px]">Revenu</p>
			</div>
		</Link>
	);
}
