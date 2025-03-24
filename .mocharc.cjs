
module.exports = {
    reporter: "mochawesome",
'reporter-option': [
        'reportDir=mochaawesomereport', // Report directory
        'reportFilename=LearnJs_[datetime]__report', //Report file name
        'html=true', // enable html report
        'json=false', // disable json report
        'overwrite=false', // disable report file overwrite
        'timestamp=longDate', // add timestamp to report file name
  
    ],
    timeout:5000
  };
  

  