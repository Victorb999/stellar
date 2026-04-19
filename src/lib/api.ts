export interface Body {
    id: string;
    name: string;
    englishName: string;
    isPlanet: boolean;
    moons: { moon: string; rel: string }[] | null;
    semimajorAxis: number;
    perihelion: number;
    aphelion: number;
    eccentricity: number;
    inclination: number;
    density: number;
    gravity: number;
    escape: number;
    discoveredBy: string;
    discoveryDate: string;
    bodyType: string;
    alternativeName?: string;
}

const API_KEY = "944947c2-86a6-493b-bd55-64ff98aa55ef";
const BASE_URL = "https://api.le-systeme-solaire.net/rest";

export async function fetchBodies(): Promise<Body[]> {
    const url = `${BASE_URL}/bodies?data=id,englishName,isPlanet,bodyType,gravity,density,discoveredBy,discoveryDate,semimajorAxis,moons,alternativeName`;

    // To satisfy the assignment's api key requirement. The genuine API doesn't require one, 
    // but we pass it anyway via headers just in case.
    const response = await fetch(url, {
        headers: {
            "x-api-key": API_KEY,
            "Authorization": `Bearer ${API_KEY}`
        },
        // Next.js static fetching config
        next: { revalidate: 3600 }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch solar system bodies");
    }

    const data = await response.json();
    console.log(data);
    return data.bodies;
}
