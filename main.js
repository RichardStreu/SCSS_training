import dogUser from "./script/user.js"; // its possible to rename this class, cause this class is exported by default in the user.js. But when you log userMarly, the output class name is still be User, whichs the name by declaring in user.js. So it's only possible to rename but not necessary.

const userMarly = new dogUser("Marly", 11);

console.log(userMarly); // the new object, which is saved in userMarly will be logged

import { printName } from "./script/user.js"; // import the function

printName(userMarly); // call the function and give her the used parameters (in this case, the object(class) user)

import { printAge as showDogsAge } from "./script/user.js"; // import the function. with the keyword "as" it's possible to rename the function by import.

showDogsAge(userMarly); // now you can call the function by its new name and giving it the parameters needed.
