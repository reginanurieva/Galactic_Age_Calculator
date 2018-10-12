import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BirthDay } from './age.js';

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    let age = $("#year").val();

    let resultInstance = new BirthDay(age);
    let earthAge = resultInstance.realAge();
    let mercuryResult = resultInstance.yourAgeOnMercury();
    let marsResult = resultInstance.yourAgeOnMars();
    let venusResult = resultInstance.yourAgeOnVenus();
    let jupiterResult = resultInstance.yourAgeOnJupiter();
    let saturnResult = resultInstance.yourAgeOnSaturn();
    let uranusResult = resultInstance.yourAgeOnUranus();
    let neptuneResult = resultInstance.yourAgeOnNeptune();

    $("#1").text(`${earthAge}`);
    $("#2").text(`${mercuryResult}`);
    $("#3").text(`${marsResult}`);
    $("#4").text(`${venusResult}`);
    $("#5").text(`${jupiterResult}`);
    $("#6").text(`${saturnResult}`);
    $("#7").text(`${uranusResult}`);
    $("#8").text(`${neptuneResult}`);
  })
});
