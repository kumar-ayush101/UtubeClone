import axios from 'axios';
import './App.css'

const KEY='AIzaSyATdksvZqpaOnZAHGsEa2vs57Ib8YCtAHo';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResuts:15,
    key:KEY
  }
})