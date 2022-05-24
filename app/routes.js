// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

// **********
// SCENARIO 1
// **********

// Start Page

router.post('/Scenario-1/start', function (req, res) {

    res.redirect('/Scenario-1/name')
  
})

// What is your name?

router.post('/Scenario-1/name', function (req, res) {

    var firstname = req.session.data['firstname']
    var lastname = req.session.data['lastname']
  
    if (firstname && lastname) {
      res.redirect('/Scenario-1/address')
    }
    else {
      res.redirect('/Scenario-1/name')
    }
  
})

// What is your address?

router.post('/Scenario-1/find-address', function (req, res) {
  
    var address = req.session.data['address']
  
    if (address) {
      res.redirect('/Scenario-1/address')
    } else {
      res.redirect('/Scenario-1/address')
    }
  
})

// What is your date of birth?

router.post('/Scenario-1/date-of-birth', function (req, res) {

    var dateofbirthday = req.session.data['dateofbirthday']
    var dateofbirthmonth = req.session.data['dateofbirthmonth']
    var dateofbirthyear = req.session.data['dateofbirthyear']
  
    if (dateofbirthday && dateofbirthmonth && dateofbirthyear) {
      res.redirect('/Scenario-1/check-your-answers')
    }
    else {
      res.redirect('/Scenario-1/date-of-birth')
    }
  
})

// Check Your Answers

router.post('/Scenario-1/check-your-answers', function (req, res) {

    res.redirect('/Scenario-1/confirmation-successful')
  
})

// **********
// SCENARIO 2
// **********

// TBC