import Loader from "../Loader";
import "./index.css";

// Functional component for the Banner Section
const BannerSection = (props) => {
    // Destructure vibeDetails from props
    const { vibeDetails } = props;
    // Destructure imageUrl from vibeDetails
    const { imageUrl } = vibeDetails;

    return (
        <>
            {
                // Check if imageUrl is defined
                imageUrl !== undefined ?
                <div>
                    <div className="image-container">
                        {/* Display the banner image */}
                        <img src={imageUrl} className="banner-image" alt="banner" />
                    </div>
                </div> 
                : 
                // Display the Loader component if imageUrl is undefined
                <Loader />
            }
        </>
    );
}

export default BannerSection;
