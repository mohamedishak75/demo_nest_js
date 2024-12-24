import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VoitureModule } from './voiture/voiture/voiture.module';

@Module({
  imports: [
    AuthModule,
    VoitureModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  providers: [],
})
export class AppModule {}
