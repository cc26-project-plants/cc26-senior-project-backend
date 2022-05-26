import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'projectplant',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true, //change to false later
}; //use env later instead of hard code