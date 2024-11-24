import TrainingForm from '../components/TrainingForm'
import TrainingPlan from '../components/TrainingPlan'
import { useState } from 'react'



export default function Training(){
    const [userInfo, setUserInfo] = useState(
        {
            submitted: false, //turns true when form is submitted
            distance: 'fitness', //goal distance, 5k, 10k, marathon etc 
            experience: 'beginner', 
            currentMileage: 30,
            goalMileage: 'increase',
            mileageCap: 40,
            numberDays:5,
            furthestRun:8,
            justFinish: 'improve-time',
            goalNumberDays:5,
            doubles: false,
            numWeeks: 16            
        }
    )

    const onChange = (event) => {
        const { name, value } = event.target
        setUserInfo(prevUserInfo => ({
            ...prevUserInfo,
            [name]: value
        }))
        console.log(userInfo)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setUserInfo(prevUserInfo => ({
            ...prevUserInfo,
            submitted: true
        }))
        console.log({...userInfo, submitted: true})
    }

    return (
    <>
        <h1>Training</h1>
        
        {!userInfo.submitted &&
        <div>
            <p>Take your training to the next level, fill out the dynamic form to discover the ideal training plan to reach your goals!</p>
            <TrainingForm userInfo={userInfo} onChange={onChange} handleSubmit={handleSubmit}/>
        </div>
        }
        {userInfo.submitted &&
        <TrainingPlan userInfo={userInfo} />
        }
        
    </>
    )
}