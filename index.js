
const driversNames = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers,name){
    return drivers.filter(drivers=>drivers.toLowerCase()===name.toLowerCase())

}
      console.log("Drivers name:",findMatching(driversNames, "Bobby"));
      
      console.log("Drivers name:",findMatching(driversNames, "Willy"));

 function fuzzyMatch(drivers,name){
        return drivers.filter(drivers=>drivers.toLowerCase().startsWith(name.toLowerCase()));
      }
      console.log("Drivers name:",fuzzyMatch(driversNames,"sa"));
      console.log("Drivers name:",fuzzyMatch(driversNames,"y"));
      console.log("Drivers name:",fuzzyMatch(driversNames,"mm"));

      const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];  

      
function matchName(drivers,name){
    return drivers.filter(drivers=>drivers.name===name);
}
console.log("Drivers profile:",matchName(drivers,"Bobby"));
