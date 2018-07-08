const faker = require('faker');
const util = require('util');


// const idArr = [68385,19139,32541,98867,60775,29215,18753,84471,46732,42394,78579,26171,52665,55439,47151,19267,95023,18605,47954,96106,23490,97875,88560,83706,29881,15992,29703,28172,10138,70763,86897,30853,39735,76339,92086,73506,98203,76992,23582,60137,18071,34619,20272,21308,64989,44097,43214,16867,30554,68506,66222,95241,95077,59658,98182,53851,52765,69413,45765,92298,40439,81354,56063,89028,36240,30112,93264,35698,11331,43943,41968,72281,70157,86606,71080,89025,18750,75145,25684,62638,51319,12655,53727,25435,59452,68036,31313,54517,93127,81865,95661,12546,61382,68524,37826,56902,97135,45192,21635,43986,78423,20931,85433,11382,43589,10310,90890,19934,48526,89139,85027,98183,70740,45445,95709,84956,17706,91597,91654,71480,74387,64109,63702,95404,29717,26205,26954,71968,84407,55158,12539,39732,41925,19370,80858,57003,93563,58025,35405,74817,70048,12558,74592,77220,43378,36480,43389,60691,17803,20967,97864,80492,85489,18933,84729,65760,14893,86226,59479,76204,20940,38109,91411,36683,59361,54212,82871,22600,67105,77893,28576,49297,68170,47384,74589,64596,19211,83761,93152,30353,57790,48737,35667,97919,91240,10813,17653,52115,55826,75130,67702,76144,33432,79577,31607,62465,57956,46426,37210,98791,77173,13304,59462,12403,88156,52385,54836,12377,84598,77216,34094,36318,18107,98628,96597,21613,43931,67833,83677,38585,19587,39537,92100,33695,11959,43892,48647,23829,10743,15509,28029,84325,44981,24592,39284,75489,22584,20485,79815,71316,63853,32368,78692,86932,32939,73104,44751,81006,23065,59843,58529,72884,26436,83155,57932,27756,32846,75930,17479,47301,24202,67130,53568,97806,21294,74432,11311,71814,45906,67185,55837,29579,80040,57350,86106,11483,12563,74390,45558,52343,95187,44662,24787,54371,64377,74059,78498,89889,51946,91272,86024,40243,97186,25238,81607,65827,46898,65054,42073,97659];

/************************************************************/
/******** Creating Fake User Objects Functions Start ********/
/************************************************************/


//this function is only relevant for creating a user object
//using faker, creates and returns an array of random works as tags
//the number of elements in the array are fifty or less

const createTagsArr = () => {
  let arr = [];
  for (let i = 0; i < 50 * Math.random(); i++) {
    arr.push(faker.random.word());
  }
  
  return arr;
}

//this function is only relevant for creating a user object
//using faker, creates and returns an array of random id's as tags
//the number of elements in the array are fifty or less
const createSubsArr = () => {
  let arr = [];
  for (let i = 0; i < 50 * Math.random(); i++) {
    let word = faker.random.uuid();
    arr.push(word.slice(0, word.length / 2));
  }
  
  return arr;
}

//this function is not used. It could be used when creating an actual analysis algorithym
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

/************************************************************/
/********** Creating Fake User Objects Functions End ********/
/************************************************************/



/************************************************************/
/**** Creating Fake Interaction Objects Functions Start *****/
/************************************************************/


const adArr = ['video-skippable', 'video-non-skippable', 'display', 'overlay', 'bumper', 'sponsored-cards'];
const osArr = ['desktop', 'mobile-iOS', 'mobile-andriod', 'tv', 'console'];

const createAdType = () => {
  return adArr[Math.floor(Math.random() * 6)];
}


const createOSType =() => {
  return osArr[Math.floor(Math.random() * 5)];
}

const createInteractionObj = (numberOfObjects) => {
  let arr = [];
  
  return new Promise( (resolve) => {
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

    resolve(arr);
  });
}


/************************************************************/
/***** Creating Fake Interaction Objects Functions End ******/
/************************************************************/


/************************************************************/
/********** Create Schema Entry Function Start **************/
/************************************************************/

const createUserId = () => {
  return faker.random.number({min:100000, max:999999});
}

async function createSchemaEntry() {
  let obj = {};
  obj.id = createUserId();
  obj.interactions = await createInteractionObj(Math.floor(Math.random() * 500));
  return obj;
}

async function createSchemasPlural(numberOfEntries) {
  let arr = [];

  for (let i = 0; i < numberOfEntries; i++) {
    let entry = await createSchemaEntry();
    arr.push(entry);
  }

  return arr;
}

/************************************************************/
/************ Create Schema Entry Function End **************/
/************************************************************/


module.exports = {
  createTagsArr,
  createSubsArr,
  createUserObj,
  adArr,
  osArr,
  createAdType,
  createOSType,
  createInteractionObj,
  createUserId,
  createSchemasPlural,
  createSchemaEntry
}