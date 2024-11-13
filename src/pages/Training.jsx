import TrainingForm from '../components/TrainingForm'
import { useState } from 'react'



export default function Training(){
    const [userInfo, setUserInfo] = useState(
        {
            submitted: false,
            distance: 'fitness',
            experience: 'beginner'
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
    }

    return (
    <>
        <h1>Training</h1>
        <p>Take your training to the next level, fill out the dynamic form to discover the ideal training plan to reach your goals!</p>
        <TrainingForm userInfo={userInfo} onChange={onChange} handleSubmit={handleSubmit}/>
    </>
    )
}