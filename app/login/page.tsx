import RevenuLogo from "@/app/ui/revenu-logo";
import LoginForm from "@/app/ui/login-form";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login",
};

export default function LoginPage() {
	return (
		<main className="flex items-center justify-center h-svh">
			<div className="flex flex-col w-full max-w-sm space-y-10 m-4">
				<div className="flex justify-center">
					<RevenuLogo />
				</div>
				<Suspense>
					<LoginForm />
				</Suspense>
			</div>
		</main>
	);
}
