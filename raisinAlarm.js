const raisinAlarm = function (cookie) {
  for(let i of cookie){
    if(i === "🍇"){
      return "Raisin alert!"
    }
  }
  // for(let i = 0; i < cookie.length; i++){
  //   if(cookie.includes("🍇")){
  //    return "Raisin alert!"
  //   }
  // }
  return "All good!"
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

/*
Raisin alert!
Raisin alert!
All good!
*/