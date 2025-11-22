import postgres from "postgres";
import bcrypt from "bcrypt";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const user = {
	id: "410544b2-4001-4271-9855-fec4b6a6442a",
	name: "User",
	email: "user@nextmail.com",
	password: "1248163264",
};

async function reseedUser() {
	const hashedPassword = await bcrypt.hash(user.password, 10);
	const data = await sql`
		INSERT INTO users (id, name, email, password)
		VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
		ON CONFLICT (id) DO NOTHING;
	`;

	return data;
}

export async function GET() {
	try {
		return Response.json(await reseedUser());
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
