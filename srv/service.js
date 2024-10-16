const cds = require('@sap/cds');
module.exports = cds.service.impl(async function () {
    this.on('jobScheduler', jobScheduler)
});

async function jobScheduler(req, res) {
    try {
        console.log("Job scheduling service");
        return "Job scheduling service"
    } catch (error) {
        console.log(error);
    }
};