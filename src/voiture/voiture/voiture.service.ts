import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { modelVoiture, Voiture, voitureSchema } from 'src/model/voiture';

@Injectable()
export class VoitureService {
  constructor(
    @InjectModel(Voiture.name) private voitureModel: Model<Voiture>,
  ) {}

  async create(createVoiture: modelVoiture): Promise<Voiture> {
    const createdCat = new this.voitureModel(createVoiture);
    return createdCat.save();
  }

  async findAll(): Promise<any[]> {
    return this.voitureModel.find().exec();
  }
}