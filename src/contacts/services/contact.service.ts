import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Db } from 'mongodb';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Contact } from '../entities/contact.entity';
import { CreateContactDto } from '../dtos/contact.dto';

@Injectable()
export class ContactService {
    constructor(
        @InjectModel(Contact.name) private contactModel: Model<Contact>,
        @Inject('MONGO') private database: Db
    ) {}

    findAll() {
        return this.contactModel.find().exec()
    }

    async findOne(id: string) {
        const user = await this.contactModel.findById(id).exec()
        if(!user) {
            throw new NotFoundException(`Product # ${id} not found`)
        }
        return user
    }

    async create(data: CreateContactDto) {
        
        const newModel = new this.contactModel(data);
        const model = await newModel.save();
        const {...rta} = model.toJSON()
        //const {alias, ...rta} = model.toJSON()
        return rta 
    }
}