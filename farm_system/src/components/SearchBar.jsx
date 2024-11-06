import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import Check from '../assets/Check.png';

const SearchBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.container}>
      <FaSearch style={styles.icon} />
      
      <input type="text" placeholder="Pesquisar por nome do item" style={styles.input} />

      <button style={{...styles.button, background: isHovered ? '#F20B53' : '#1E1E1ECC',}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <img src={Check} alt='Pesquisar' style={styles.img} /></button>

    </div>
  );
};

const styles = {
  container: {
    width: '360px',
    height: '12px',
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '2px',
    gap: '10px',
    position: 'absolute',
    top: '190px',
    left: '620px',
    backgroundColor: '#1E1E1ECC',
    
  },
  icon: {
    color: '#9B9B9B',
    fontSize: '18px',
  },
  input: {
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    color: '#9B9B9B', 
    fontSize: '13px',
    fontFamily: 'Outfit, sans-serif',
    backgroundColor: 'transparent',
    '::placeholder': {
      color: '#9B9B9B',
      opacity: 1,
    },

  },
  button: {
    width: '45px',
    height: '32px',
    padding: '10px 15px',
    position: 'absolute',
    border: 'none',
    borderRadius: '2px 2px 2px 2px',
    color: '#FF6EC7',
    backgroundColor: '#transparent', // Fundo do botão; ajuste se desejar
    cursor: 'pointer',
    fontSize: '13px',
    top: '0px',
    left: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s',
  },
  img: {
    width: '15px',
    height: '15px',
  }

};

export default SearchBar;
