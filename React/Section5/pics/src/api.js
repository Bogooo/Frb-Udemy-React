import axios from "axios";

const searchImg= async (term)=>{
    const results = await axios.get('https://api.unsplash.com/search/photos',
        {
            headers:{
                Authorization: 'Client-ID _IlHP2fijEfjUQOHG2M1znNPw0FZIF_3QVBrGG_Rf3c',
            },
            params:{
                query: term
            }
          }
        );
    return results.data.results;
};

export  default searchImg;