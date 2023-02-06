const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=valorant&limit=10&api_key=DkjIli0bgaN2DcQ3iaLQPw1ait06sisH&q=${category}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};

export default getGifs;
