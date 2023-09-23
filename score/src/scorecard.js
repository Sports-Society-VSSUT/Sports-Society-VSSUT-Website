import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { io } from "socket.io-client";

const Scorecard = () => {
    
    const [teamA, setTeamA] = useState("");
    const [teamB, setTeamB] = useState("");
    const [event, setEvent] = useState("");
    const [scoreA, setScoreA] = useState("");
    const [scoreB, setScoreB] = useState("");
    const [socket, setSocket] = useState(null);
    
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        const socketInstance = io("https://illumina-live-score-backend.onrender.com/")
        
        setSocket(socketInstance)
        
        socketInstance.on('connection-done', ()=>{
            console.log("connected")
        })
        
        //socketInstance.on("live-score", (data)=>{console.log("backend received", data)})
        
        setEvent(location.state.event)
    },[])

    const handleSubmit = async(e)=>{
            
        e.preventDefault()
        
        const data = {event, teamA, teamB, scoreA, scoreB}
        
        socket.emit("update score", data)
    }

    const handleEnd = async(e)=>{
        e.preventDefault()
        socket.emit('end game');
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