import { PlantStats } from 'src/plant-stats/plant-stats.entity';
import { User } from 'src/user/user.entity';
import { BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Plants extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  plantName: string;

  @Column()
  photo: string;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;

  // @OneToMany(type => PlantStats, plantStats => plantStats.id)
  // plantStats: PlantStats;
}
