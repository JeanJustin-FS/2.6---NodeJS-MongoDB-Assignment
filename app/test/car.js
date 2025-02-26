const car = (str)   => {    
    const [make, model, year] = str.split('car');
    return {make, model, year };
}

module.exports = car;