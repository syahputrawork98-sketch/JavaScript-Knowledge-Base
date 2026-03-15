// C02 - Example 03: this in object method

const user = {
  name: 'Arta',
  say() {
    console.log(this.name);
  },
};

user.say();
