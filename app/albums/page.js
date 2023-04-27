

const getData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/albums")
    if( !result.ok ) { throw new Error("Failed to fetch data");}
    return result.json()
}

const Albums = async () => {



    return ( 
        <main>
            <h1 className="text-2xl">These are my favorite albums</h1>
            
            
        </main>
     );
}
 
export default Albums;