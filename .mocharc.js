const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
module.exports = {

    reporter: 'mochawesome',
    'reporter-option': [
        'reportDir=reports',
        'reportFilename=TestReport_[datetime]',
        'html=true',
        'json=true',
        'overwrite=false',
        'timestamp=longDate',

    ],

    timeout: 10000,
    color: true
}