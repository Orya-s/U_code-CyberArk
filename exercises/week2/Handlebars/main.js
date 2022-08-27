var classData = {
    classmates: [
        {name: "That on gal", description: "Always has the ansswer"},
        {name: "The weird dude", description: "Quick with a smile"},
        {name: "Taylor", description: "Just Taylor"}
    ]
}


const source = $('#class-template').html();
const template = Handlebars.compile(source);
const newHTML = template(classData);

// append our new html to the page
$('.class').append(newHTML);


const menuData = {
    menu: [
      { name: "Google", link: "http://google.com", socialNetwork: false},
      { name: "Facebook", link: "http://facebook.com", socialNetwork: true},
      { name: "Instagram", link: "http://nstagram.com", socialNetwork: true},
      { name: "Twitter", link: "http://twitter.com", socialNetwork: true},
    ]
};
  
const source2 = $('#menu-template').html();
const template2 = Handlebars.compile(source2);
const newHTML2 = template2(menuData);

// append our new html to the page
$('.menu').append(newHTML2);
