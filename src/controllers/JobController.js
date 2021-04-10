const Job = require('../model/Job')
const JobUtils = require('../utils/JobUtils')
const Profile = require('../model/Profile')

module.exports = {
    create(req, res) {
        return res.render('job')
    },

    async save(req, res) {
        // { name: 'Comer', 'daily-hours': '8', 'total-hours': '40' }
        await Job.create({
            ...req.body,
            createdAt: Date.now(),
        })

        return res.redirect('/')
    },

    async show(req, res) {
        const { id } = req.params
        const profile = await Profile.get()

        const jobs = await Job.get()
        const job = jobs.find(job => Number(job.id) === Number(id))
        if (!job) return res.status(404).send('Job not found!')

        job.budget = JobUtils.calculateBudget(job, profile['value-hour'])
        
        return res.render('job-edit', { job })
    },

    async update(req, res) {
        const { id } = req.params

        const updatedJob = {
            name: req.body.name,
            'total-hours': Number(req.body['total-hours']),
            'daily-hours': Number(req.body['daily-hours']),
        }
        
        await Job.update(updatedJob, id)

        return res.redirect(`/job/${id}`)
    },

    async delete(req, res) {
        const { id } = req.params
      
        const jobs = await Job.get()
        const jobExists = jobs.some(job => Number(job.id) === Number(id))
        if (!jobExists) return res.status(404).send('Job not found!')

        await Job.delete(id)
        
        return res.redirect('/')
    }
}