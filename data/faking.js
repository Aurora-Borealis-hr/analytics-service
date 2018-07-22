const faker = require('faker');

/************************************************************/
/******** Creating Fake User Objects Functions Start ********/
/************************************************************/


//this function creates an array of tags for the user object
const createTagsArr = () => {
  let arr = [];
  for (let i = 0; i < 50 * Math.random(); i++) {
    arr.push(faker.random.word());
  }
  
  return arr;
}

//this function creates random subscription keys for the user object
const createSubsArr = () => {
  let arr = [];
  for (let i = 0; i < 50 * Math.random(); i++) {
    let word = faker.random.uuid();
    arr.push(word.slice(0, word.length / 2));
  }
  
  return arr;
}

//this function returns a single user object
const createUserObj = () => {
  return {
    username: faker.internet.userName(),
    dob: faker.date.past(13),
    email: faker.internet.email(),
    country: faker.address.country(),
    state: faker.address.state(),
    city: faker.address.city(),
    subscriptions: createSubsArr(),
    tags: createTagsArr()
  };
}

/************************************************************/
/********** Creating Fake User Objects Functions End ********/
/************************************************************/



/************************************************************/
/**** Creating Fake Interaction Objects Functions Start *****/
/************************************************************/



//selects a random ad
const createAdType = () => {
  const adArr = ['video-skippable', 'video-non-skippable', 'display', 'overlay', 'bumper', 'sponsored-cards'];
  return adArr[Math.floor(Math.random() * 6)];
}

//selects a random OS
const createOSType =() => {
  const osArr = ['desktop', 'mobile-iOS', 'mobile-andriod', 'tv', 'console'];
  return osArr[Math.floor(Math.random() * 5)];
}

//accepts a number of interactions to make, and a user object created by another function
const createInteractionObj = (numberOfInteractions, userObj) => {
  let arr = [];

  let country;
  let state; 
  let city;

  //if there is a userobject passed in
  if (userObj) {
    country = userObj.country;
    state = userObj.state;
    city = userObj.city;
  } else {
    country = faker.address.country();
    state = faker.address.state();
    city = faker.address.city();
  }
  
  return new Promise( (resolve) => {
    for (let i = 0; i < numberOfInteractions; i++) {
      arr.push({
        interactionScore: faker.random.number({min: 0, max: 10}),
        adType: createAdType(),
        subscribedUser: faker.random.boolean(),
        interactionDate: faker.date.recent(),
        playerOS: createOSType(),
        country: country,
        state: state,
        city: city,
      });
    }

    resolve(arr);
  });
}

/************************************************************/
/***** Creating Fake Interaction Objects Functions End ******/
/************************************************************/


/************************************************************/
/********* Create Schema Entries Function Start *************/
/************************************************************/


//function for receiving object from user service and converting it into ineractions
//if no userObject is passed in, the function will create one
//returns an object of user id and an array of interactions
async function createSchemaEntry(userObj) {
  if(!userObj) {
    userObj = createUserObj();
  }

  let obj = {};
  obj.interactions = await createInteractionObj(Math.floor(Math.random() * 500), userObj);
  return obj;
}

//function for faking data and adding to db 
async function createSchemasPlural(numberOfEntries) {
  let arr = [];

  for (let i = 0; i < numberOfEntries; i++) {
    let entry = await createSchemaEntry();
    arr.push(entry);
  }

  return arr;
}

/************************************************************/
/*********** Create Schema Entries Function End *************/
/************************************************************/


module.exports = {
  createTagsArr,
  createSubsArr,
  createUserObj,
  createAdType,
  createOSType,
  createInteractionObj,
  createSchemaEntry,
  createSchemasPlural
}