import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const [event, setEvent] = useState("");

    
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate('/score', {state:{event: event}})
    }

    const handleChange =  (e)=>{
        const value = e.target.value
        console.log(value)
        setEvent(value)
    }

    return ( 
        <div>
            <form className="form" onSubmit={handleSubmit} action="">
                <label htmlFor="">Event</label>
                <select name="event" id="event" onChange={handleChange}>
                    <option value="none">Select Event</option>
                    <option value="kabaddi">Kabaddi</option>
                    <option value="khokho">Kho-Kho</option>
                    <option value="football">Football</option>
                    <option value="cricket">Cricket</option>
                </select>
                
                <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default Homepage;