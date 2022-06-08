import './App.css';
import './estiloscomponenetes/style.css'
import img2 from './img/img2.png'
import img1 from './img/img1.png'

function App() {

  /*var boton = document.getElementById('boton');

  boton.addEventListener('click', function(){
       debugger;
       fetch('https://webhook.site/446d761a-297d-4da0-83b5-ffa2e1b30243/')
       .then(data => data.json())
       .then(data => {
           console.log(data);
       })   
  })



  function enviarDatos(){
       fetch('https://webhook.site/446d761a-297d-4da0-83b5-ffa2e1b30243/',{
           method:'',
           body: JSON.stringify()
       })
  }*/

  return (
    <div className="App">
      <div className='contenedor-principal'>
          <img className='img1' src={img2} />
      </div>
      <div className='contenedor-secundario'>
        <div className='TextP'>
        <p>
            This is Your Kanye West quote for today,
            click below to get another one
          </p>
          <button  className="Botoon">
            Get New One
          </button>
        </div>
          <img className='img2' src={img1} />
      </div>
      <div className='contenedor-tercero'>
          <h1>Be the first to access it</h1>
          <p>Subcribe to receive updates and join our beta list</p>
      </div>
      <div className='contenedor-input-button'>
        <input placeholder='Enter your Email'></input>
        <button className='Boton-sub'>Subscriber</button>
      </div>
      <footer>
        @ CopyRight 2022
      </footer>
    </div>
  );
}

export default App;
