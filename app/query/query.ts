// rename this file to route.ts to make it routable and test sql queries in development
// discard changes and do not commit with this file named route.ts unless required

import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function testQuery() {
	const data = await sql`
	`;

	return data;
}

export async function GET() {
	try {
		return Response.json(await testQuery());
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
