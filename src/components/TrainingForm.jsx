

export default function TrainingForm({ userInfo, onChange, handleSubmit }){
    return(
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="distance">What are you training for: </label>
            <select id="distance" name="distance" value={userInfo.distance} onChange={onChange}>
                <option value={'fitness'}>Overall Fitness</option>
                <option value={'5k'}>5k</option>
                <option value={'10k'}>10k</option>
                <option value={'Half Marathon'}>Half Marathon</option>
                <option value={'Marathon'}>Marathon</option>
            </select>
            <br></br>
            <label htmlFor="experience">What is your experience level:</label>
            <select id="experience" name="experience" value={userInfo.experience} onChange={onChange}>
                <option value={'beginner'}>Beginner</option>
                <option value={'intermediate'}>Intermediate</option>
                <option value={'expert'}>Expert</option>
                <option value={'elite'}>Elite</option>
            </select>
            {/*at this point I want to add an optional menu for if someone selects an ultra*/}
            <br></br>    
            <input type="submit"></input>
        </form>
    </>
    )
}