import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
	return (
		<main className="flex h-full flex-col items-center justify-center gap-2">
			<Image src="/not-found.png" alt="Not Found" width={150} height={150} />
			<h2 className="text-xl font-semibold">404 Not Found</h2>
			<p>Could not find the requested invoice.</p>
			<Link
				href="/dashboard/invoices"
				className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
				Go Back
			</Link>
		</main>
	);
}
