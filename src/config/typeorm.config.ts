import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true, // change to false later
};
