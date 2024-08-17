const convertTime = time => {
    const timeParts = time.split(':')
    let hours = parseInt([timeParts[0]])
    const minutes = parseInt([timeParts[1]])

    let meredium = 'am'

    if(hours >= 12){
        meredium = 'pm'

        if(hours>12){
            hours-=12
        }
    }

    return hours.toString().padStart(2) + ':' + minutes.toString().padStart(2,'0')+" "+meredium;
}

export default convertTime;

// The padStart() method is used to pad a string with another string until the resulting string reaches a desired length.