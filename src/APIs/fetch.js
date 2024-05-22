// Asynchronous function to fetch data from a given URL with provided options
const getData = async (url, options) => {
    try {
        // Await the response from the fetch call
        const response = await fetch(url, options);

        // Check if the response is not okay (status is not in the range 200-299)
        if (!response.ok) {
            // Throw an error with the HTTP status
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the response data as JSON
        const responseData = await response.json();

        // Return the parsed response data
        return responseData;
    } catch (error) {
        // Return the caught error
        return error;
    } 
};

export default getData;
