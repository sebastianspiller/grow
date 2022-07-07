import React from 'react';

export const AddPlant = () => (
  <div>
    <h2>Neue Pflanze</h2>
    <div>
      <label htmlFor="name">Pflanzenname / Spitzname</label>
      <input id="name" />
    </div>
    <div>
      <label htmlFor="type">Pflanzenart</label>
      <input id="type" />
    </div>
    <div>
      <label htmlFor="purchase-date">Anschaffungsdatum</label>
      <input id="purchase-date"/>
    </div>
    <div>
      <label htmlFor="photo-link">Foto-Link</label>
      <input id="photo-link" />
    </div>
    <button>Submit</button>
  </div>
);


