import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className='header'>
        <div className='nav'>
          <p className='whiteText'>Cars for Sales</p>
          <p className='whiteText'>Sell Your Car</p>
          <p className='whiteText'>Service & Repair</p>
          <p className='whiteText'>Research</p>
          <p className='whiteText'>Videos & Reviews</p>
          <p className='whiteText'>Contact Us</p>
        </div>
      </div>

      <div className='pinkBar'></div>

      <div className='jumboImageContainer'>
        <img 
          src="https://www.cars.com/cldstatic/ads/creative/20201118_5428_MY21_Elantra_Hero_2400x753.jpg" 
          alt='car' 
          className='jumboImage' 
        />
        <p className='jumboImageText'>Find your next match</p>
        <div className='sponsorshipBox'>
          <p className='whiteText'>Sponsored by</p>
          <img src='' alt='hyundai logo' />
          <p className='whiteText'>2021 Hyundai ELANTRA</p>
        </div>
      </div>

      <div className='borderedBox'>

      </div>
    </div>
  );
}

export default App;
