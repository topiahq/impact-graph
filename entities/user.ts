import { Field, ID, ObjectType } from 'type-graphql'
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany,
  ManyToMany,
  BaseEntity,
  JoinTable
} from 'typeorm'
import { OrganisationUser } from './organisationUser'
import { Organisation } from './organisation'

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly id: number

  @Field()
  @Column('text', { unique: true })
  email: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  lastName?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  name?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  walletAddress?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  password?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  avatar?: string

  @Column()
  loginType: string

  @Column('bool', { default: false })
  confirmed: boolean

  @OneToMany(
    type => OrganisationUser,
    organisationUser => organisationUser.user
  )
  organisationUsers?: OrganisationUser[]

  // @Field(type => [OrganisationUser], { nullable: true })
  // @OneToMany(
  //   type => OrganisationUser,
  //   organisationUser => organisationUser.user
  // )
  // organisationUsers?: OrganisationUser[]

  @Field(type => Organisation)
  // @JoinTable({ name: 'organisation_user' })
  @ManyToMany(
    type => Organisation,
    organisation => organisation.users
  )
  organisations: Organisation[]
  // @Field(type => [Organisation])
  // organisations: Organisation[]
}
