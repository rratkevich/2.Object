const pets = {
    name: 'Kitty',
    numberLegs: 4,
    body: true,
    petArr: [ {id:0, name: null}, ],   
    my: {

        cats: {
            nameCats: {
                cat1: 'fas',
                cat2: 'Nat',
                cat3: false,
            },
            
        },
        
    },
    dogs: undefined,
    caws: null,
};

const allowed = ['name', 'body'];

const filtered = Object.keys(pets)
  .filter(key => allowed.includes(key))
  .reduce((obj, key) => {
    obj[key] = pets[key];
    return obj;
  }, {});

console.log(filtered);

