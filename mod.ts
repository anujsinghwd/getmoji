import { emojiData, Emoji } from "./emojiData.ts";

const filterEmoji = (emojiName: string) => {
  return emojiData.filter(data => data.name === emojiName);
}

export const getEmojiByName = async (name: string) => {
  const filteredData = await filterEmoji(name);
  return filteredData.length ? filteredData[0].char : "emoji not found";
}

export const emojify = (inputString: string) => {
  const splittedStr = inputString.split(" ");
  let newArr: any[] = splittedStr.map((str: string) => {
    if(str.includes("$"))
      return filterEmoji(str.substr(1)).length ? filterEmoji(str.substr(1))[0].char : str;
    return str;
  });
  return newArr.join(" ");
};
