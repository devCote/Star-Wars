import axios from "axios";


export const fetchGoogle = async (value) => {

  const options = {
    method: 'GET',
    url: 'https://google-image-search1.p.rapidapi.com/v2/',
    params: { q: value, hl: 'en' },
    headers: {
      'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com',
      'X-RapidAPI-Key': '2f147486a7msh752c8114517121ep1d0607jsna09c282d336a'
    }
  };

  try {
    return await axios.request(options)
  } catch (err) {
    console.error(err.message)
  }
}

