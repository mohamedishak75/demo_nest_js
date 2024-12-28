import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { modelVoiture } from 'src/model/voiture';
import { VoitureService } from './voiture.service';
import { response } from 'express';
@Controller('voiture')
export class VoitureController {
  constructor(private voitureService: VoitureService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Res() response, @Body() createVoiture: modelVoiture) {
    try {
      const newVoiture = await this.voitureService.create(createVoiture);
      return response.status(HttpStatus.CREATED).json({
        message: 'voiture has been created successfully',
        newVoiture,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'car not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async findAll(@Res() response) {
    const allVoiture = await this.voitureService.findAll();
    return response.status(HttpStatus.CREATED).json({
      message: 'liste des voitures',
      allVoiture,
    });
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteVoiture(@Param('id') id, @Res() response) {
    try {
      const voituresupprimer = await this.voitureService.deleteVoiture(id);
      return response.status(HttpStatus.CREATED).json({
        message: 'voiture supprimer avec succes',
        voituresupprimer,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'voiture not found!',
        error: 'Bad Request',
      });
    }
  }

  @Get(':id')
  async getVoiture(@Param('id') id, @Res() response) {
    try {
      const voiture = await this.voitureService.getVoiture(id);
      return response.status(HttpStatus.CREATED).json({
        message: 'voiture trouver avec succes',
        voiture,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'voiture not found!',
        error: 'Bad Request',
      });
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVoiture: modelVoiture) {
    return `This action updates a #${id} voiture`;
  }
}
