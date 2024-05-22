import './index.css';

// component for the Apps Section
const AppsSection = () => {
  return (
    <div>
      {/* Heading for the apps section */}
      <h1 className='app-section-heading'>Better on the app</h1>
      <div className='apps-container'>
        {/* Image for the App Store */}
        <img className='apps-image' src="https://web.furrl.in/_next/static/media/app-store.8b8445a1.webp" alt="app store" />
        {/* Image for the Play Store */}
        <img className='apps-image' src="https://web.furrl.in/_next/static/media/play-store.0a2ef8c6.svg" alt="play store" />
      </div>
    </div>
  );
}

export default AppsSection;
