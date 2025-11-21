import RevenuLogo from "@/app/ui/revenu-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";
import { GitHubLogo } from "./ui/github-logo";

export default function Page() {
	return (
		<main className={`${montserrat.className} flex min-h-svh flex-col p-6`}>
			<div className="flex justify-between items-center h-20 md:p-4">
				<RevenuLogo />
				<a href="https://github.com/mahesh-pgit/revenu-app" target="_blank">
					<GitHubLogo />
				</a>
			</div>
			<div className="flex grow flex-col items-center justify-center">
				<div className="flex flex-col justify-center items-center text-center gap-9 px-6 py-14 md:px-20">
					<p className="text-3xl tracking-tight leading-tight md:text-6xl">
						<strong>
							Know your numbers.
							<br />
							Grow your business.
						</strong>
						<br />
					</p>
					<p className="text-sm max-w-3xl text-gray-400 sm:text-xl/8">
						Turn raw revenue data into insights with a clean, modern dashboard built for
						accuracy, transparency, and growth momentum.
					</p>
					<Link
						href="/login"
						className="flex items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium transition-colors hover:bg-blue-400 md:text-base">
						<span>Launch Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
					</Link>
				</div>
			</div>
			<div className="p-4">© 2025 Revenu. All rights reserved.</div>
		</main>
	);
}
