import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

interface Address {
	// addressLine1?: string;
	// addressLine2?: string;
	city?: string;
	state?: string;
	country?: string;
	postalCode?: string;
}

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
	@Prop({ required: true })
	userId: string;

	@Prop({ unique: true })
	username: string;

	@Prop({ unique: true, required: true })
	email: string;

	@Prop()
	password: string; // Hashed password

	@Prop()
	givenName: string;

	@Prop()
	familyName: string;

	@Prop()
	preferredName: string;

	@Prop()
	profilePicture: string; // URL or path to the image

	// @Prop()
	// bio: string;

	@Prop()
	birthDate: Date;

	@Prop()
	gender: string;

	@Prop()
	phoneNumber: string;

	// Address fields (can also be a sub-document)

	@Prop(
		raw({
			// addressLine1: { type: String },
			// addressLine2: { type: String },
			city: { type: String },
			state: { type: String },
			country: { type: String },
			postalCode: { type: String },
		}),
	)
	address: Address;

	@Prop({ default: false })
	isVerified: boolean;

	@Prop({ default: false })
	twoFactorEnabled: boolean;

	// User preferences
	@Prop()
	language: string;

	@Prop()
	locale: string;

	@Prop()
	timeZone: string;

	@Prop({ type: [String], default: [] })
	roles: string[];

	// Account status
	@Prop({ default: true })
	isActive: boolean;

	@Prop()
	isSuspended: boolean;

	// Timestamps
	@Prop({ default: Date.now })
	createdAt: Date;

	@Prop({ default: Date.now })
	updatedAt: Date;

	@Prop()
	lastLogin: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
