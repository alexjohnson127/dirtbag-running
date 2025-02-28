import '../index.css'
import { useState } from 'react'

/*
*Order of questions to be asked one at a time
*What is your experience: brand new, have completed runs up to 5k
    *would ask if they need run/walk at this point
    *have completed runs up to 10k 
    *trained to lower times at the 5k to 10k distance
    *have completed runs up to 13.1 miles
    *have completed a marathon
*What distance would you like your plan to be tailored for: 5k, 10k, Half Marathon, Full-Marathon, 50k, 50 miler -100k, 100 miler
*What is your goal: complete the distance, lower my PR, maintain my current fitness
*What weekly mileage would you like to target?
    *Text box with option to skip ("I don't know you tell me")
*How many miles do you run in a typical week? (average in the last year)
    *don't ask if runner is new and also offer an I don't know button
*What is your best estimate of current ability at the given distances
    *Put boxes for 5k, 10k, Half, and Full and then calculate avg VDOT for runner
*Do you have a specific race that you are training for? If so, what is the date of the race? If not,
*how many weeks long do you want the plan to be? 
*
*How many days per week would you like to run? (if less than 7 ask which days they want off)
*   Offer option to skip
*
*/

export default function TrainingFormV2({userInfo, onChange, handleSubmit}){
    const [countButton, setCountButton] = useState(1)
    function handleCountClick(event){
        setCountButton(prev => prev + Number(event.target.value))
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} >
                {countButton === 1 && <div className="form-group">
                    <label htmlFor="experience" className="form-label">
                      What is your experience level:
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={userInfo.experience}
                      onChange={onChange}
                      className="form-select"
                    >
                      <option value="beginner">I am new to running</option>
                      <option value="5k">I have completed a 5k</option>
                      <option value="10k">I have completed a 10k</option>
                      <option value="experienced5k">I have trained for and completed multiple 5ks/10ks</option>
                      <option value="halfMarathon">I have completed a half marathon before</option>
                      <option value="competitive">I am competitive and train for PR's at sub-marathon distances</option>
                      <option value="marathonComplete">I have completed a marathon before</option>
                      <option value="marathonCompetitive">I train to run PR's and compete in marathons</option>
                    </select>
                </div>}
                {countButton === 2 && <div className="form-group">
                    <label htmlFor="distance" className="form-label">
                      What distance race do you want your plan to be tailored for:
                    </label>
                    <select
                      id="distance"
                      name="distance"
                      value={userInfo.distance}
                      onChange={onChange}
                      className="form-select"
                    >
                      <option value="fitness">General Fitness</option>
                      <option value="5k">5k</option>
                      <option value="10k">10k</option>
                      <option value="Half">Half Marathon</option>
                      <option value="Marathon">Marathon</option>
                      <option value="50k">50k</option>
                      <option value="fifty">50 Miler - 100k</option>
                      <option value="hundred">100 Miler</option>
                    </select>
                </div>}
                {countButton === 3 && <div className="form-group">
                    <label htmlFor="goal" className="form-label">
                      What is your primary goal after completing this training plan?
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      value={userInfo.goal}
                      onChange={onChange}
                      className="form-select"
                    >
                      <option value="finish">Finish a race of the selected distance</option>
                      <option value="improve">Improve my fastest time at the selected distance</option>
                      <option value="fitness">I just want to improve my overall fitness</option>
                    </select>
                </div>}
                {countButton === 4 && <div className="form-group">
                    <label htmlFor="mileageCap" className="form-label">
                      How many miles per week would you like to target?
                    </label>
                    <input
                      id="mileageCap"
                      name="mileageCap"
                      value={userInfo.mileageCap}
                      onChange={onChange}
                      className="form-input"
                      type="number"
                      min="0"
                      max="120"
                    />
                    {userInfo.mileageCap > 70 && <div className='form-group checkbox-group'>
                        <label htmlFor='doubles' className='form-label'>
                            Your mileage is high enough that doubles would be suggested. Check if interested in two-a-days: 
                        </label>
                        <input 
                            type='checkbox'
                            id='doubles'
                            name='doubles'
                            checked={userInfo.doubles}
                            onChange={onChange}
                            className='form-checkbox'
                        />
                    </div>}
                    {userInfo.mileageCap <= 70 && <div className='form-group checkbox-group'>
                        <label htmlFor='decideMileageForMe' className='form-label'>
                            I don't know, just decide for me. 
                        </label>
                        <input 
                            type='checkbox'
                            id='decideMileageForMe'
                            name='decideMileageForMe'
                            checked={userInfo.decideMileageForMe}
                            onChange={onChange}
                            className='form-checkbox'
                        />
                    </div>}
                </div>}
                {(countButton === 5 && userInfo.experience !== 'beginner') && <div className="form-group">
                    <label htmlFor="currentMileage" className="form-label">
                      In the last year, how many miles did you run in a typical week of training? 
                    </label>
                    <input
                      id="currentMileage"
                      name="currentMileage"
                      value={userInfo.currentMileage}
                      onChange={onChange}
                      className="form-input"
                      type="number"
                      min="0"
                      max="120"
                    />
                </div>}
                {(countButton === 5 && userInfo.experience === 'beginner') && <div className='form-group'>
                    <div className='form-group checkbox-group'>
                    <label htmlFor="runWalk" className='form-label'>
                        I would like to incorporate walk breaks into my plan: 
                    </label>
                    <input 
                        type='checkbox'
                        checked={userInfo.runWalk}
                        id='runWalk'
                        name='runWalk'
                        onChange={onChange}
                        className='form-checkbox'
                    />
                    </div>
                </div>}
                {(countButton === 6 && userInfo.experience !== 'beginner') && <div className='form-group'>
                    <label htmlFor='currentAbility' className='form-label'>
                        What is your best estimate of current ability for the following distances:
                    </label>
                    {/** Here is where I will add inputs for many race distances, user can fill
                     * out as many as they are able to and leave the others blank
                     */}
                </div>}

            </form>
            <div className='navigation-buttons'>
                {countButton > 1 && <button onClick={handleCountClick} className='back-button' value={-1}>Previous</button>}
                <div className='question-number'>Question Number: {countButton}</div>
                <button onClick={handleCountClick} className='forward-button' value={1}>Next</button>
            </div>
        </div>
    )
}