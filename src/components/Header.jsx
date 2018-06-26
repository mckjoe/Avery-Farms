import React from 'react'

function Header() {

  return (
    <div>
      <style jsx>{`
        .header {
          text-align: center;
          color: black;
          background: url("http://smhttp.32478.nexcesscdn.net/80E972/organiclifestylemagazine/wp-content/uploads/2014/05/Produce.jpg");
          display: flex;
          height: 400px;
          justify-content: center;
          position: relative;
        }
        h2 {
          position: absolute;
          top: 30%;
          right: 15%;
          font-size: 64px;
        }
        ul{
          display: flex;
          list-style: none;
        }
        li {
          margin-left: 50px;
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
