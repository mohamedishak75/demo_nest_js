import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Voiture, VoitureSchema } from 'src/model/voiture';
import { VoitureController } from './VoitureController';
import { VoitureService } from './voiture.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Voiture.name, schema: VoitureSchema }]),
  ],
  controllers: [VoitureController],
  providers: [VoitureService],
})
export class VoitureModule {}
