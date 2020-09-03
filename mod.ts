const getEmojiData = async (): Promise<any> => {
    const emojiData = await (await fetch(`https://raw.githubusercontent.com/anujsinghwd/getmoji/master/emojiData.json`)).json();
    return emojiData;
};

export const getEmojiCode = async (name: string): Promise<string> => {
  const data = await getEmojiData();
  console.log(data);
  return "Hi";
}