const redis = require("redis")
const moment = require("moment")
const redisClient = redis.createClient()
module.exports = (req, res, next) => {
  redisClient.exists(req.connection.remoteAddress, (err, reply) => {
    if (err) {
      console.log("problem with redis")
      system.exit(0)
    }
  
    if (reply === 1) {
      redisClient.get(req.connection.remoteAddress, (err, redisResponse) => {
        let data = JSON.parse(redisResponse)
        let currentTime = moment().unix()
        let lessThanMinuteAgo = moment()
          .subtract(1, "minute")
          .unix()
        let RequestCountPerMinutes = data.filter(item => {
          return item.requestTime > lessThanMinuteAgo
        })
        let thresHold = 0
        
        RequestCountPerMinutes.forEach(item => {
          thresHold = thresHold + item.counter
        })
        if (thresHold >= 105) {
          return res.status(400).json({  msg: "throttle limit exceeded" })
        } else {
          let isFound = false
          data.forEach(element => {
            
            if (currentTime.requestTime === currentTime) {
              console.log('sss')
              isFound = true
              element.counter++
            }
          })
          if (!isFound) {
            data.push({
              requestTime: currentTime,
              counter: 1,
            })
          }
          redisClient.set(req.connection.remoteAddress, JSON.stringify(data))
          next()
        }
      })
    } else {
      let data = []
      let requestData = {
        requestTime: moment().unix(),
        counter: 1,
      }
      data.push(requestData)
      redisClient.set(req.connection.remoteAddress, JSON.stringify(data))
      next()
    }
  })
}