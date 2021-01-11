import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import {connect} from 'react-redux';

const NavBar = (props) => {
    return ( 
        <div className="opacity-80 bg-green-200 font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
          <div className="mb-2 sm:mb-0 inner">
        
            <a href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">RecipeMaster</a><br></br>
            <span className="text-xs text-grey-dark">Cooking Can Be Very Easy</span>
        
          </div>
        
          <div className="sm:mb-0 self-center">
          {props.isSignedIn &&
           <Link to={`/user-archive/${props.userId}`}
                 className="mx-3 text-non px-8 py-2 rounded bg-yellow-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg">
            Archived Recipes
          </Link>}
            <GoogleAuth />
          </div>
        </div>
    );
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId
  }
}
 
export default connect(mapStateToProps, null)(NavBar);