import { getEmojiByName } from "./mod.ts";

const cli = async () => {
  var emojis =  await getEmojiByName("pizza");
  if(emojis)
    console.log(emojis)
  else{
    console.log("Here are all the emojis");
    console.log(emojis)
  }
}

cli();