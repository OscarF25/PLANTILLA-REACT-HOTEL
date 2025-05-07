import React from 'react'

export default function Room({dataRoom}) {
    console.log(dataRoom);
    //destructuring
    let {name, price, type, image, size} = dataRoom;
  return (
    <>
        <div class="w3-third w3-margin-bottom">
            <img src={image} alt="Norway" style={{"width":"100%"}} />
            <div className="w3-container w3-white">
                <h3>{name}</h3>
                <h6 className="w3-opacity">From ${price}usd</h6>
                <p>{type}</p>
                <p>{size}</p>
                <p className="w3-large"><i className="fa fa-bath"></i> <i className="fa fa-phone"></i> <i className="fa fa-wifi"></i></p>
                <button className="w3-button w3-block w3-black w3-margin-bottom">Choose Room</button>
            </div>
        </div>
    </>
  )
}
