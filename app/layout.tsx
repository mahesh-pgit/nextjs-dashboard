import "@/app/ui/global.css";
import { geist } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: "%s | Revenu",
		default: "Revenu",
	},
	description: "Revenue dashboard and analytics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${geist.className} text-white bg-black`}>{children}</body>
		</html>
	);
}
