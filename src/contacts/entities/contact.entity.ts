import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Contact extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  alias: string;

}

export const ContactSchema = SchemaFactory.createForClass(Contact);