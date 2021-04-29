import React, {useState, useEffect} from 'react';
import {getHeroes} from '../Application/Api';

/**This component shows the heroes in your team */

const Home = () =>{
  /*   
    const [hero, setHero] = useState([]);

    useEffect (()=>{
        getHeroes();
        const heroesObjects = JSON.parse(localStorage.getItem('heroes'));
        setHero(heroesObjects);
    }, []);
    
    console.log(hero); */
    var hero = null;
    return(
        <>
            <div className="container">
                <div class="row justify-content-md-center">
                    <h1 className="display-4 text-center ">Team</h1>
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
                                <button onClick={() =>alert(
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
                                    )}></button>

                        {/*              
                        <div className="container">
                            <div className="modal" tabindex="-1" id="modal1">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            encabezado
                                        </div>
                                        <div className="modal-body">
                                            encabezado2
                                        </div>
                                        <div className="modal-footer">
                                            encabezadof
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="btn" type="button" data-toggle="modal" data-target="#modal1">Mostrar</button>

                        </div> */}
                            </div>

                            
                        </>
                    }) : null}
                </div>
            </div>
        </>
    );
}

export default Home;