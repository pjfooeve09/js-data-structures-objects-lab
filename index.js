// Write your solution in this file!

const driver = {}

//creates new object and updates new object, but does not destruct(modify) original
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

//updates original, but it also destrcuts(modifies) the original
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

//creates new object and deletes object, but does not destruct(modify) original
function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
  }

//creates new object and deletes object, but it also destructs(modifies) original  
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}