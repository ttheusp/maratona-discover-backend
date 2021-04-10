module.exports = {
    remainingDays(job) {
        const daysOfWork = Math.ceil(job['total-hours'] / job['daily-hours'])
        
        if (daysOfWork === 1) {return 0}

        const createdDate = new Date(job.createdAt) 
        const dueDay = createdDate.getDate() + daysOfWork 
        const dueDateInMs = createdDate.setDate(dueDay)
    
        const timeDiffInMs = dueDateInMs - Date.now()
        const msPerDay = 86400000
        const dayDiff = Math.ceil(timeDiffInMs / msPerDay)
    
        return dayDiff
    },

    calculateBudget: (job, valueHour) => valueHour * job['total-hours']
}