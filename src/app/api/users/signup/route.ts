import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

Connect();

export const POST = async (request: NextRequest) => {
	try {
		const reqBody = await request.json();
		console.log(reqBody);
		const { username, email, password } = reqBody;
		// Check if user exit
		const user = await User.findOne({ email });
		if (user) {
			return NextResponse.json(
				{ error: "User already exits!" },
				{ status: 400 }
			);
		}
		// hashing password
		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		// Creating a user
		const newUser = new User({
			username,
			email,
			password: hashedPassword,
		});
		// Saving the user in db
		const savedUser = await newUser.save();
		// Sending response
		return NextResponse.json({
			message: "User Created successfully",
			success: true,
			savedUser,
		});
	} catch (error: any) {
		return NextResponse.json({success:false, error: error.message }, { status: 500 });
	}
};
