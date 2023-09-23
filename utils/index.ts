

export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': '8985ef4171msh857d48f85d25763p1283f9jsnc10f85c80caa',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers:headers}) 

    const result = await response.json();

    return result
}