const secondsInYear = 31536000;


const marsYear = 687;
const venusYear = 225;
const jupiterYear = 4333;
const saturnYear = 10759;
const uranusYear = 30689;
const neptuneYear = 60182;
const mercuryYear = 88;
const earthYear = 365;


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
  }


}

// let resultNew = new BirthDay('1966-10-10');
// resultNew.yourAgeOnMars();
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
