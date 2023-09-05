import {useState, useEffect} from 'react';
import api from '../../../utils/api';

function Profile(){
    const [ user, setUser ] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {
        api.get('/users/checkuser', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
        .then((response) => {
            setUser(response.data.user)
        })
    }, [token])

    return(
        <div>
            <h1>{user.nome}</h1>
        </div>
    )
}

export default Profile;