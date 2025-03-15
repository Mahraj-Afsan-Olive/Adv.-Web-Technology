let greeting;
let hour=11;
if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  console.log(greeting);
let time=5;
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  console.log(greeting);

  let x = "0";
  let text;
  
  switch (x) {
    case "0":
      text = "Off";
      break;
    case "1":
      text = "On";
      break;
    default:
      text = "No value found";
  }
  
  console.log(text); 
  