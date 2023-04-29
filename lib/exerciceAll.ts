const Allexercice = async()=>{
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://musclewiki.p.rapidapi.com/exercises',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'afc281dbdemsh0b409a71d0c331cp1688c6jsnb45ac18297a0',
        'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }
}
export default Allexercice;