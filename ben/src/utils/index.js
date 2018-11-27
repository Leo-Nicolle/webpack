
const uuidv4 = require('uuid/v4');

console.log("ici !! ");

export default {

  getEmptyItem() {
    return {
      id: uuidv4(),
      name: 'empty',
      makingTime: 0,
      usingTime: 0,
      lifeTime: 0,
      inductTime: 0,
      subItems: [],
    };
  },

};
