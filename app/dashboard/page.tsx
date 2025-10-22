import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { fetchRevenue, fetchLatestInvoices } from "../lib/data";

const Page = async () => {
	const revenue = await fetchRevenue();
	const latestInvoices = await fetchLatestInvoices();

	return (
		<main>
			<h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
				<RevenueChart revenue={revenue} />
				<LatestInvoices latestInvoices={latestInvoices} />
			</div>
		</main>
	);
};

export default Page;
