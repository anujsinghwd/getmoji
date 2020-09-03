import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getMoji } from "./mod.ts";

const ValidateEmoji = (emoji: any) => {
  if (emoji) {
    return (true)
  }
  return (false)
}

Deno.test("test getMoji function", async (): Promise<void> => {
  var data= await getMoji();
  if(data.length > 0)
   assertEquals(ValidateEmoji(data), true);
});