import React, {useState, useEffect} from 'react';
import {getHeroes} from '../Application/Api';
import Card from '../Components/Card.js';

import NotData from '../Components/NotData.js';


/**This component shows the heroes in your team */

const Home = () =>{

//Consts
    const [hero, setHero] = useState([]);
    let array = [];

//Bring the team
    useEffect (()=>{
        getHeroes();
        let heroesObjects = localStorage.getItem('team');
        if (heroesObjects){   heroesObjects = heroesObjects.replaceAll('-', '_') };
        
        localStorage.setItem('team', heroesObjects); 
        heroesObjects = JSON.parse(localStorage.getItem('team'));
        

        setHero(heroesObjects);
        
        if (heroesObjects){
        for(var i=0; i<heroesObjects.length; i++) {
            for(var j=0; j<heroesObjects[i].length; j++) {
                array.push(heroesObjects[i][j]);
                setHero(array);
            }
        }}
    }, []);



    return(
        <>
            <div className="container">
                <div class="row justify-content-md-center">
                    <h1 className="display-4 text-center ">Team</h1>

                    {    
                    hero ? hero.map((val)=>{ 
                        return<> 
                            <div className="text-center card m-5 w-25 mb-5 ">
                            <Card
                            val={val}
                            ></Card>

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
                    }) : <NotData/>}
                </div>
            </div>
        </>
    );
}

export default Home;