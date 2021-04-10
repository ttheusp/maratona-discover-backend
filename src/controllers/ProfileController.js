const Profile = require('../model/Profile')

module.exports = {
    async index(req, res) {
        return res.render('profile', { profile: await Profile.get() })
    },

    async update(req, res) {
        const data = req.body
        const weeksPerYear = 52
        
        const weeksOfWorkPerYear = Number(weeksPerYear - data['vacation-per-year'])
        const hoursOfWorkPerYear = Number((data['hours-per-day'] * data['days-per-week']) * weeksOfWorkPerYear)
        const budgetPerHour = Number((data['monthly-budget'] * 12 / hoursOfWorkPerYear))

        data['value-hour'] = budgetPerHour
        
        await Profile.update({
            ...await Profile.get(),
            ...data
        })

        return res.redirect('/profile')
    }
} 