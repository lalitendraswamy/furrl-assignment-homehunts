import React from 'react'; // Import React
import './index.css'; // Import CSS file for styling
import Filter from '../Filter'; // Import the Filter component

// Functional component for the Filters Section
const FiltersSection = (props) => {
    const { filtersList } = props; // Destructure filtersList from props

    return (
        <div className='filters-container'> {/* Container for filters */}
            {
                // Map through filtersList and render each Filter component with unique key and filterDetails
                filtersList.map(eachFilter => <Filter key={eachFilter.uniqueId} filterDetails={eachFilter} />)
            }
        </div>
    );
}

export default FiltersSection; // Export the FiltersSection component
