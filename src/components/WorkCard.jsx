import { Link } from 'react-router-dom'
import './WorkCard.css'

export default function WorkCard({name, position, timeline, companyWebsite}) {
    return(
        <div className="work-card">
            <div className='company-name-div'>
                <p className='gravitas'>{name}</p>
            </div>
            <div>
                <p>{position}</p>
                <p>{timeline}</p>
            </div>
        </div>
    )
}
