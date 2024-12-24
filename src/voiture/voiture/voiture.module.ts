import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { modelVoiture, Voiture, voitureSchema } from 'src/model/voiture';
import { VoitureController } from './VoitureController';
import { VoitureService } from './voiture.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Voiture.name, schema: voitureSchema }]),
  ],
  controllers: [VoitureController],
  providers: [VoitureService],
})
export class VoitureModule {}
