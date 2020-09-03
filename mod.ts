interface Emoji {
  codes: string,
  name: string,
  category: string,
  group: string,
  subgroup: string
}

const fetchData = async (): Promise<Emoji[]> => {
  const data = await Deno.readFile("./emoji.json");

  const decoder = new TextDecoder();
  const decodedData = decoder.decode(data);

  return JSON.parse(decodedData);
};

export const getMoji = async (): Promise<Emoji[]> => {
    const emojiData = await fetchData();
    return emojiData;
};
