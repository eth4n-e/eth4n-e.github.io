const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'On a sunny 85 fahrenheit day off the Mediterranean coast, Leo found himself in an unusual challenge posed by a seagull named :insertx:, who dared him to enter a local talent show. Skeptical that a movie star could win over the island’s crowd, :insertx: taught Leo to juggle seashells while balancing on one foot and tossing in some fancy moves at :inserty:. The next day, Leo performed under the scorching sun, juggling seashells that weighed at least a 300 pounds each, and to everyone’s surprise, he won the crowd’s cheers and a small seashell trophy. :insertx: cawed proudly, saying, “Not quite King of the World, but definitely King of the Shells!” as Leo  :insertz:.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Leo', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone';
    const temperature =  Math.round((94-32) * (5/9)) + ' centigrade';

    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('85 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}