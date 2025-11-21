"use client";

import { montserrat } from "@/app/ui/fonts";
import { AtSymbolIcon, KeyIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "./button";
import { authenticate } from "../lib/actions";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
	const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

	return (
		<form action={formAction} className="space-y-3">
			<div className="">
				<h1 className={`${montserrat.className} mb-3 text-lg font-bold text-center`}>
					Please log in to continue.
				</h1>
				<div className="w-full">
					<div>
						<label
							className="mb-3 mt-5 block text-xs font-medium text-gray-300"
							htmlFor="email">
							Email address
						</label>
						<div className="relative">
							<input
								className="peer block w-full bg-black rounded-md border border-zinc-800 py-[9px] pl-10 text-sm focus:border-blue-500 placeholder:text-gray-500"
								id="email"
								type="email"
								name="email"
								placeholder="Enter your email address"
								required
								defaultValue={"user@nextmail.com"}
							/>
							<AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-blue-500" />
						</div>
					</div>
					<div className="mt-4">
						<label
							className="mb-3 mt-5 block text-xs font-medium text-gray-300"
							htmlFor="password">
							Password
						</label>
						<div className="relative">
							<input
								className="peer block w-full bg-black rounded-md border border-zinc-800 py-[9px] pl-10 text-sm focus:border-blue-500 placeholder:text-gray-500"
								id="password"
								type="password"
								name="password"
								placeholder="Enter password"
								required
								minLength={6}
								defaultValue={"123456"}
							/>
							<KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-blue-500" />
						</div>
					</div>
					<p className="mt-4 text-xs">
						**Credentials are pre-filled for your convenience. Just hit Login to explore
						the dashboard.
					</p>
				</div>
				<input type="hidden" name="redirectTo" value={callbackUrl} />
				<Button className="mt-4 w-full" aria-disabled={isPending}>
					Log in
				</Button>
				<div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
					{errorMessage && (
						<>
							<ExclamationCircleIcon className="h-5 w-5 text-red-500" />
							<p className="text-sm text-red-500">{errorMessage}</p>
						</>
					)}
				</div>
			</div>
		</form>
	);
}
