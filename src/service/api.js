import axios from 'axios';

async function getImages(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const apiKey = '40169481-f0402a27955d707cb1705c374';
  const orientation = 'horizontal';
  const perPage = 12;
  const imageType = 'photo';

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: apiKey,
        orientation: orientation,
        per_page: perPage,
        image_type: imageType,
        q: query,
        page: page,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

export default getImages;
