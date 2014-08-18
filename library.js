function Library() {
    this.contents = function() {
        for(var shelf in this) {
            console.log("\n" + shelf + ":");
            for(var book in this[shelf]) {
                console.log(this[shelf][book].name);
            };
        };
    };
};

function Shelf() {
    this.contents = function() {
        for(var book in this) {
            console.log(this[book].name);
        }
    }
};

function Book(name) {
    this.name = name;
    
    this.unshelf = function(shelf) {
        delete shelf[this.name];
    };
    
    this.enshelf = function(shelf) {
        shelf[this.name] = this;
    };
};

var publicLibrary = new Library();
var shelfOne = new Shelf();
var shelfTwo = new Shelf();
var shelfThree= new Shelf();
publicLibrary.shelfOne = shelfOne;
publicLibrary.shelfTwo = shelfTwo;
publicLibrary.shelfThree = shelfThree;

var lotr = new Book("Lord of the Rings");
var hp = new Book("Harry Potter");
var wfe = new Book("Water for Elephants");
var lop = new Book("Life of Pi");
var got = new Book("Game of Thrones");
var pap = new Book("Pride and Prejudice");
var h = new Book("Hamlet");
var md = new Book("Moby Dick");
var tkam = new Book("To Kill a Mockingbird");

lotr.enshelf(shelfOne);
hp.enshelf(shelfOne);
wfe.enshelf(shelfOne);
lop.enshelf(shelfTwo);
got.enshelf(shelfTwo);
pap.enshelf(shelfTwo);
h.enshelf(shelfThree);
md.enshelf(shelfThree);
tkam.enshelf(shelfThree);

shelfOne.contents();
publicLibrary.contents();
