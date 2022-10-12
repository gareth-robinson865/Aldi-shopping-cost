const Food = require('../../models/food');

const searchFood = () => {
    const searchName = document.getElementsByClassName('searchButton').value
    console.log(searchName);
    //!TODO need to check the searchname value is being taken
    Food.findOne(searchFood)
}
