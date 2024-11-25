import '../index.css'

export default function TrainingForm({ userInfo, onChange, handleSubmit }){
    return(
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="distance" className="form-label">
              What are you training for:
            </label>
            <select
              id="distance"
              name="distance"
              value={userInfo.distance}
              onChange={onChange}
              className="form-select"
            >
              <option value="fitness">Overall Fitness</option>
              <option value="5k">5k</option>
              <option value="10k">10k</option>
              <option value="Half Marathon">Half Marathon</option>
              <option value="Marathon">Marathon</option>
            </select>
          </div>    
          <div className="form-group">
            <label htmlFor="furthestRun" className="form-label">
              What is the furthest you've run before:
            </label>
            <select
              id="furthestRun"
              name="furthestRun"
              value={userInfo.furthestRun}
              onChange={onChange}
              className="form-select"
            >
              <option value="5k">Less than 5k (3.1 Miles)</option>
              <option value="10k">Between 5k and 10k (3.1 to 6.2 Miles)</option>
              <option value="13.1">Between 10k and Half Marathon (6.2 to 13.1)</option>
              <option value="18">Between Half Marathon and 18 miles</option>
              <option value="22">Between 18 and 22 miles</option>
              <option value="26.2">Between 22 and 26.2</option>
              <option value="ultra">I have run farther than 26.2</option>
            </select>
          </div>    
          <div className="form-group">
            <label htmlFor="currentMileage" className="form-label">
              How many miles per week do you currently run?
            </label>
            <input
              id="currentMileage"
              name="currentMileage"
              value={userInfo.currentMileage}
              onChange={onChange}
              type="number"
              min="0"
              max="100"
              className="form-input"
            />
          </div>    
          <div className="form-group checkbox-group">
            <label htmlFor="increaseMileage" className="form-label">
              Check if interested in increasing mileage:
            </label>
            <input
              type="checkbox"
              id="increaseMileage"
              name="increaseMileage"
              checked={userInfo.increaseMileage}
              onChange={onChange}
              className="form-checkbox"
            />
          </div>    
          {userInfo.increaseMileage && (
            <div className="form-group">
              <label htmlFor="mileageCap" className="form-label">
                What is your goal mileage?
              </label>
              <input
                id="mileageCap"
                name="mileageCap"
                value={userInfo.mileageCap}
                onChange={onChange}
                type="number"
                min="0"
                max="100"
                className="form-input"
              />
            </div>
          )}    
          <div className="form-group">
            <label htmlFor="numWeeks" className="form-label">
              How many weeks long would you like your plan to be?
            </label>
            <input
              type="number"
              id="numWeeks"
              name="numWeeks"
              value={userInfo.numWeeks}
              onChange={onChange}
              min="4"
              max="52"
              className="form-input"
            />
          </div>
      
          <button type="submit" className="form-button">
            Make My Plan!
          </button>
        </form>
    )
}