"use server";

import { z } from "zod";
import postgres from "postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const FormSchema = z.object({
	id: z.string(),
	customerId: z.string(),
	amount: z.coerce.number(),
	status: z.enum(["pending", "paid"]),
	date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

const createInvoice = async (formData: FormData) => {
	const rawFormData = Object.fromEntries(formData.entries());
	const { customerId, amount, status } = CreateInvoice.parse(rawFormData);
	const amountInCents = amount * 100;
	const date = new Date().toISOString().split("T")[0]; // Sun Nov 09 2025 01:53:30 GMT+0530 (India Standard Time) -> '2025-11-08T20:23:30.344Z' -> '2025-11-08'

	await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;

	revalidatePath("/dashboard/invoices");
	redirect("/dashboard/invoices");
};

export { createInvoice };
