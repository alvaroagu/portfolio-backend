import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectSchema = HydratedDocument<Project>;
@Schema()
export class Project {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  languages: string;

  @Prop()
  image: string;
}
export const ProjectSchema = SchemaFactory.createForClass(Project);
