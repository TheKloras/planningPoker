import { Link } from 'react-router-dom';

const AdminLogin =()=>{
    return(
        <div className='row'>
            <button className='btn-primary btn'>
            <Link to='/login' className="nav-link active">Login</Link>
            </button>
        </div>
    )
}

export default AdminLogin;