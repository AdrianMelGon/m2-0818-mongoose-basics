const mongoose = require('mongoose');
const Cat = require('./models/Cat');

const createCat = (name="ironhacker") => {
    //const kitty = new Cat({ name });
    //return kitty.save();
    let cat = Cat.create({name});
    return cat.save()
        .then(cat => {
            cat.name = 'pepe';
            return cat.save()
        })
}

const crazyCat = (n=10) => {
    let proms = []
    for(let i=0; i<n; i++){
        proms.push(createCat(`ironhacker-${i}`));
    }
    return Promise.all(proms);
} 


mongoose.connect('mongodb://localhost/mongoose-demo-0818', { useNewUrlParser: true })
.then( () => {
    return Cat.collection.drop();
})
.then( () => {
    console.log("Connected to db!");
    return crazyCat(10);
})
.then( () => {
    return Cat.find();
})
.then(cats => {
    console.log("cats list");
    console.log(cats);
    mongoose.disconnect();
})
.catch( e => {
    console.log(e);
})

