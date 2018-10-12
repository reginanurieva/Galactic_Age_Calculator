const secondsInYear = 31536000;

const marsYear = 687;
const venusYear = 225;
const jupiterYear = 4333;
const saturnYear = 10759;
const uranusYear = 30689;
const neptuneYear = 60182;
const mercuryYear = 88;
const earthYear = 365;


const lifeExpectancy = 80;


export class BirthDay {
  constructor(birthday) {
    this.birthday = birthday;
  }


  //age in seconds
  calculateAge(){
    let birthday = new Date(this.birthday);
    let result = Math.floor((Date.now() - birthday.getTime()) / 1000);
    console.log(result);
    return result;
  }

  //Earth Age
  realAge(){
    let earthAge = Math.floor(this.calculateAge() / secondsInYear);
    console.log(earthAge);
    return earthAge;
  }


  //age on Mars
  yourAgeOnMars() {
    let marsAge = Math.floor(this.calculateAge() / secondsInYear/(marsYear/earthYear));
    console.log(marsAge);
    return marsAge;
  }

  yourAgeOnVenus() {
    let venusAge = Math.floor(this.calculateAge() / secondsInYear/(venusYear/earthYear));
    console.log(venusAge);
    return venusAge;
  }

  yourAgeOnJupiter() {
    let jupiterAge = Math.floor(this.calculateAge() / secondsInYear/(jupiterYear/earthYear));
    console.log(jupiterAge);
    return jupiterAge;
  }

  yourAgeOnSaturn() {
    let saturnAge = Math.floor(this.calculateAge() / secondsInYear/(saturnYear/earthYear));
    console.log(saturnAge);
    return saturnAge;
  }

  yourAgeOnUranus() {
    let uranusAge = Math.floor(this.calculateAge() / secondsInYear/(uranusYear/earthYear));
    console.log(uranusAge);
    return uranusAge;
  }

  yourAgeOnNeptune() {
    let neptuneAge = Math.floor(this.calculateAge() / secondsInYear/(neptuneYear/earthYear));
    console.log(neptuneAge);
    return neptuneAge;
  }

  yourAgeOnMercury() {
    let mercuryAge = Math.floor(this.calculateAge() / secondsInYear/(mercuryYear/earthYear));
    console.log(mercuryAge);
    return mercuryAge;
    //2

  }

  saturnLifeExpectancy() {
    let saturnLifeExpectancy = Math.floor(lifeExpectancy / (saturnYear / earthYear));
    let saturnAge = Math.floor(this.realAge() / (saturnYear / earthYear));
    console.log("bd: " + this.realAge());
    console.log("sle: " + saturnLifeExpectancy);
    console.log("sa: " + saturnAge);
    let surpassedLifeExpectancy = Math.floor(saturnAge - saturnLifeExpectancy);
    return surpassedLifeExpectancy;
  }

  marsLifeExpectancy() {
    let marsLifeExpectancy = Math.floor(lifeExpectancy / (marsYear / earthYear));
    let marsAge = Math.floor(this.realAge() / (marsYear / earthYear));
    console.log("bd: " + this.realAge());
    console.log("sle: " + marsLifeExpectancy);
    console.log("sa: " + marsAge);
    let surpassedLifeExpectancy = Math.floor(marsAge - marsLifeExpectancy);
    return surpassedLifeExpectancy;
  }

//mars life exp is 40


}


// let resultNew = new BirthDay('1938-10-10');
// resultNew.saturnLifeExpectancy();
// let venusResult = new BirthDay('1966-10-10');
// venusResult.yourAgeOnVenus();
// let jupiterResult = new BirthDay('1966-10-10');
// jupiterResult.yourAgeOnJupiter();
// let saturnResult = new BirthDay('1966-10-10');
// saturnResult.yourAgeOnSaturn();
// let uranusResult = new BirthDay('1966-10-10');
// uranusResult.yourAgeOnUranus();
// let neptuneResult = new BirthDay('1966-10-10');
// neptuneResult.yourAgeOnNeptune();
// let mercuryResult = new BirthDay('1966-10-10');
// mercuryResult.yourAgeOnMercury();
