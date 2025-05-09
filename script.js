
// Duck Oracle v1.0
// Created with stardust and satire by Haley Rankin & Midnight Sparkle

const duckResponses = [
  "Quack! The answer lies in the ripples.",
  "Float now, paddle later.",
  "You are the bread you've been waiting for.",
  "Beware of plastic ponds.",
  "Yes, but only if you waddle with purpose.",
  "No. But not because you’re wrong.",
  "Fly low, dreams are closer than they appear.",
  "The pond reflects what you project.",
  "A storm is coming. Time to preen.",
  "Quack. Just... quack."
];

function summonDuck() {
  const duckImg = document.getElementById("duck-img");
  const oracle = document.getElementById("oracle-response");

  // Duck shimmy for mystical vibes
  duckImg.style.transform = "rotate(-10deg)";
  setTimeout(() => duckImg.style.transform = "rotate(10deg)", 100);
  setTimeout(() => duckImg.style.transform = "rotate(0deg)", 200);

  // Duck wisdom
  const message = duckResponses[Math.floor(Math.random() * duckResponses.length)];
  oracle.textContent = `The Duck Oracle says: "${message}"`;

  // Sound surprise
  const sounds = ["quack.mp3", "meow.mp3", "yodel.mp3"];
  const chosen = sounds[Math.floor(Math.random() * sounds.length)];
  const audio = new Audio(chosen);
  audio.play();
}

// Credit easter egg
(function() {
  const duckCreator = "Haley Rankin";
  const coAuthor = "Midnight Sparkle";
  console.log(`Summoned by ${duckCreator} with help from ${coAuthor}. May the ducks be ever in your favor.`);
})();
