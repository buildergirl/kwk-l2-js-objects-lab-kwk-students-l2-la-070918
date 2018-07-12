// Write your solution in this file!

var driver = {
  name: "Sam",
  address: "11 Broadway"
};

function updateDriverWithKeyAndValue(driver, key, value) {
const copyDriver = 
Object.assign({}, driver, {[key]: value});
return copyDriver
}
