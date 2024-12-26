import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VoitureModule } from './voiture/voiture/voiture.module';
import { Voiture, VoitureSchema } from './model/voiture';

@Module({
  imports: [
    AuthModule,
    VoitureModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'test',
    }),
  ],
  providers: [],
})
export class AppModule {}
