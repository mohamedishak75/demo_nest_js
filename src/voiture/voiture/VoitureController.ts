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

  //@UseGuards(AuthGuard)
  @Post()
  async create(@Res() response, @Body() createVoiture: modelVoiture) {
    try {
      const newVoiture = await this.voitureService.create(createVoiture);
      console.log('dddddddddddddddddddddddddd', createVoiture);
      return response.status(HttpStatus.CREATED).json({
        message: 'Student has been created successfully',
        newVoiture,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Student not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async findAll(@Res() response) {
    const allVoiture = await this.voitureService.findAll();
    return response.status(HttpStatus.CREATED).json({
      message: 'Student has been created successfully',
      allVoiture,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVoiture: modelVoiture) {
    return `This action updates a #${id} voiture`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} voitue`;
  }
}
