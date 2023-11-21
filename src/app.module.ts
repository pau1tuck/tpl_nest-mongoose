import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./modules/users/users.module";
import { TasksModule } from "./modules/tasks/tasks.module";

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: ".env.local" }),
		MongooseModule.forRoot(process.env.DB_URL),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
