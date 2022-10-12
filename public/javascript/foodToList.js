const Food = require('../../models/food');

const searchFood = () => {
    //getting the value from the search item
    const searchName = document.getElementsByClassName('searchButton').value
    console.log(searchName);
    //!TODO need to check the searchname value is being taken
    const name = document.createElement('li')
    const price = document.createElement('li')
    const aisle = document.createElement('li')
    Food.findOne(searchFood)
    //!TODO need to check that the search is coming through
}
