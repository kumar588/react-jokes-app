import React,{useState,useEffect} from 'react';
import './App.css';
import Joke from './Joke.js'



    function App(){

        const [jokesData,setJokesData]=useState({
            current_page:1,
            previous_page:1,
            next_page:1,
            searchTerm: 'Teacher',
            results:[{id:"1",joke:"Hey !!"}]})

        const [pageNumber,setPageNumber]= useState(1)
        const [searchTerm,setSearchTerm]= useState('')
       

      
        function loadData()
        {
            fetch(`https://icanhazdadjoke.com/search?limit=5&page=${pageNumber}&term=${searchTerm}`, {
                headers: {
                    "Accept": "application/json"
                }
            }).then((res) => res.json())
                .then((res) => {
                    setJokesData(res)
                })
        }

        function searchData(){        
            fetch(`https://icanhazdadjoke.com/search?limit=5&term=${searchTerm}`, {
                headers: {
                    "Accept": "application/json"
                }
            }).then((res) => res.json())
                .then((res) => {
                    setJokesData(res)
                })
        }

        useEffect(()=>loadData(),[])// component did mount
        useEffect(()=>loadData(),[pageNumber])// component did update
        //useEffect(()=>searchData(),[searchTerm])// component did update


        const jokesComps= jokesData.results.map((jokeModel)=>{
            
            return (<Joke key={jokeModel.id} joke={jokeModel.joke}/>)
        });  

       const handleSubmit = (event) =>{
        searchData()
        event.preventDefault()
       }

        return (
            <div>
                <div className="jokes-list">
                <img alt="Joke Quote" src="http://img.picturequotes.com/1/24/life-is-better-when-youre-laughing-quote-3.jpg"/>
                
               <div>
               <form onSubmit = {handleSubmit}>
               Search For Jokes: <input type="text" value={searchTerm} onChange= {e => setSearchTerm(e.target.value)} ></input>                   
               <button type="submit">Search</button>
               </form>
               </div>
               
                    {jokesComps}
                    <div className="pagination">
                    <button onClick={()=>setPageNumber(jokesData.previous_page)}>Prev</button>
                    <a className="active" href="#">{jokesData.current_page}</a>
                    <button onClick={()=>setPageNumber(jokesData.next_page)}>Next</button>
                    </div>

                </div>                
            </div>
    );
}

export default App;
