import '../index.css'
import DayInfo from './DayInfo'
export default function TrainingPlan({userInfo}){
    const curDate = new Date()
    
    
    const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const monthsOfYear = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let weekDistribution 
    let beginnerRunWalkRatios = ['30 seconds', '1 minute', '2 minute', '3 minute', '4 minute']
    const curYr = curDate.getFullYear()
    const curMo = monthsOfYear[curDate.getMonth()]
    const curDayInMo = curDate.getDate()
    const dayOfWeek = daysOfWeek[curDate.getDay()]
    let workouts = []

    switch(Number(userInfo.numberDays)){
        case 2:
            weekDistribution = [0,0,.4,0,0,.6,0]
            break
        case 3:
            weekDistribution = [.3, 0, 0, .3, 0, .4, 0]
            break
        case 4:
            weekDistribution = [.2, 0, .2, .2, 0, .4, 0]
            break
        case 5:
            weekDistribution = [.15, 0, .15, .2, 0, .3, .2]   
            break
        case 6:
            weekDistribution = [0,.15,.15,.2,.1,.25,.15]
            break
        case 7:
            weekDistribution = [.12,.15,.1,.18,.1,.25,.15]
            break     
    }
    
    let plan = []
    
    let daysTillStart = 0
    if (curDate.getDay() === 0){
        daysTillStart = 1
    }
    else if (curDate.getDay() === 1){
        daysTillStart = 0
    }
    else{
        daysTillStart = 8 - curDate.getDay()
    }

    const startDate = new Date(curDate)
    startDate.setDate(startDate.getDate() + daysTillStart)

    for(let i=0; i < userInfo.numWeeks; i++){
        let weekMileage = userInfo.currentMileage
        let weekAdjustedTotal = 0
        if(userInfo.increaseMileage){
            let adjustedMileage = weekMileage * Math.pow(1.1,i)
            weekMileage = adjustedMileage > userInfo.mileageCap ? userInfo.mileageCap : adjustedMileage
        }
        //let weekMileage = userInfo.currentMileage + (userInfo.mileageCap-userInfo.currentMileage) * ((i + 1)/userInfo.numWeeks)
        for(let j=0; j < 7; j++){
            let tempDate = new Date(startDate)
            let dayMileageNum = Math.floor(weekMileage*weekDistribution[j])
            let dayMileage = `${dayMileageNum} miles easy`
            weekAdjustedTotal += dayMileageNum

            if (userInfo.furthestRun === '5k'){
                dayMileage = i < 10 ? `${beginnerRunWalkRatios[Math.floor(i/2)]} run ${1} minute walk for ${20 + i*2} minutes`: `${Math.floor(userInfo.numberDays*3*weekDistribution[j])} mile continuous jog`
            }
            if (weekDistribution[j] === 0){
                dayMileage = 'Rest Day'
            }
            
            tempDate.setDate(tempDate.getDate() + i*7 + j)
            

            plan.push(
            <DayInfo 
                key={String(tempDate.getDate())+tempDate.getMonth()+tempDate.getFullYear()} 
                selectedDay={tempDate} 
                workout={dayMileage} 
                weekTotal={userInfo.furthestRun === '5k' ? null : weekAdjustedTotal}
            />
            )
        }
    }
    
    return (<>
        <div>{`It is ${dayOfWeek}, the ${curDayInMo} of ${curMo}`}</div>
        <div>{`Your plan starts on ${daysOfWeek[startDate.getDay()]}, the ${startDate.getDate()} of ${monthsOfYear[startDate.getMonth()]}`}</div>
        <div className='calendar'>
            {plan}
        </div>

    </>)
}