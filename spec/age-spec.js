import { BirthDay } from '../src/age.js';


describe ('BirthDay', function(){
  it('should return the user age in seconds', function(){
    let today = new Date();
    let testGalacticAge = new BirthDay('1966-10-10');
    let testDate = new Date(testGalacticAge.birthday);
    expect(testGalacticAge.calculateAge()).toEqual((Math.floor((today.getTime() - testDate.getTime()) / 1000)));
});


});
