import { SchemaFactory } from '@nestjs/mongoose';
import { Prop, Schema } from '@nestjs/mongoose/dist/decorators';

export class modelVoiture {
  numeroSerie: number;
  couleurVoiture: string;
  modelVoiture: string;
  marqueVoiture: string;
}

@Schema()
export class Voiture {
  @Prop()
  numeroSerie: number;
  @Prop()
  couleurVoiture: string;
  @Prop()
  modelVoiture: string;
  @Prop()
  marqueVoiture: string;
}

export const VoitureSchema = SchemaFactory.createForClass(Voiture);
