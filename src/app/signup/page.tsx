"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignUp = () => {
	const [user, setUser] = useState({ email: "", password: "", username: "" });
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const handleSignUp = async () => {
		setLoading(true);
		await axios
			.post("/api/users/signup", user)
			.then((res: any) => {
				if (res.data.success) {
					setUser({ email: "", password: "", username: "" });
					setLoading(false);
					router.push("/login");
				} else {
					alert(res.data?.error);
				}
			})
			.catch((err: any) => {
				alert(err);
				setLoading(false);
			});
	};
	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<h1 className="text-2xl mb-4">Signup</h1>
			<hr />
			<label htmlFor="username" className="mr-2 mt-2">
				UserName
			</label>
			<input
				className="p-2 rounded-md text-gray-950"
				type="text"
				id="username"
				placeholder="User Name"
				value={user.username}
				onChange={(e) => setUser({ ...user, username: e.target.value })}
			/>
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
				disabled={loading}
				onClick={handleSignUp}
				className="btn p-2 my-2 rounded-lg border border-gray-300"
			>
				{loading ? "Please wait" : "Sign Up"}
			</button>

			<Link href={"/login"} className="mt-4 underline">
				Login
			</Link>
		</div>
	);
};

export default SignUp;
