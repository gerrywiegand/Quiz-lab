function timer(start, interval,timeUP) {               // funtion for timer
    let remainingTime= start
    console.log('You have' + remainingTime + "seconds left")        //display starting time

    let timerID= setInterval(()=> {
        remainingTime = remainingTime - 10                          //diaplay every 10 sec

        if(remainingTime<=0) {                                      // display time up and end
            console.log("Times up!")
            clearInterval(timerID)
            if(typeof timeUP === 'function') timeUP()
            return
        }
        console.log("You have" + remainingTime + "seconds left")
        }, interval)
        return timerID
        }





module.exports = { timer,}