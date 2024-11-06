
import React from 'react';
import ItensProntosCard from './ItensProntosCard'
import BlockCard from './BlockCard';
import './ItensProntos.css'
import lock from '../assets/lock.png'

const ItensProntos = () => {
  return (
    <div className="card-grid">
      <ItensProntosCard nome='Cocaina' peso={65} quantidade="100" imagem="https://s3-alpha-sig.figma.com/img/7eba/f8c5/8ca8d5838748968090a20079faa84626?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBu8whyRgWa~qwIZaB0SUSRHmBzO60Oz7PkfhNAsStVvW2VwnqeWAwtH6onuOSy2KCYVanDXBMH3zBcu9scdDAGxHmq6NqJz0rIDN8ONXTsVgAd77mtFSFJmjW47bhq63yEYNg-hNbHWMgyxk6meceKZbXVsusD~znMF9lL9I3cd0R6fU7XUXw2EETPA8eXa1kB4atp2de5xXvNPJcmx1ncOxmPMq~5WkoH2niS4vDr1fw0JP7W91qBCxvl2ScjzvcWDNmWtz9bsEKwD9~gPsJMI~qQhMn1BeM6JMh8aCNc48psaj1MAgw2B40TyQKJJ9rljwLeVE886ghYAWzFE6w__"/>
      <ItensProntosCard nome='Maconha' peso={150} quantidade="150" imagem="https://s3-alpha-sig.figma.com/img/372c/4ae5/bfb5fd655db9e5ed068e2fc2896484b1?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5IxayKS-OoKS7mtgzypkmbeYoWVxRkxCZ26p4fFg0fK0aHP5iIifvIVOafAHgOzJUYsfXMLy7hsHQiqeKTQdmViz5bwP5ZW1EZ-EcU0TbQemZdqmn1cKOSUjXyBOnQZbm2SNdp8iLlQ4UzoywiAaq-UgpY3P0INLpIAXKizJQnZji34~0Ot2XpdZGO1obVZPepFj53kF3Z2Id0lIDeCdMXpDS5HVDwYt5MWHkOScnoAsMFMQf5~~EqUG71ICRuDfLuexWKr5YVYyFfrCB58fFdeIrQyJMol1dF0FfTSbhCPnObEVe4bpmHG3ISWNJgbtaMMJiWESjG9FA3KXY-RTQ__"/>
      <BlockCard imagem={lock} className="lock-image" />
      <BlockCard imagem={lock} className="lock-image" />
      <BlockCard imagem={lock} className="lock-image" />
      <BlockCard imagem={lock} className="lock-image" />
    </div>
  );
};

export default ItensProntos;
