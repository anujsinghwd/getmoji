import { getEmojiByName, emojify } from "./mod.ts";

const cli = async () => {
  let emojis =  await getEmojiByName("pizza");
  if(emojis){
    console.log(emojis);
  }
  else{
    console.log("Here are the emoji");
    console.log(emojis);
  }

  let emojiFy =  await emojify("i love $pizza");
  if(emojiFy){
    console.log(emojiFy);
  }
  else{
    console.log("Here is the emoji");
    console.log(emojiFy);
  }
}

cli();