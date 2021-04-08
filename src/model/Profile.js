let data = {
    name: 'Matheus',
    avatar: 'https://github.com/ttheusp.png',
    'monthly-budget': 3000,
    'days-per-week': 5,
    'hours-per-day': 5,
    'vacation-per-year': 4,
    'value-hour': 75
}

module.exports = {
    get() {
        return data
    },

    update(newData) {
        Object.assign(data, newData)
    }
}