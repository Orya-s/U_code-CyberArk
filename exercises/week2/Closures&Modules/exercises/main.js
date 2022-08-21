
// ex1

const StringFormatter = function() {
    const capitalizeFirst = name => name.toUpperCase()[0] + name.slice(1).toLowerCase(); 
    
    const skewerCase = string => string.split(' ').join('-');

    return {
        capitalizeFirst,
        skewerCase
    }

}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy"))   //should print Dorothy
console.log(formatter.skewerCase("blue box"))   //should print blue-box



// ex2

const Bank = function() {
    let money = 500;
    
    const depositCash = (cash) => {money += cash;}
   
    const checkBalance = () => {console.log(money);}
    
    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance()   //should print 950



// ex3

const SongsManager = function() {
    const songs = {};
    const head = "https://www.youtube.com/watch?v=";

    const addSong = function(name, link) {
        songs[name] = link.split('=')[1];
    }
    const getSong = function(name) {
        console.log(head + songs[name]);
    }

    return {
        addSong,
        getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

