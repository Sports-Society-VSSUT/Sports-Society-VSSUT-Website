import {useEffect, useState} from 'react'

const Scorecard = () => {

    const [teamA, setTeamA] = useState("");
    const [teamB, setTeamB] = useState("");
    const [event, setEvent] = useState("");
    const [scoreA, setScoreA] = useState("");
    const [scoreB, setScoreB] = useState("");

    useEffect(()=>{
        const getData = async()=>{
            const response = await fetch('/api');
            const json = await response.json()
            console.log(json[0].event)
            setEvent(json[0].event)
        }

        getData()        
    },[])

    const data = {event, teamA, teamB, scoreA, scoreB}

    const handleSubmit = async(e)=>{
        e.preventDefault()    

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
            </form>
        </div>
     );
}
 
export default Scorecard;