import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { modelVoiture } from 'src/model/voiture';
import { VoitureService } from './voiture.service';

@Controller()
export class VoitureController {
  constructor(private voitureService: VoitureService) {}

  //@UseGuards(AuthGuard)
  @Post()
  async create(@Body() createVoiture: modelVoiture) {
    return this.voitureService.create(createVoiture);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} voiture`;
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
