import axios from 'axios';

const urlToken = 'http://challenge-react.alkemy.org';
const urlHeroes = 'https://www.superheroapi.com/api.php/';  //732 heroes in total
const id = 3462962893805595;
const urlSearch = 'https://superheroapi.com/api/'

//Return the token of the Alkemy page for auth the user
export function getToken (email, password){
    axios.post(urlToken, {
        email: email,
        password: password
    }).then(res => {
        (localStorage.setItem('token', res.data.token))
    }).catch(e => {
        console.log(e);
        alert('INVALID');
    });
};


//Makes a call to get 200 heroes from super hero api. Its just 50 because the speed.
export function getHeroes(){
    let her = [];
    for( let i = 0; i < 50; i++){   
        axios.get(`${urlHeroes}/${id}/${i}`).then(res => {
            if(res.data.response !== "error"){ 
                her.push(JSON.stringify(res.data));
            } 
            localStorage.setItem('heroes', '[' + her + ']');
        }).catch(e => {
            console.log(e);
            alert('INVALID HEROES');
        })
    }
};

export function searchHero(name){
    axios.get(`${urlSearch}${id}/search/${name}`)
    .then(res =>{
        console.log(res.data.results);
    }).catch(e =>{
        console.log(e);
        alert('Image not found');
    })
}