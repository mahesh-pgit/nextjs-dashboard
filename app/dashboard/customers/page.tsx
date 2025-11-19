import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Customers",
};

const Page = async (props: { searchParams?: Promise<{ query?: String }> }) => {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || "";
	const customers = await fetchFilteredCustomers(query.toString());

	return (
		<main>
			<CustomersTable customers={customers} />
		</main>
	);
};

export default Page;
