import react from 'react';


const NotData = () =>{
    return(
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">No team yet </h1>
                    <button className="btn btn-primary">
                        <a href="/search" className="text-dark">Add new hero</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default NotData;