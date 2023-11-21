import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
	@Prop({ required: true })
	name: string;
}

export const UserSchema = SchemaFactory.createForClass(Task);
