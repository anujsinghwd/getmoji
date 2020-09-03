interface Emoji {
  codes: string,
  name: string,
  category: string,
  group: string,
  subgroup: string
}


export const getMoji = async (): Promise<any> => {
    const emojiData = await (await fetch(`https://raw.githubusercontent.com/anujsinghwd/getmoji/master/emoji.json`)).json();
    return emojiData;
};
