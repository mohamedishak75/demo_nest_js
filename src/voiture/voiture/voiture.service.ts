import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { modelVoiture, Voiture } from 'src/model/voiture';

@Injectable()
export class VoitureService {
  constructor(
    @InjectModel(Voiture.name) private voitureModel: Model<Voiture>,
  ) {}

  async create(createVoiture: modelVoiture): Promise<Voiture> {
    const createdCat = new this.voitureModel(createVoiture);
    return createdCat.save();
  }

  async deleteVoiture(idVoiture: string): Promise<Voiture> {
    return this.voitureModel.findByIdAndDelete(idVoiture).exec();
  }
  async getVoiture(idVoiture: string): Promise<Voiture> {
    return this.voitureModel.findById(idVoiture).exec();
  }

  async findAll(): Promise<Voiture[]> {
    return this.voitureModel.find().exec();
  }
}
