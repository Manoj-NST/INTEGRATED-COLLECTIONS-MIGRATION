import React from 'react';

function Dashboard(props) {

  // handle click event of logout button
  const handleLogout = () => {   
    window.localStorage.clear(); //clear all localstorage 
    props.history.push('/login');
  }

  return (
    <div>
      Welcome User!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;