import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'O23Ak!10',
  database: 'projectplant',
  logging: true,
  // entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true, //change to false later
  // migrations: ["dist/migration/**/*.js"],
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migration/*.js'],
  subscribers: ['src/subscriber/**/*.ts'],
  // cli: {
  //   entitiesDir: 'src/entity',
  //   migrationsDir: 'src/migration',
  //   subscribersDir: 'src/subscriber',
  // },
};
//TODO
//use env later instead of hard code
