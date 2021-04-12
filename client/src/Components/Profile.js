import React from 'react';
import axios from 'axios';

function Profile(props) {
  console.log(props)
  return <div>This is profile page
  <form>
    <button type="submit">Log Out</button>
    </form>
  </div>;
}

export default Profile;
