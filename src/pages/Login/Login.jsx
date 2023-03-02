import imagen from '../../assets/i.jpg'
import './Login.css'
import { useLocation,  useNavigate  } from 'react-router-dom'
import { spotifyAuthCall } from '../../utils/index.js'
import { useEffect, useContext, useState} from 'react';
import { AuthContext } from '../../context/Auth.jsx';

const spotifyURL = `https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_CLIENT_ID}&response_type=code&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&scope=user-read-private user-read-email`
function Login() {
    const location = useLocation();
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [access_token, setAccessToken] = useState(null);
    const authenticateUser = async(code) =>{
      const result = await spotifyAuthCall({ code, grant_type: "authorization_code" })
      setAccessToken(result.access_token)
    }
    
    useEffect(()=>{
      const urlParams = new URLSearchParams(location.search);
      const spotifyCode = urlParams.get('code');
      console.log(spotifyCode)
      console.log(access_token)
      if(spotifyCode){
        authenticateUser(spotifyCode)
        loginUser(access_token)
        setAccessToken(null)
        navigate('/home')
      }
    },[location.search])

    const handleOpenLogin= ()=> {
      window.location.replace(spotifyURL)
    }

  return (
    <div className='container-login'>
        <div className='login'>
          <h1>Bienvenido</h1>
          <button onClick={handleOpenLogin}>Iniciar Sesión</button>
        </div>
        <div className='imagen'>
          <img src={imagen} alt="" />
        </div>
    </div>
 )
}

export default Login