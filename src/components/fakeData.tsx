import song  from "../assets/images/as_long.jpg";
import dragon from "../assets/images/dragon.jpeg";
import fire  from "../assets/images/fire.jpeg";
import game  from "../assets/images/game_of_thrones.jpg";

type Book = {
    title: string,
    img: string,
    id : number 
}

export const data: Book[] =[
    { title:"Game of thrones", img:game, id: 1 },
    { title:"A song of Ice", img:song, id: 2 },
    { title:"Rise of Dragon", img:dragon, id: 3 },
    { title:"Fire and Blood", img:fire, id: 4 },

];