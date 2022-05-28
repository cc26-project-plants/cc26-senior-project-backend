import { Plants } from 'src/plants/plants.entity';
import { BaseEntity, ManyToOne, PrimaryColumn, Column, Entity } from 'typeorm';

@Entity()
export class PlantStats extends BaseEntity {
  @PrimaryColumn()
  id: number;

  // @ManyToOne((type) => Plants, (plant) => plant.id)
  // plant: Plants;

  @Column('float')
  lightLevel: number;

  @Column('float')
  soilWaterLevel: number;

  @Column('float')
  humidityLevel: number;

  @Column()
  temperature: number;

  @Column('timestamp')
  time: Date;
}
//double check typeorm types for psql
