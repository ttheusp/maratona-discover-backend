module.exports = {
    remainingDays(job) {
        const daysOfWork = job['total-hours'] / job['daily-hours']
    
        const createdDate = new Date(job.createdAt)
        const dueDay = createdDate.getDate() + daysOfWork
        const dueDateInMs = createdDate.setDate(dueDay)
    
        const timeDiffInMs = dueDateInMs - Date.now()
        const msPerDay = 86400000
        const dayDiff = Math.floor(timeDiffInMs / msPerDay)
    
        return dayDiff
    },

    calculateBudget: (job, valueHour) => valueHour * job['total-hours']
}