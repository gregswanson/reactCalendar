// Include React 
var React = require('react');
var ReactDOM = require('react-dom');


// Here we include all of the sub-components
//var Child = require('./Child');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var DatePicker = require('react-datepicker');
var moment = require('moment');
var ReactBootstrap = require("react-bootstrap");
//require('../../public/react-datepicker.css');
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;


var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;
var ControlLabel = ReactBootstrap.ControlLabel;



var Calendar = React.createClass({
  displayName: 'Example',



  getInitialState: function() {
    var excludeddates = [ moment().subtract(1, 'days')]
   
    return {
      show: false,
      startDate: moment('2016-07-05'),
      endDate: moment().add(28, 'days'),
      excludeDates: excludeddates
    };
  },

  componentWillMount: function(){
    var exDates = [];
    for (var i = 1; i < 365; i++){
      exDates.push(moment().subtract(parseInt([i]), 'days'))
    }
    for (var j = 29; j < 365; j++){
      exDates.push(moment().add(parseInt([j]), 'days'))
    }
    //console.log(exDates)
    this.setState({excludeDates: exDates});
  },



    update: function(){
        var Q1 = ReactDOM.findDOMNode(this.refs.Qone).value;
        var Q2 = ReactDOM.findDOMNode(this.refs.Qtwo).value;
        var Q3 = ReactDOM.findDOMNode(this.refs.Qthree).value;
        var questionData = {
            Q1: Q1,
            Q2: Q2,
            Q3: Q3
        };
        console.log(questionData);
        this.hideModal();
        
    },
  
    showModal() {
      this.setState({show: true});
    },

     hideModal() {
      this.setState({show: false});
    },
    

    handleChange: function(date) {
      var currentDate = moment().format('L');
      if(currentDate == moment(date).format('L')){
        this.showModal();
      } else {
        alert('You can not enter information for this date')
      }

    
  },


  render: function() {
    

    return <div className="calendarContainer"><ButtonToolbar>

        <Modal
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">How Are You Feeling?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Daily Assesment</h4>
            <p>Enter you information here:</p>
             <form>
              <FormGroup controlId="formControlsSelect">
                  <ControlLabel>How's your mood?</ControlLabel>
                  <FormControl componentClass="select" placeholder="select" ref="Qone">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </FormControl>
                  <ControlLabel>How's your energy level?</ControlLabel>
                  <FormControl componentClass="select" placeholder="select" ref="Qtwo">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </FormControl>
                  <ControlLabel>What is your current weight?</ControlLabel>
                  <FormControl type="text" placeholder="Enter weight" ref="Qthree"/>
              </FormGroup>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.update}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>

      <DatePicker
        inline
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        excludeDates={this.state.excludeDates}
        onChange={this.handleChange} /></div>;
  }
});
// Export the componen back for use in other files
module.exports = Calendar;