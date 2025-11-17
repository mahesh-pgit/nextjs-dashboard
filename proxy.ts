import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
	// Exclude API routes, static files, image optimizations, and .png files
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
