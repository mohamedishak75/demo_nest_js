import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { modelVoiture } from 'src/model/voiture';

export class VoitureController {
  @Post()
  create(@Body() createVoiture: modelVoiture) {
    return 'This action adds a new voiture';
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
