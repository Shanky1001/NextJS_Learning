"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
	const [user, setUser] = useState({ email: "", password: "" });
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const handleLogin = () => {
		setLoading(true);
		axios
			.post("/api/users/login", user)
			.then((res: any) => {
				if (res.data.success) {
					router.push("/profile");
				} else {
					alert(res.data.message);
				}
			})
			.catch((err: any) => {
				alert(err.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<h1 className="text-2xl mb-4">Login</h1>
			<br />
			<label htmlFor="email" className="mr-2 mt-2">
				Email
			</label>
			<input
				className="p-2 rounded-md text-gray-950"
				type="email"
				id="email"
				placeholder="abcd@abc.com"
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
			/>
			<br />

			<label htmlFor="password" className="mr-2 mt-2">
				Password
			</label>
			<input
				className="p-2 rounded-md text-gray-950"
				type="password"
				id="password"
				placeholder="password"
				value={user.password}
				onChange={(e) => setUser({ ...user, password: e.target.value })}
			/>
			<br />
			<button
				onClick={handleLogin}
				className="btn p-2 my-2 rounded-lg border border-gray-300"
			>
				Login
			</button>
			<Link href={"/signup"} className="mt-4 underline">
				Sign Up
			</Link>
		</div>
	);
};

export default LoginPage;
