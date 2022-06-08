import { MongooseModule } from '@nestjs/mongoose';

import { Module } from '@nestjs/common';
import {ContactController} from '../contacts/controllers/contact.controller'
import { ContactService } from './services/contact.service';
import {Contact, ContactSchema} from './entities/contact.entity'

@Module({
    imports: [
        MongooseModule.forFeature([
          {
            name: Contact.name,
            schema: ContactSchema,
          },
        ]),
      ],
      controllers: [ContactController],
      providers: [ContactService],
      exports: [ContactService],
})
export class ContactsModule {}
