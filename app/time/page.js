
const getTime = async () => {
    const result = await fetch(`http://worldtimeapi.org/api/timezone/Europe/Copenhagen`, { next: { revalidate: 1 } })
    if(!result.ok) {throw new Error("Couldn't fetch data... ")}
    return result.json()
}

const Time = async () => {

    const times = await getTime()
    console.log(times)

    return ( 
        <main>
            <h1>{times.datetime}</h1>
        </main>
     );
}
 
export default Time;