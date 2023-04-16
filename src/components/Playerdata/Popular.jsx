import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Popular() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://sportscore1.p.rapidapi.com/sports/1/teams',
      params: {page: '1'},
      headers: {
        'X-RapidAPI-Key': '2cb7d1411bmsh5d1014fee752261p1565fajsnbb8d5222919c',
        'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <img key={item.id} src={item.urls.raw} alt={item.alt_description} />
      ))}
    </div>
  );
}

export default Popular;
