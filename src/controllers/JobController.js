const Job = require('../model/Job')
const JobUtils = require('../utils/JobUtils')
const Profile = require('../model/Profile')

module.exports = {
    create(req, res) {
        return res.render('job')
    },

    save(req, res) {
        // { name: 'Comer', 'daily-hours': '8', 'total-hours': '40' }
        let lastId = Job.get()[Job.get().length - 1]?.id ?? 0

        Job.create({
            id: lastId + 1,
            ...req.body,
            createdAt: Date.now(),
        })

        return res.redirect('/')
    },

    show(req, res) {
        const { id } = req.params
        
        const job = Job.get().find(job => Number(job.id) === Number(id))
        
        if (!job) return res.status(404).send('Job not found!')

        job.budget = JobUtils.calculateBudget(job, Profile.get()['value-hour'])
        
        return res.render('job-edit', { job })
    },

    update(req, res) {
        const { id } = req.params
        
        const job = Job.get().find(job => Number(job.id) === Number(id))

        if (!job) return res.status(404).send('Job not found!')

        const data = req.body

        const updatedJobs = {
            ...job,
            name: data.name,
            'total-hours': Number(data['total-hours']),
            'daily-hours': Number(data['daily-hours']),
        }
        
        const newJobs = Job.get().map(job => {
            if(Number(job.id) === Number(id)){
                job = updatedJobs
            }
            return job
        })

        Job.update(newJobs)

        return res.redirect(`/job/${id}`)
    },

    delete(req, res) {
        const { id } = req.params
        const jobExists = Job.get().some(job => Number(job.id) === Number(id))
        
        if (!jobExists) return res.status(404).send('Job not found!')

        Job.delete(id)
        
        return res.redirect('/')
    }
}