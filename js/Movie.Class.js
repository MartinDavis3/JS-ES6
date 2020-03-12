
 /**
  * Classes.
  * *** CHECK OUR IMPORT
  */

 export class Movie {
    constructor( name, genre, year ) {
        this.name = name;
        this.genre = genre;
        this.year = year;
    }
    get getName() {   // How we retrieve the property. A GETTER.
        return this.name;
    }
    set setName( name) {   // How we store a new property value. A SETTER.
        if ( typeof name === 'string') {
            this.name = name;        
        } else {
            this.name = name.toString();
        }
    }
    set setYear( year ) {
        this.year = Number( year );     // Set is used here to make sure the year is stored as a number
    }
    showPoster() {   // This is a method! We can name them as we like.
        const info = `
            MOVIE INFO
            ==========
            Name: ${this.name}
            Genre: ${this.genre}
            Year: ${this.year}
        `;
        return info;
    }
}