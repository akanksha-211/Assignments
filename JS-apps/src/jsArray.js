
const list = new Array(1,2,3,4,5); // Due to performance, this format is deprecated
console.log(list);
const name = ['a','b', 'c','d','e'];
console.log(name);
name.forEach((element, index) => {
    console.log(index, element)    ;
});



const video ={
    genre:"Sci fi",
    list:['a','b','c'],
    findMovies(){
        const that = this;
        this.list.forEach(function(movie, index){ 
            console.log(that.genre,'-',movie);
        })
    }
}
video.findMovies();
