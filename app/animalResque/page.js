import { prisma } from "@/db"
import Animal from "./Animal";

const getAnimals = async () => {
    const allAnimals = await prisma.animals.findMany();
    return allAnimals;
}

const AnimalResque = async () => {

   const animals = await getAnimals()
   console.log(animals)

    return ( 
        <main className="p-2">
            <h1 className="text-2xl font-bold">Here is the animal resque page</h1>
            <ul>
                {animals.map(animal => (
                    <Animal animal={animal} />
                ))}
            </ul>
           
           
        </main>
     );
}
 
export default AnimalResque;