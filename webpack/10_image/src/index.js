import './index.html';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import  porscheImg from './images/Porsche.jpeg'


const mainObj = document.getElementById('main');
mainObj.innerHTML='<h1>Porsche GT</h1>';

const successBtn = '<button type="button" class="btn btn-success climate-btn">Klima retten - Jetzt</button>';


const image = `<img src =${porscheImg} />`;
mainObj.innerHTML += image;
mainObj.innerHTML += successBtn;