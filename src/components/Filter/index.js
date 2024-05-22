import './index.css'; 

// Functional component for a filter button
const Filter = (props) => {
    const {filterDetails : {name}} = props; // Destructure filterDetails from props

    return(
        <button type="button" className='filter-button'>{name}</button> // Button with filter name
    );
}

export default Filter; // Export the Filter component
