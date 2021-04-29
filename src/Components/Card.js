import react from 'react';

const Card = ({val}) =>{
    return(
        <>    <h3>Name: {val.name}</h3> 
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
            )}>More</button></>

    )
}

export default Card;