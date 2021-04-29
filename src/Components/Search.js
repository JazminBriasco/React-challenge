import React, {useState, useEffect}  from 'react';
import {searchHero, getHeroes} from '../Application/Api.js';

/**This component shows the heroes form the api that you can join in the team */

const Search = () =>{
    
    const buttonJoin = document.querySelector('#join');

    const [hero, setHero] = useState([]);
    let cant = 0;
    //View all heroes
    useEffect (()=>{
        getHeroes();
        const heroesObjects = JSON.parse(localStorage.getItem('heroes'));
        setHero(heroesObjects);
        
    }, []);
    
    cant = JSON.parse(localStorage.getItem('team'));
    
    if(cant){ cant = cant.length;}

    /* searchHero('Abomination'); */

/*Function for add new hero in the team */
    const join = (id) =>{    
        //I get the ID of the hero and i filter it
        const aux = hero.filter(val => val.id === id);
        
        //Saving in LocalStorage, so when i open the project the data is there.
        const content = localStorage.getItem('team');

        //Check if the hero is already in the team
        if(content){
            let data = JSON.parse(content);
            var bool = false;
            if(data){
            for(var i=0; i<data.length; i++) {
                for(var j=0; j<data[i].length; j++) {
                    console.log(data[i][j].id);
                    if(data[i][j].id === id){
                        console.log('already');
                        bool = true;
                    }
                }
            }}
            if(bool){
                alert(aux[0].name + ' is already on your team!');
            }else{
                console.log('cant ' + cant);
                if(cant <= 4 ){
                    data.push(aux);
                    localStorage.setItem('team', JSON.stringify(data)); 
                    alert(aux[0].name + ' is now on your team!');
                    cant++;
                }else{

                    console.log('cant ' + cant);
                    alert('Maximum members reached');
                    window.location.reload();

                    return;
                }
            }
        }else{
            localStorage.setItem('team', JSON.stringify(aux));  
        }        
    }

    return(
        <>
            <div className="container">
                <div class="row justify-content-md-center">
                    <h1 className="display-4 text-center ">Heroes</h1>
                    {hero ? hero.map((val)=>{ 
                        return<> 
                            <div className="text-center card m-5 w-25 mb-5 ">
                                <h3>Name: {val.name}</h3> 
                                <img src={val.image.url} className="mb-3"/>
                                <p>Intelligence: {val.powerstats.intelligence}</p>
                                <p>Strength: {val.powerstats.strength}</p>
                                <p>Speed: {val.powerstats.speed}</p>
                                <p>Durability: {val.powerstats.durability}</p>
                                <p>Power: {val.powerstats.power}</p>
                                <button className="btn btn-secondary" onClick={() =>alert(
                                        'Gender: ' + val.appearance.gender + '\n' +
                                        'Race: ' + val.appearance.race + '\n' +
                                        'Height: ' + val.appearance.height[1] + '\n' +
                                        'Weight: ' + val.appearance.weight[1] + '\n' +
                                        '\n' +
                                        'Aliases: ' + val.biography.aliases[0] + '\n' +
                                        'Aligment: ' + val.biography.alignment + '\n' +
                                        '\n' +
                                        'Relatices: ' + val.connections.relatives + '\n' +
                                        '\n' +
                                        'Occupation: ' + val.work.occupation + '\n' +
                                        'Work: ' + val.work.base 
                                    )}>More</button>
                                    {cant < 5 ? <button className="btn btn-primary " id="join" onClick={() =>join(val.id)}>Join</button> : null}

                            </div>

                            
                        </>
                    }) : null}
                </div>
            </div>
            
        </>
    );
}

export default Search;