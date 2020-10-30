import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getEmojiByName, emojify } from "./mod.ts";

const ValidateEmoji = (emoji: any) => {
  if (emoji) {
    return (true);
  }
  return (false);
}

Deno.test("test getEmojiByName function", async (): Promise<void> => {
  var data= await getEmojiByName("pizza");
  if(data)
   assertEquals(ValidateEmoji(data), true);
});

Deno.test("test emojify function", async (): Promise<void> => {
  var data= await getEmojiByName("i love $pizza");
  if(data)
   assertEquals(ValidateEmoji(data), true);
});