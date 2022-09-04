function error (message) {
  console.log(message)
  process.exit(1)}
function profilePictures () {
  const images = []
  const IMAGE_NAMES = [
    "5939-vaporwave-cat-drinking-in-space",
    "5220-swag-cat",
    "6128-sonic",
    "8863-cat-in-anime-robe",
    "4611-ferarai-bruh",
    "7775-sus-anime",
    "1300-jett",
    "9004-snoopy",
    "3694-stormtrooper",
    "7534-unedited-popcat",
    "8289-anime-pfp",
    "1127-carl-johnson",
    "4609-bob-dream",
    "5854-hoodie",
    "2806-the-golem-sus-face",
    "7170-clone-trooper-vietnam-war-star-wars-t-c-w-with-logo-of-the-wolf-bde",
    "6398-jerry-lol",
    "2257-osmosis-jones",
    "6631-minecraftcat",
    "1135-mordecai",
    "3731-",
    "2251-mc-pfp-w-backgrund",
    "8302-beluga",
    "3880-pikawow",
    "1603-mona-lisa-dabbing",
    "9703-gray-staring",
    "1640-giga-chad-music"
  ]
   IMAGE_NAMES.forEach(image => {
    images.push("https://pfps.gg/assets/pfps/"+image+".png")
   })
  const data = [{link: images[Math.floor(Math.random() * images.length)]}]
  return data
}
module.exports = profilePictures