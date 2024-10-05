import Avatar from '@mui/material/Avatar';
import './Card.css';
export default function Card({name,occupation}){
    return(
        <div className='card'>
            <div className='card_details'>
                <Avatar>{name[0]}</Avatar>
                <h3>{name}</h3>
                <p><strong>{occupation}</strong></p>
            </div>
            <div className='btn-btn'>
                <button>View profile</button>
                <button>Add friend</button>
            </div>
        </div>
        
    )
}