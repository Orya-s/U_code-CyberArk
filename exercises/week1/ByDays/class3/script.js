
// let frontEnd = ['HTML', 'CSS', 'Javascript'];
// let frontEndLangages = frontEnd;


const counter = {
    count: 0,
  
    updateCounter: function () {
      this.count += 1;
    }
  };
  
  counter.updateCounter();
  counter.updateCounter();
  counter.updateCounter();
  
  alert(counter.count);


const person = {
    username: "Felicia",
    introduce: function(){
      console.log("Hi, I'm " + this.username)
    }
}
  
person.introduce() //throws an error