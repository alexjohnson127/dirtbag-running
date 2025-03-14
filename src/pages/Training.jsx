import TrainingForm from '../components/TrainingForm'
import TrainingFormV2 from '../components/TrainingFormV2'
import TrainingPlan from '../components/TrainingPlan'
import { useState } from 'react'



export default function Training(){
    const [userInfo, setUserInfo] = useState(
        {
            submitted: false, //turns true when form is submitted
            distance: '10k', //goal distance, 5k, 10k, marathon etc 
            experience: '10k', 
            goal: 'improve',
            currentMileage: 30,
            increaseMileage: false,
            mileageCap: 30,
            decideMileageForMe: false,
            runWalk: false,
            numberDays:5,
            furthestRun:'5k',
            justFinish: 'improve-time',
            goalNumberDays:5,
            doubles: false,
            numWeeks: 16            
        }
    )

    const onChange = (event) => {
        const { name, value, type, checked } = event.target
        setUserInfo(prevUserInfo => ({
            ...prevUserInfo,
            [name]: type === 'checkbox' ? checked : value
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
    <div>
        
        {/*
            {!userInfo.submitted &&
            <div>
                <p>Take your training to the next level, fill out the dynamic form to discover the ideal training plan to reach your goals!</p>
                <p>Plans begin the following Monday, and go for the specified number of weeks.</p>
                <TrainingForm userInfo={userInfo} onChange={onChange} handleSubmit={handleSubmit}/>
            </div>
            }
        */}
        {!userInfo.submitted &&
            <div className='question-container-one'>
                <TrainingFormV2 userInfo={userInfo} onChange={onChange} handleSubmit={handleSubmit}/>
            </div>
        }
        {//<TrainingFormV2 userInfo={userInfo} onChange={onChange} handleSubmit={handleSubmit} />
        }
        {userInfo.submitted &&
        <TrainingPlan userInfo={userInfo} />
        }
        
    </div>
    )
}