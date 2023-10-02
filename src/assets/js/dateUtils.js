// Intl.supportedValuesOf('timeZone')
function getAllTimeZone() {
    return Intl.supportedValuesOf('timeZone')
}

function todayFullDate(timeZone = 'Asia/Tokyo') {
    const date = new Date(new Date().toLocaleString('en-US', { timeZone: timeZone }))
    let day = makeTwoDigit(date.getDate())
    let month = makeTwoDigit(date.getMonth() + 1)
    let year = date.getFullYear()

    return { year, month, day }
}

function currentTime(timeZone = 'Asia/Tokyo') {
    const date = new Date(new Date().toLocaleString('en-US', { timeZone: timeZone }))
    let hour = date.getHours()
    let minute = makeTwoDigit(date.getMinutes())
    let second = makeTwoDigit(date.getSeconds())

    return { hour, minute, second }
}

function makeTwoDigit(data) {
    return data < 10 ? '0' + data : data
}

export {
    todayFullDate,
    currentTime,
    getAllTimeZone
}