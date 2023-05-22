class ImageServices {
  //const API_KEY = "29201085-7477c32838621bab778d592ef";

  getResource = async (url: string) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getImages = async (value: string, page: number) => {
    const res = await this.getResource(
      `https://pixabay.com/api/?key=29201085-7477c32838621bab778d592ef&q=${value}&per_page=18&page=${page}&image_type=photo&orientation=horizontal&safesearch=true`
    );

    return res;
  };
}

export default ImageServices;
