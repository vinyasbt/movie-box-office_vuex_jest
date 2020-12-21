import axios from 'axios';
export function getshow(data){
    return axios.get('http://api.tvmaze.com/search/shows?q='+data);
}
export function viewShowDetails(id){
    console.log("in service",id)
    return axios.get('http://api.tvmaze.com/shows/'+id);
}
export function viewEpisodeDetails(id){
    console.log("episode service");
    return axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
}
export function getAllShows(){
    console.log("get all show service");
    return axios.get(`http://api.tvmaze.com/shows`);
}
export function castDetails(id){
    // console.log("get all show service");
    return axios.get(`http://api.tvmaze.com/shows/${id}/cast`);
}