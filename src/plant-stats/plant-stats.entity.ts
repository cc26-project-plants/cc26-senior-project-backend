import { Plants } from 'src/plants/plants.entity';
import {
  BaseEntity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class PlantStats extends BaseEntity {
  @PrimaryGeneratedColumn()
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

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', precision: 0 })
  readonly createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', precision: 0 })
  readonly updatedAt: Date;
}
//double check typeorm types for psql
