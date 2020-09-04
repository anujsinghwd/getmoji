import { emojiData } from "./emojiData.ts"

export const getEmojiByName = async (name: string): Promise<any> => {
  const filteredData = emojiData.filter(data => data.name === name);
  return filteredData.length ? filteredData : "emoji not found";
}