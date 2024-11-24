

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
            <br></br>
            
            {/*at this point I want to add an optional menu for if someone selects an ultra*/}
            
            {/**Adding non beginner questions */}
            {userInfo.experience !== 'beginner' && 
            (<div>
                <label htmlFor="currentMileage">What is your current weekly mileage?:   
                    <input 
                        id="currentMileage" 
                        name="currentMileage" 
                        value={userInfo.currentMileage} 
                        onChange={onChange}
                        type="number"
                        min={0}
                        max={200}
                    >
                    </input>
                </label>
                <br></br>
                <label htmlFor="numberDays">How many days per week do you run?:   
                    <input 
                        id="numberDays" 
                        name="numberDays" 
                        value={userInfo.numberDays} 
                        onChange={onChange}
                        type="number"
                        min={0}
                        max={7}
                    >
                    </input>
                </label>
            </div>)}

            {/**questions regarding goal of plan */}
            {userInfo.distance !== 'fitness' &&
            (<div>
                <label htmlFor="justFinish">Is your goal to finish, or do you want to improve your time?</label>
                <br></br>
                <input 
                    type="radio"
                    id="just-finish"
                    name="justFinish"
                    value={'just-finish'}
                    checked={userInfo.justFinish === 'just-finish'}
                    onChange={onChange}
                />
                <label htmlFor="just-finish">Just Finish</label>
                <br></br>
                <input 
                    type="radio"
                    id="improve-time"
                    name="justFinish"
                    value={'improve-time'}
                    checked={userInfo.justFinish === 'improve-time'}
                    onChange={onChange}
                />
                <label htmlFor="improve-time">Improve Time</label>
                <br></br>
                
            </div>)}
            {userInfo.justFinish === 'just-finish' && 
            <div>
                <label htmlFor="furthestRun">What is the furthest you've run before:</label>
                <select id="furthestRun" name="furthestRun" value={userInfo.furthestRun} onChange={onChange}>
                <option value={'beginner'}>Beginner</option>
                <option value={'intermediate'}>Intermediate</option>
                <option value={'expert'}>Expert</option>
                <option value={'elite'}>Elite</option>
            </select>
            </div>
            }
            
            <label htmlFor="goalNumberDays">How many days per week would you like to run?</label>
            <input 
                type="number"
                id="goalNumberDays"
                name="goalNumberDays"
                value={userInfo.goalNumberDays}
                onChange={onChange}
                min={1}
                max={7}
            />
            <br></br>
            <label htmlFor="numWeeks">How many weeks long would you like your plan to be?</label>
            <input 
                type="number"
                id="numWeeks"
                name="numWeeks"
                value={userInfo.numWeeks}
                onChange={onChange}
                min={4}
                max={52}
            />
            <br></br>
            <input type="submit"></input>
        </form>
    </>
    )
}