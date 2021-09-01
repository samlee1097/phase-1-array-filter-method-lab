const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
function findMatching(array, name){
    return array.filter(driversName => driversName.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(array, name){
    return array.filter(driversName => driversName.slice(0,name.length) == name)
}

function matchName(array, name){
    return array.filter(driversName => driversName.name === name);
}