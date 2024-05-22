import Slider from "react-slick";

// Import CSS files for the slider and additional styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

// Configuration for the slider settings
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
};

// Functional component to display product images in a slider
const ProductImages = (props) => {
    const { ImagesList } = props; // Destructure ImagesList from props

    return (
        // Render the slider with defined settings
        <Slider {...settings} className="slider-container">
            {/* Map through ImagesList to render each image */}
            {ImagesList.map(eachImage => (
                <img 
                    key={eachImage.id} 
                    src={eachImage.src} 
                    style={{height: eachImage.height, width: eachImage.width}} 
                    alt='Product'
                />
            ))}
        </Slider>
    );
}

export default ProductImages;
