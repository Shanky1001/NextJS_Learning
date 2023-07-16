import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

Connect();

export const POST = async (request: NextRequest) => {
	try {
		const reqBody = await request.json();
		const { email, password } = reqBody;
		// check if user exits
		const user = await User.findOne({ email });
		if (!user) {
			return NextResponse.json(
				{ success: false, message: "User doesn't exits!" },
				{ status: 400 }
			);
		}
		// match password of the user
		const matchResult = await bcryptjs.compare(password, user.password);
		if (!matchResult) {
			return NextResponse.json(
				{ success: false, message: "Invalid Password !!" },
				{ status: 400 }
			);
		}
		// Create token data
		const tokenData = {
			id: user._id,
			email: user.email,
			username: user.username,
		};
		const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
			expiresIn: "1d",
		});
		// Creating Response
		const response = NextResponse.json(
			{ success: true, message: "Login Successful !!" },
			{ status: 200 }
		);
		response.cookies.set("token", token, { httpOnly: true });
		return response;
	} catch (error: any) {
		return NextResponse.json(
			{ success: false, error: error.message },
			{ status: 500 }
		);
	}
};
