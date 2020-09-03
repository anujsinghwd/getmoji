import { getMoji } from "./mod.ts";

const cli = async () => {
  var allEmojis =  await getMoji();
  if(allEmojis.length > 0)
    console.log(allEmojis)
  else{
    console.log("Here are all the emojis");
    console.log(allEmojis)
  }
}

cli();