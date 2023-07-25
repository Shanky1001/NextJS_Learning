"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
const ProfilePage = () => {
	const router = useRouter();
	const handleLogout = async () => {
		try {
			const res: any = await axios.get("/api/users/logout");
			if (res.data.success) {
				toast.success(res.data.message);
				router.push("/");
			} else {
				toast.error(res.data.error);
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};
	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<h1 className="text-4xl">ProfilePage</h1>
			<hr />
			<Link
				href={"/"}
				className="rounded text-white mt-3 px-3 py-1 bg-blue-500"
			>
				dashboard
			</Link>
			<hr />
			<button
				className="rounded text-white mt-3 px-3 py-1 bg-red-500"
				onClick={handleLogout}
			>
				Logout
			</button>
		</div>
	);
};

export default ProfilePage;
