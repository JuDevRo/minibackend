import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { CreateContactDto } from '../dtos/contact.dto';
import { ContactService } from '../services/contact.service';

@Controller('contacts') // De aquí cambio el nombre de la ruta
export class ContactController {
    constructor(private contactsService: ContactService) {}

    @Get()
    getAll() {
        return this.contactsService.findAll();
  }

    @Get(':userId')
    getOne(@Param('contactId') userId: string) {
        return this.contactsService.findOne(userId);
  }

  @Post()
  create(@Body() payload: CreateContactDto) {
    return this.contactsService.create(payload);
  }
}