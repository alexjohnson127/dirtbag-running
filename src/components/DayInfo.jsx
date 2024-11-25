export default function DayInfo({selectedDay, workout}){
    const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const monthsOfYear = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    
    return (
    <div className="dayWrapper">
        <h2>{`${daysOfWeek[selectedDay.getDay()]}`}</h2>
        <h3>{`${monthsOfYear[selectedDay.getMonth()]} ${selectedDay.getDate()}`}</h3>
        <p>{workout}</p>
    </div>
    )
}