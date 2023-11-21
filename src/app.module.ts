import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./modules/users/users.module";
import { TasksModule } from "./modules/tasks/tasks.module";
import { AuthModule } from "./modules/auth/auth.module";
import { AuthService } from "./modules/auth/auth.service";

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: ".env.local" }),
		MongooseModule.forRoot(process.env.DB_URL),
		UsersModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService, AuthService],
})
export class AppModule {}
