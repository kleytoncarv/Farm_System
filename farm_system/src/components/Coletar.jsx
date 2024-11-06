// src/components/Coletar.jsx
import React from 'react';
import ItemCard from './ItemCard';
import './Coletar.css';

const Coletar = () => {
  return (
    <div className="card-grid">
      <ItemCard nome='Cocaina' peso={0.2} imagem="https://s3-alpha-sig.figma.com/img/7eba/f8c5/8ca8d5838748968090a20079faa84626?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBu8whyRgWa~qwIZaB0SUSRHmBzO60Oz7PkfhNAsStVvW2VwnqeWAwtH6onuOSy2KCYVanDXBMH3zBcu9scdDAGxHmq6NqJz0rIDN8ONXTsVgAd77mtFSFJmjW47bhq63yEYNg-hNbHWMgyxk6meceKZbXVsusD~znMF9lL9I3cd0R6fU7XUXw2EETPA8eXa1kB4atp2de5xXvNPJcmx1ncOxmPMq~5WkoH2niS4vDr1fw0JP7W91qBCxvl2ScjzvcWDNmWtz9bsEKwD9~gPsJMI~qQhMn1BeM6JMh8aCNc48psaj1MAgw2B40TyQKJJ9rljwLeVE886ghYAWzFE6w__"/>
      <ItemCard nome='Maconha' peso={0.1} imagem="https://s3-alpha-sig.figma.com/img/372c/4ae5/bfb5fd655db9e5ed068e2fc2896484b1?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5IxayKS-OoKS7mtgzypkmbeYoWVxRkxCZ26p4fFg0fK0aHP5iIifvIVOafAHgOzJUYsfXMLy7hsHQiqeKTQdmViz5bwP5ZW1EZ-EcU0TbQemZdqmn1cKOSUjXyBOnQZbm2SNdp8iLlQ4UzoywiAaq-UgpY3P0INLpIAXKizJQnZji34~0Ot2XpdZGO1obVZPepFj53kF3Z2Id0lIDeCdMXpDS5HVDwYt5MWHkOScnoAsMFMQf5~~EqUG71ICRuDfLuexWKr5YVYyFfrCB58fFdeIrQyJMol1dF0FfTSbhCPnObEVe4bpmHG3ISWNJgbtaMMJiWESjG9FA3KXY-RTQ__"/>
      <ItemCard nome='Metanfetamina' peso={0.2} imagem="https://s3-alpha-sig.figma.com/img/4acd/8d88/c2439aa2a93637fb87946b79ce10616a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eTTuqK1UywwhMxhYZ~pjZvpzM~HOYD8-6~A31wu1-b0Or4zeWVNWAKq2AGnKbA6v4qJpU-XmW2hcR1SpUZ3E1jz6M-DGQBxbH7EJ3P6XlzJ0NuMEIX4r3Ju~oOIkh0zCu3iuwkRU2ZW7L4in~1xcZ9rKqE6uNbaN0zejOCo5s3kmqH2goCQUunbQfOFg090YdkHf6LY6RLz9GVQ2ppXcM3BkdiNuRvCFF3TRZY4LxEKYJgMonFYB~Z897sQQZJJIVZSuhwM-q73Rmu6Q5nthcj5KFymVsiqfcbTedz2bTa-Yy59g6NVJN6ZyMNUL8v88i0kDMvCkofFwacoaXEuh9Q__"/>
      <ItemCard nome='MDMA' peso={0.2} imagem="https://s3-alpha-sig.figma.com/img/1ac9/9f00/419f803bac1457f19bd6fa28a7e2381f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kg9bpQnmxuonb9V2wtImAe6ziJ3D7UD6TlrewUwxizKYr1aCcStflb28zsoYo0DuY4FtWWRLIWii7YQWl8pewgHGXwpw-n8-2QV74zHIiN~c6jyJhfvDLQmxtZ-FpTAuBDCdL23WFGTliVsFRynY5gObToHEQ6dnNntgPkb4pUBwEVsN0XpJ4eerbFGQdwB9DuBdBSoBjVVqb7v1wJiBYuEwlPbDrApkZtpayzVKh1kbcm0WrFetX54Xl50rP7OOf3zjcV7Lld8hQb3CKsYKpaz-afg3klInThY9-WUePIOw82v~EQW3PYK91CA3E81o0wrk6AH8PhMFYeI7Lac4lA__"/>
      <ItemCard nome='LSD' peso={0.1} imagem="https://s3-alpha-sig.figma.com/img/5a87/083a/62953e0b5f7ac04bb094e1552c5675fc?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IVnLPfIO071B6BuB-XtV2PjmnQZqRgHMTO7YDu1INCA7fpqj2se6jAYBFhQYwExw7QYyuHEIs1oKWCexUccNbzrrU61WpmH5HKzbRzc4OkQDcyoP33VdKkpX-DfJWyIEL7YiH7Q7Ondzg6q5EQoK-Qg-zNIu7sB8VkIuZRXbBGM93EN1aBO2ewmABr0cBFwWkHepnmZRHl8CN~E5fikkcK2Jm~FLlf5Xn9yfDKwqtRcyZpqvwy1xrtVMt-IZr7qr6kV02yXHfOMjXgSAR~-9NLPHs9tkJoNShM-waNb-doQ~70fcOhImUxjboqlIjVmZ8iZdNNbkPcdrudiUOnW3fQ__"/>
      <ItemCard nome='Heroina' peso={0.4} imagem="https://s3-alpha-sig.figma.com/img/5a2c/0e88/a4977bc7ad95df4d55daee0dcd3ea906?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G-W2yVYH6~DFmqrniLlnK1HVFce--WTOjiy7e-r~nJWJUG~aGTGMUQ4kvUYqW3ZNBSOBthWbbViFpi513M6pHzgEYN~N07glE~SfOIsE~oermElv40zxl2BVohSOSBFsqYCo2UhD1aIvviH-XXPzINpEVWI7dPiJX-cSt3RVv44R-DfsggRMy3ePszJreZq3doAuL7ePbDpfLOWGSG0r9maR9O3ieaji4AkYwEoFfCNa8Uk9Q4eMrchZFJP4RXJcUc5X93Z-ef6-NxQJALLZJTN9Az4fyC9QFLmcAdebzPSdl9WQQVBMT3fA2tYLzi5Wpul89TPEzzInQWJRvxUIzQ__"/>
    </div>
  );
};


export default Coletar;
