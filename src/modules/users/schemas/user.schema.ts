import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
	@Prop({ required: true })
	id: string;

	@Prop()
	email: string;

	@Prop()
	givenName: string;

	@Prop()
	familyName: string;

	@Prop()
	preferredName: string;

	@Prop({ type: [String], default: [] })
	roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
