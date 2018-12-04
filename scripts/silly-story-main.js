var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

    
randomize.addEventListener('click', result);

function result() {
    var newStory,insertX,insertY,insertZ,xItem,yItem,zItem,name;
    insertX = ["Willy the Goblin",
        "Big Daddy",
        "Father Christmas"
        ],
    insertY = ["the soup kitchen", "Disneyland", "the White House"],
    insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
      xItem = randomValueFromArray(insertX);
      yItem = randomValueFromArray(insertY);
      zItem = randomValueFromArray(insertZ);
      newStory = "It was 94 fahrenheit outside, so " + xItem + " went for a walk. When they got to " + yItem + ", they stared in horror for a few moments, then " + zItem + ". Bob saw the whole thing, but was not surprised — " + xItem + " weighs 300 pounds, and it was a hot day.";

  if(customName.value !== '') {
    var name = customName.value;
    newStory = "It was 94 fahrenheit outside, so " + xItem + " went for a walk. When they got to " + yItem + ", they stared in horror for a few moments, then " + zItem + ". " + name + " saw the whole thing, but was not surprised — " + xItem + " weighs 300 pounds, and it was a hot day.";
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94);
    newStory = "It was " + temperature + " fahrenheit outside, so " + xItem + " went for a walk. When they got to " + yItem + ", they stared in horror for a few moments, then " + zItem + ". " + name + " saw the whole thing, but was not surprised — " + xItem + " weighs " + weight + " pounds, and it was a hot day.";
  }
    story.textContent = newStory;
    story.style.visibility = 'visible'; 
}








