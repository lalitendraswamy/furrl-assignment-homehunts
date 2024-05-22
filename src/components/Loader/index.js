import { TailSpin } from 'react-loader-spinner'; // Import TailSpin loader component
import './index.css'; // Import CSS file for styling

// Functional component for the Loader
const Loader = () => {
  return (
    <div className='loader-container'> {/* Container for the loader */}
      <TailSpin color='#7f5ae6' /> {/* TailSpin loader with custom color */}
    </div>
  );
}

export default Loader; // Export the Loader component
