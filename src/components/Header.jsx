import React from 'react'

function Header() {

  return (
    <div>
      <style jsx>{`
        .header {
          background: url("http://smhttp.32478.nexcesscdn.net/80E972/organiclifestylemagazine/wp-content/uploads/2014/05/Produce.jpg");
          display: flex;
          height: 400px;
          justify-content: center;
          position: relative;
          font-family: arial;
        }
        h2 {
          position: absolute;
          top: 30%;
          right: 15%;
          font-size: 64px;
          color: black;
        }
        ul{
          display: flex;
          list-style: none;
          text-align: center;
          color: black;
          font-size: 24px;
          position: absolute;
          bottom: 0;
          background-color: white;
          border: 2px solid yellow;
        }
        li {
          margin-left: 30px;
          background-color: green;
          padding: 10px;
        }
        li:nth-of-type(4) {
          margin-right: 30px;
        }
      `}</style>

      <div className="header">
      <h2>Avery Farms</h2>
        <ul>
          <li>Locations</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Products</li>
        </ul>
      </div>

    </div>


  )
}

export default Header
