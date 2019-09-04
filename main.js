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

const answer = []; 

function primitives(obj) {
    Object.keys(obj).map((key) => {
        (typeof obj[key] == 'object' && obj[key] !== null) ? primitives(obj[key]) : answer.push(obj[key]);
    })
}

primitives(pets)
console.log(answer)