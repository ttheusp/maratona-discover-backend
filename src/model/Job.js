let data = [
    {
        id: 1,
        name: 'Pizzaria Guloso',
        "daily-hours": 5,
        "total-hours": 30,
        createdAt: new Date('04/01/2021').valueOf()
    },
    {
        id: 2,
        name: 'OneTwo Project',
        "daily-hours": 5,
        "total-hours": 20,
        createdAt: Date.now()
    },
]

module.exports = {
    get() {
        return data
    },
    
    create(newJob) {
        data.push(newJob)
    },
    
    update(newJobs) {
        data = newJobs
    },

    delete(id) {
        data = data.filter(job => Number(job.id) !== Number(id))
    }
}