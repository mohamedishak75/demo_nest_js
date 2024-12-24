import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VoitureController } from './VoitureController/VoitureController';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [VoitureController],
  providers: [],
})
export class AppModule {}
