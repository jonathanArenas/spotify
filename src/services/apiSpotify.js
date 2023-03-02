import axios from "axios";
const  apiAccount = 'https://accounts.spotify.com/authorize?'
const webApi = ''

const apiSpotify = {
    login: async () =>{
        return await axios.get('http://localhost:3000/login')
    },
} 
export default apiSpotify