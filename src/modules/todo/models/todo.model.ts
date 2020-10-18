import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'Todo Object Type'
})
export class Todo {
  @Field()
  id?: string;

  @Field()
  description: string;

  @Field({ defaultValue: false })
  finished?: boolean;

  constructor(args: Todo) {
    Object.assign(this, args);
  }
}
