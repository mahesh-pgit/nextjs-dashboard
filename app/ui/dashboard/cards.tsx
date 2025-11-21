import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from "@heroicons/react/24/outline";
import { montserrat } from "@/app/ui/fonts";
import { fetchCardData } from "@/app/lib/data";

const iconMap = {
	collected: BanknotesIcon,
	customers: UserGroupIcon,
	pending: ClockIcon,
	invoices: InboxIcon,
};

export default async function CardWrapper() {
	const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } =
		await fetchCardData();

	return (
		<>
			<Card title="Collected" value={totalPaidInvoices} type="collected" />
			<Card title="Pending" value={totalPendingInvoices} type="pending" />
			<Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
			<Card title="Total Customers" value={numberOfCustomers} type="customers" />
		</>
	);
}

export function Card({
	title,
	value,
	type,
}: {
	title: string;
	value: number | string;
	type: "invoices" | "customers" | "pending" | "collected";
}) {
	const Icon = iconMap[type];

	return (
		<div className="rounded-xl border border-zinc-800 p-2">
			<div className="flex justify-between p-4">
				<h3 className="text-sm">{title}</h3>
				{Icon ? <Icon className="h-5 w-5 text-zinc-400" /> : null}
			</div>
			<p className={`${montserrat.className} truncate p-4 text-center text-2xl`}>{value}</p>
		</div>
	);
}
