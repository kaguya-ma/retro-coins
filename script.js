let balance = 100;
function tossCoin(choice) {
  document.querySelector("img").animate([
  // keyframes
  { transform: 'rotateY(720deg)' },
], {
  // timing options
  duration: 500,
  iterations: 1
});
  let result;
  console.log(choice)
  let number = Math.floor(Math.random()* 2)
  console.log(number)
  if(number === 0) {
    result = "Heads"
    document.querySelector("img").setAttribute("src", "front.png")
  }
  else {
    result = "Tails"
    document.querySelector("img").setAttribute("src", "back.png")
  }

if(result === choice) {
  balance += 2;
  document.querySelector("#result").innerHTML=`${result}! Won!`

  document.querySelector(".hidden-coin").animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(1000px)' }
], {
  // timing options
  duration: 1000,
  iterations: 1
});

document.querySelector(".hidden-coin2").animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(1000px)' }
], {
  // timing options
  duration: 500,
  iterations: 1
});

document.querySelector(".hidden-coin3").animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(1000px)' }
], {
  // timing options
  duration: 1500,
  iterations: 1
});



}

else {
  balance -= 1;
  document.querySelector("#result").innerHTML=`${result}! Lost!`
}

document.querySelector("h1").innerHTML=`${balance}£`







}
