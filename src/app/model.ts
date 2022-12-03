export class Model {
  user;
  items;

  constructor() {
    (this.user = 'Adem'),
      (this.items = [
        new ToDoItem('Kahvaltı', true),
        new ToDoItem('Spor', false),
        new ToDoItem('Kitap Okuma', false),
        new ToDoItem('Sinema', false),
      ]);
  }
}

export class ToDoItem {
  description;
  action;

  constructor(description: any, action: any) {
    this.description = description;
    this.action = action;
  }
}
