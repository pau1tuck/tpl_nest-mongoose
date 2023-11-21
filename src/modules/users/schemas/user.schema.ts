import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
	@Prop({ required: true })
	id: string;

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
	// @Prop()
	// addressLine1: string;

	// @Prop()
	// addressLine2: string;

	@Prop()
	city: string;

	@Prop()
	state: string;

	// @Prop()
	// postalCode: string;

	@Prop()
	country: string;

	// Security and compliance
	@Prop({ default: false })
	verified: boolean;

	@Prop({ default: false })
	twoFactorEnabled: boolean;

	// User preferences
	@Prop()
	language: string;

	@Prop()
	locale: string;

	@Prop()
	timeZone: string;

	// Roles and permissions
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
