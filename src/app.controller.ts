import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { modelVoiture } from './model/voiture';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() createVoitureDto: modelVoiture) {
    return 'This action adds a new voiture';
  }

  @Get()
  findAll(@Query() query: any) {
    return `This action returns all voiture (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} voiture`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVoitureDto: modelVoiture) {
    return `This action updates a #${id} voiture`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} voiture`;
  }
}
