import './Game.css';
import {useState, useRef} from 'react';

const Game = ({
  verifyLetter, 
  pickedWord, 
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
  }) => {

  const [letter, setLetter] = useState('');
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter)
    setLetter("");
    letterInputRef.current.focus();
  }

  return (
    <div className="game">
      <p className="points">
          <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
          dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>


      <div className="wordContainer">
        {letters.map( (item, i) => (
          guessedLetters.includes(item) ? (
            <span key={i} className="letter">{item}</span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
      </div>

      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra.</p>
        <form onSubmit={handleSubmit}>
            <input type="text" 
              name="letter" 
              maxLength="1" 
              required 
              onChange={ (e) => setLetter(e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))}
              value={letter} 
              ref={letterInputRef}
            />
            <button>Jogar!</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
          <p>Letras já utilizadas: </p>
          {wrongLetters.map( (item, i) => (
            <span key={i}> {item} </span>
          ))}
      </div>

    </div>
  )
}

export default Game