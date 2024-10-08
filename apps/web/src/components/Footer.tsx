import React from 'react';
// import * as ReactIcons from 'react-icons';
import {FaInstagramSquare,GrLinkedin,FaTwitter,BsGithub} from '../../public/assets/Icons images/icons';







const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4 uppercase">
            <span className="text-blue-500">Code</span>Side
          </h2>
          <div className="flex flex-col space-y-2">
            <h3 className="text-gray-400 font-medium">Our Famouse Locations</h3>
            <p>Chouksey Engineering College</p>
            <p>Lal khadan, Bilaspur (495001)</p>
            <p>Bilaspur ,Chhattisgarh</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Top Categories</h3>
          <ul className="space-y-2">
            <li><a href="#">Problem Solving </a> </li>
            <li><a href="#">Creating a Contest</a></li>
            <li><a href="#">List of Top Coder</a></li>
            <li><a href="#">Famous Problems </a></li>
            <li><a href="#">Join us As Developer</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li><a href="#">Terms of Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Support Us</a></li>
            <li><a href="#">Track Progress</a></li>
          </ul>
        </div>

        <div>
        <h1 className="flex flex-col  text-lg font-bold text-size mb-4 py-4 px-3">Visit Again </h1>

          
          <p className=" mb-4 items-center  py-4 px-3">
          Thanks You  For Visiting
          </p>
          {/* <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="bg-gray-800 border border-gray-700 rounded-l-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-md px-4 py-2"
            >
              Subscribe
            </button>
            <div className="flex justify-center">
  
   </div>
            
          </form> */}
        
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">© 2024 CodeSide. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <ul className='flex  space-x-4 mt-4 md:mt-0 items-center justify-center '>
              <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="60px" height="60px"><linearGradient id="SKETU~BGws7oJO6LvJO0xa" x1="12" x2="12" y1="20" y2="44" gradientUnits="userSpaceOnUse"><stop offset="0"stopColor="#6dc7ff"/><stop offset="1"stopColor="#e6abff"/></linearGradient><path fill="url(#SKETU~BGws7oJO6LvJO0xa)" d="M24,31H13v4h5.33c-0.44,0.92-1.07,1.72-1.84,2.37l0.003,0.003l-0.004-0.001	C15.273,38.388,13.708,39,12,39c-2.965,0-5.499-1.843-6.519-4.446l0,0C5.17,33.762,5,32.901,5,32c0-1.45,0.441-2.797,1.196-3.914	l0.132-0.173C7.594,26.145,9.66,25,12,25c1.87,0,3.57,0.73,4.82,1.93l3.34-3.73C18.02,21.22,15.15,20,12,20	c-4.14,0-7.79,2.1-9.95,5.29C0.755,27.206,0,29.515,0,32c0,1.97,0.475,3.829,1.316,5.469l0,0C3.305,41.346,7.342,44,12,44	c3.197,0,6.102-1.25,8.253-3.288l-0.002-0.004C22.56,38.529,24,35.429,24,32V31z"/><linearGradient id="SKETU~BGws7oJO6LvJO0xb" x1="45.856" x2="45.856" y1="22.006" y2="45.315" gradientUnits="userSpaceOnUse"><stop offset="0"stopColor="#1a6dff"/><stop offset="1"stopColor="#c822ff"/></linearGradient><path fill="url(#SKETU~BGws7oJO6LvJO0xb)" d="M34.273,22.006h-6.465v17.06h2.437v-5.687h3.939c3.381,0,5.809-2.36,5.809-5.687	S37.611,22.006,34.273,22.006z M33.495,30.942h-3.25v-6.499h3.25c2.32,0,3.807,1.094,3.807,3.25S35.827,30.942,33.495,30.942z M45.57,26.88c-2.804,0-4.878,1.546-4.954,3.672h2.379c0.196-1.011,1.167-1.673,2.499-1.673c1.614,0,2.527,0.725,2.527,2.063	l0.001,0.923l-3.302,0.171c-3.065,0.179-4.725,1.389-4.725,3.494c0,2.125,1.713,3.535,4.168,3.535c1.658,0,3.198-0.81,3.895-2.093	h0.054l0.007,2.093h2.437v-8.291C50.556,28.406,48.592,26.88,45.57,26.88z M48.013,34.488c0,1.536-1.353,2.63-3.142,2.63	c-1.407,0-2.303-0.652-2.303-1.652c0-1.031,0.862-1.63,2.51-1.725l2.942-0.215L48.013,34.488z M56.088,39.283l-4.72-12.403h2.868	l3.225,9.44l3.955-9.44h2.489c0,0-7.722,18.217-7.787,18.371l-2.489,0.064C53.674,45.21,56.088,39.283,56.088,39.283z"/></svg></a></li>

              <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="46px" height="46px"><path fill="#3F51B5" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"/><path fill="#FFC107" d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"/><path fill="#FF3D00" d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"/></svg></a></li>
              <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="46px" height="46px"><path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"/><path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"/><path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"/></svg></a></li>
            </ul>
          </div>
          <div className="flex space-x-4  mt-4 md:flex-center items-center justify-between -translate-y-2">
            <span className="text-gray-500">Follow Us:</span>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <i className="fab fa-linkedin text-xl"><GrLinkedin/></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <i className="fab fa-twitter text-xl"><FaTwitter/> </i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <i className="fab fa-instagram text-xl "><FaInstagramSquare/></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <i className="fab fa-github text-xl"><BsGithub/></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
