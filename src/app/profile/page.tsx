"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const ProfilePage = () => {
	const router = useRouter();
	const handleLogout = async () => {
		try {
			const res: any = await axios.get("/api/users/logout");
			if (res.data.success) {
				alert(res.data.message);
				router.push("/");
			} else {
				alert(res.data.error);
			}
		} catch (error: any) {
			console.log(error.message);
		}
	};
	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<h1 className="text-4xl">ProfilePage</h1>
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
