const person = {
  name: "Misha",
  age: 24,
  isAdmin: true,
  languages: ["ru", "ua", "en"],
  //   "complex key": "Complex Value",
  //   ["key_" + (1 + 3)]: "Compluted Key",
  greet() {
    console.log("greet is work");
  },
  info() {
    console.info("Информация про человека по имени", this.name);
  },
};
// console.log(person.name);
// const ageKey = "age";
// console.log(person[ageKey]);
// console.log(person["complex key"]);
// person.age++;
// person.languages.push("by");
// delete person["key_4"];
// console.log(person);
// console.log(person["key_4"]);

// const name = person.name;
// const age = person.age;
// const languages = person.languages;

// const { name, age, languages } = person;
// console.log(name, age, languages);

// for (let key in person) {
// //   if (person.hasOwnProperty(key)) {
// //     console.log("key ", key);
// //     console.log("value ", person[key]);
// //   }
// // }

// Object.keys(person).forEach((key) => {
//   console.log("key ", key);
//   console.log("valuse ", person[key]);
// });

///CONTEXT
// person.info();

const logger = {
  keys() {
    console.log("Object Keys", Object.keys(this));
  },

  // const bound = logger.keys.bind(person);
  // bound();

  // logger.keys.call(person);
  keysAndValues() {
    // const self = this;
    Object.keys(this).forEach(
      function (key) {
        console.log(`"${key}": ${this[key]}`);
      }.bind(this)
    );
  },
  widthParams(top = false, bottom = false, between = false) {
    if (top) {
      console.log("------ START -----");
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`"${key}": ${this[key]}`);
      if (between && index !== array.length - 1) {
        console.log("-------------");
      }
    });

    if (bottom) {
      console.log("------ END -----");
    }
  },
};
// logger.keysAndValues.call(person);
logger.widthParams.call(person, true, true, true);
logger.widthParams.apply(person, [true, true, true]);
