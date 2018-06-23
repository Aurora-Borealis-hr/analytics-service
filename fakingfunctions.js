const faker = require('faker');

const createTagsArr = () => {
  let arr = [];
  for (let i = 0; i < 50 * Math.random(); i++) {
    arr.push(faker.random.word());
  }
  
  return arr;
}

const createSubsArr = () => {
  let arr = [];
  for (let i = 0; i < 50 * Math.random(); i++) {
    let word = faker.random.uuid();
    arr.push(word.slice(0, word.length / 2));
  }
  
  return arr;
}
  
const createUserObj = (numberOfObjects) => {
  let arr = [];
  for (let i = 0; i < numberOfObjects; i++) {
    arr.push({
      id: faker.random.number(),
      username: faker.internet.userName(),
      dob: faker.date.past(13),
      email: faker.internet.email(),
      country: faker.address.country(),
      state: faker.address.state(),
      city: faker.address.city(),
      subscriptions: createSubsArr(),
      tags: createTagsArr()
    });
  }
}

let adArr = ['video-skippable', 'video-non-skippable', 'display', 'overlay', 'bumper', 'sponsored-cards'];
let osArr = ['desktop', 'mobile-iOS', 'mobile-andriod', 'tv', 'console'];

const createAdType = () => {
  return adArr[Math.floor(Math.random() * 6)];
}

const createOSType =() => {
  return osArr[Math.floor(Math.random() * 5)];
}

const createInteractionObj = (numberOfObjects) => {
  let arr = [];
  for (let i = 0; i <  numberOfObjects; i++) {
    arr.push({
      interactionId: faker.random.number(),
      interactionScore: faker.random.number({min: 0, max: 10}),
      adType: createAdType(),
      subscribedUser: faker.random.boolean(),
      interactionDate: faker.date.recent(),
      playerOS: createOSType(),
      country: faker.address.country(),
      state: faker.address.state(),
      city: faker.address.city()
    });
  }
  return arr;
}

module.exports = {
  createTagsArr,
  createSubsArr,
  createUserObj,
  adArr,
  osArr,
  createAdType,
  createOSType,
  createInteractionObj
}