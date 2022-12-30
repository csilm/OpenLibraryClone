import React, {Fragment} from 'react';


const navbar = () => {
  return (
    <>
    <div id='nav'>
      <div className="container-fluid">
		    <div className="container d-flex justify-content-between">
			    <div><a href="#"><img src="../images/ia-logo.svg" width="160"/></a></div>
			    <div><a href=""><img src="images/language-icon.svg" width="30"/></a></div>
		    </div>
      </div>
	    <div class="nav_bar container my-4">
        <ul class="d-flex">
          <li><button><img src="images/openlibrary-logo-tighter.svg" width="189" height="47"/></button></li>
          <li><button>My Books</button></li>
          <li><button><span>Browse</span><span></span></button></li>
          <li></li>
          <li><button>Log In</button></li>
          <li></li>
			    <li><button></button></li>
		    </ul>
	    </div>
    </div>
    </>
  )
}

export default navbar