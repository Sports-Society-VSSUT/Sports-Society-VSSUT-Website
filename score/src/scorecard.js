import {useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Scorecard = () => {
    
    const [teamA, setTeamA] = useState("");
    const [teamB, setTeamB] = useState("");
    const [event, setEvent] = useState("");
    const [scoreA, setScoreA] = useState("");
    const [scoreB, setScoreB] = useState("");
    
    const navigate = useNavigate()
    
    const location = useLocation()

    
    const handleSubmit = async(e)=>{
        e.preventDefault()    
        
        const data = {event, teamA, teamB, scoreA, scoreB}
        
        setEvent(location.state.event)

        const response = await fetch('/api',{
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json();
        if(response.ok){
            console.log("score updated", json);
        }
    }

    const handleEnd = async(e)=>{
        e.preventDefault()
        setEvent(location.state.event)

        const data = {event}
        const response = await fetch('/api', {
            method: "DELETE",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        })
        const json = response.json()
        console.log("event deleted", json)

        navigate('/')
    }

    return ( 
        <div>
            <form className='form' action="" onSubmit={handleSubmit} >
                <label htmlFor="">House</label>
                <select name="teamA" id="house" onChange={(e)=>(setTeamA(e.target.value))}>
                    <option value="none">Select House</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
                <label htmlFor="">House</label>
                <select name="teamB" id="house" onChange={(e)=>(setTeamB(e.target.value))}>
                    <option value="none">Select House</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
                <label htmlFor="">House {teamA} Score</label>
                <input type="text"  onChange={(e)=>{setScoreA(e.target.value)}} />
                <label htmlFor="">House {teamB} score</label>
                <input type="text" onChange={(e)=>{setScoreB(e.target.value)}} />
                <button type="submit">Submit</button>
                <button type="submit" onClick={handleEnd} >End Game</button>
            </form>
        </div>
     );
}
 
export default Scorecard;