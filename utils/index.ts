export async function fetchCars()
{
    const headers = {
        'x-rapidapi-key': 'd9a577079emsh227f6721e9c19a2p1eec39jsn13eaaaecc0fd',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla'
        ,
        {
          headers: headers,      
        }
    );

    const result = await response.json();

    return result;
}