import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getEmojiByName } from "./mod.ts";

const ValidateEmoji = (emoji: any) => {
  if (emoji) {
    return (true)
  }
  return (false)
}

Deno.test("test getMoji function", async (): Promise<void> => {
  var data= await getEmojiByName("pizza");
  if(data)
   assertEquals(ValidateEmoji(data), true);
});