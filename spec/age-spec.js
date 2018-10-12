import { BirthDay } from '../src/age.js';


describe ('BirthDay', function(){
  it('should return the user age in seconds', function(){
    let today = new Date();
    let testAgeInSeconds = new BirthDay('1966-10-10');
    let testDate = new Date(testAgeInSeconds.birthday);
    expect(testAgeInSeconds.calculateAge()).toEqual((Math.floor((today.getTime() - testDate.getTime()) / 1000)));
  });

  it('should return users age in mercury years', function(){
    let testMercuryAge = new BirthDay('1966-10-10');
    expect(testMercuryAge.yourAgeOnMercury()).toEqual(215);
  });

  it('should return users age in mars years', function(){
    let testMarsAge = new BirthDay('1966-10-10');
    expect(testMarsAge.yourAgeOnMars()).toEqual(27);
  });

  it('should return users age in venus years', function(){
    let testVenusAge = new BirthDay('1966-10-10');
    expect(testVenusAge.yourAgeOnVenus()).toEqual(84);
  });

  it('should return users age in neptune years', function(){
    let testNeptuneAge = new BirthDay('1966-10-10');
    expect(testNeptuneAge.yourAgeOnNeptune()).toEqual(0);
  });

  it('should return users age in saturn years', function(){
    let testSaturnAge = new BirthDay('1966-10-10');
    expect(testSaturnAge.yourAgeOnSaturn()).toEqual(1);
  });

  it('should return users age in jupiter years', function(){
    let testJupiterAge = new BirthDay('1966-10-10');
    expect(testJupiterAge.yourAgeOnJupiter()).toEqual(4);
  });

  it('should return users age in earth years', function(){
    let testEarthAge = new BirthDay('1966-10-10');
    expect(testEarthAge.realAge()).toEqual(52);
  });
});
