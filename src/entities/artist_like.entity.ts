import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Artist } from './artist.entity';
import { User } from './user.entity';

@Entity()
export class ArtistLike {
  @PrimaryGeneratedColumn()
  artistLikeId: number;

  @Column()
  userId: number;

  @Column()
  artistId: number;

  @Column()
  createdAt: string;

  @Column({ default: false })
  isLike: boolean;
  
 // 좋아요는 여러개? 사용자는 하나
 // 
  // @ManyToOne(type => User)
  // @JoinColumn({
  //   name: 'userId',
  //   referencedColumnName: 'userId'
  // })
  // User:User;
  
  // @ManyToOne(type => Artist)
  // @JoinColumn({
  //   name: 'artistId',
  //   referencedColumnName: 'artistId'
  // })
  // Artist:Artist;

  @ManyToOne(() => User, (user) => user.artistLikes)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'userId'}])
  user: User;

  @ManyToOne(() => Artist, (artist) => artist.artistLikes)
  @JoinColumn([{ name: 'artistId', referencedColumnName: 'artistId'}])
  artist: Artist;
    



}
