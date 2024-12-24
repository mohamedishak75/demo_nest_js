import { Prop, Schema } from '@nestjs/mongoose/dist/decorators';
import mongoose from 'mongoose';

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
export const voitureSchema = new mongoose.Schema(Voiture);
