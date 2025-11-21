import NavLinks from "@/app/ui/dashboard/nav-links";
import RevenuLogo from "@/app/ui/revenu-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";

export default function SideNav() {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2">
			<div className="mb-6">
				<RevenuLogo />
			</div>
			<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
				<NavLinks />
				<div className="hidden h-auto w-full grow md:block"></div>
				<form
					action={async () => {
						"use server";
						await signOut({ redirectTo: "/" });
					}}>
					<button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-blue-400/10 hover:text-blue-400 md:flex-none md:justify-start md:p-2 md:px-3">
						<PowerIcon className="w-6" />
						<div className="hidden md:block">Sign Out</div>
					</button>
				</form>
			</div>
		</div>
	);
}
