
const getData = async (albumId) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
    if(!result.ok) { throw new Error("Failed to fetch album")}
    return result.json()
}

const AlbumsDetail = async ({params: { albumId }}) => {

    const album = await getData(albumId)

    return ( 
        <main>
            <h1 className="text-2xl font-bold pb-5">Here is the details about your selected album.</h1>
            <p>{album.title}</p>
        </main>
     );
}
 
export default AlbumsDetail;