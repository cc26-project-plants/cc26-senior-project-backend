import { PlantStats } from 'src/plant-stats/plant-stats.entity';
import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Plants extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  plantName: string;

  @Column()
  plantType: string;

  @Column()
  photo: string;

  // @ManyToOne((type) => User, (user) => user.id)
  // user: User;

  // @OneToMany((type) => PlantStats, (plantStats) => plantStats.id)
  // plantStats: PlantStats;
}
