function scuberGreetingForFeet(feet) {
  let response;
  if (feet <= 400) {
    response = 'This one is on me!';
  } else if (feet > 400 && feet <= 2000) {
    response = 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
    response = 'I will gladly take your thirty bucks.';
  } else {
    response = 'No can do.';
  }
  return response;
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
      break;
  }
  return response;
}
