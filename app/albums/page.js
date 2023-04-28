import Link from "next/link";

const getData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/albums")
    if( !result.ok ) { throw new Error("Failed to fetch data");}
    return result.json()
}

const Albums = async () => {

    const albums = await getData()
    // console.log(albums)

    return ( 
        <main className="pl-2">
            <h1 className="text-2xl">These are my favorite albums: </h1>
            <ul className="leading-9">
                {albums.map(album => (
                    <li key={album.id}>
                        <Link href={`/albums/${album.id}`}>
                            {album.title}
                        </Link>
                    </li>
                ))}
            </ul>
            
        </main>
     );
}
 
export default Albums;