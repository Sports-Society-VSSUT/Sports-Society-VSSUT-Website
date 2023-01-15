import {useState} from 'react'

const Homepage = () => {

    const [event, setEvent] = useState("");
    

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const test = {event}
        
        const response = await fetch('/api', {
            method: "POST",
            body: JSON.stringify(test),
            headers:{
                "Content-Type":"application/json",
            },
        })
        const json = await response.json();
        if(response.ok){
            console.log("new event added", json)
        }
        window.open("http://localhost:3000/score")
    }

    return ( 
        <div>
            <form className="form" onSubmit={handleSubmit} action="">
                <label htmlFor="">Event</label>
                <select name="event" id="event" onChange={(e)=>(setEvent(e.target.value))} >
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