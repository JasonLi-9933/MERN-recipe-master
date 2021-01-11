import React from 'react';
import Button from './Button';
import {connect} from 'react-redux';


const RecipeCard = (props) => {
    console.log("Card: " + props.isDisabled);
    return ( 
        <div className="flex flex-row justify-between w-8/12 h-1/5 items-center my-5 p-6 rounded-2xl
                        bg-gradient-to-r from-green-100 via-green-200 to-blue-100 opacity-90 space-x-2">
            <img src={props.imgURL} className="w-1/4" />
            <div>
                <b>{props.title}</b>
                <p>Serving: {props.yield}</p>
            </div>
            {props.isSignedIn &&
             <Button text={props.buttonText}
                     color={props.buttonColor}
                     clickHandler={props.clickHandler}
                     isDisabled={props.isDisabled} />}
            <a href={props.insURL}
                className="h-1/4 text-non px-8 py-2 rounded bg-blue-300 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Instruction</a>
        </div>
     );
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = null;
 
export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);