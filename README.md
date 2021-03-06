# **Nestjs Graphql - Todo List example**

![CI](https://github.com/max10rogerio/nestjs-graphql-todo-list/workflows/CI/badge.svg)

Features:

- [x] Create
- [x] List
- [x] Toggle
- [ ] Find by id
- [ ] Remove
- [ ] Limit of 100 todos per user
- [ ] Tests

**Example**

```graphql
query list {
  todoList {
    id
    description
    finished
  }
}

mutation toggle {
  todoToggle(id: "d6d7450bb86fbdd9e0228257380c07d") {
    id
    description
    finished
  }
}

mutation create {
  todoCreate(description: "todo test 2") {
    id
    description
    finished
  }
}
```

**Header**

```json
{
  "user": "max"
}
```
