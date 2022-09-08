// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById('search').addEventListener('click', searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById('input-name').value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === 'po' || name === 'dragon warrior') {
    setCharacter("Po", "po", "Buddy, I am the Dragon Warrior.")
  } else if (name === 'tigress' || name === 'master tigress') {
   setCharacter("Master Tigress", "tigress", "That was pretty hardcore!")
  } else if (name === 'mantis' || name === 'master mantis') {
    setCharacter("Master Mantis", "mantis", "Fear the bug!")
  } else if (name === 'monkey' || name === 'master monkey') {
    setCharacter("Master Monkey", "monkey", "We should hang out.")
  } else if (name === 'crane' || name === 'master crane') {
    setCharacter("Master Crane", "crane", "You can chain my body, but you will never chain my warrior spirit!")
  } else if (name === 'viper' || name === 'master viper') {
    setCharacter("Master Viper", "viper", "I don't need to bite to fight!")
  } else if (name === 'shifu' || name === 'master shifu') {
    setCharacter("Master Shifu", "shifu", "There is now a Level Zero.")
  } else if (name === 'ping' || name === 'mr. ping') {
    setCharacter("Mr. Ping", "mr-ping", "We are noodle folk, broth runs through our veins!")
  } else {
    setCharacter("?????", "question-mark", "Character Not Found")
  }
}

function setCharacter(name, imgName, quote) {
  // Update page to given character information
  document.getElementById('character-name').innerHTML = name;
  document.getElementById('main-img').src = `img/${imgName}.png`;
  document.getElementById('quote').innerHTML = quote
}