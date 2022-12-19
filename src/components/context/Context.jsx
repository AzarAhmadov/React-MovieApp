import { createContext, useState, useEffect } from "react";
export const globalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const menu = ['Popular', 'Kids', 'Theatre', 'Comedie']
    let api_key = '&api_key=baf73bb11d6b81a6179e684c79e3c09a';
    let base_url = 'https://api.themoviedb.org/3';
    var url = `${base_url}//discover/movie?sort_by=popularity.desc${api_key}`;
    let [get_data, setData] = useState([]);
    let [get_url, setUrl] = useState(url);
    let img_path = 'https://image.tmdb.org/t/p/w500'
    const [search, setSearch] = useState()

    const getData = (type) => {
        if (type === 'Popular') {
            setUrl(`${base_url}/discover/movie?sort_by=popularity.desc${api_key}`)
        }
        else if (type === 'Kids') {
            setUrl(`${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc${api_key}`);
        }
        else if (type === 'Theatre') {
            setUrl(`${base_url}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22${api_key}`);
        } else {
            setUrl(`${base_url}/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc${api_key}`);
        }
    }

    useEffect(() => {
        fetch(get_url).then(res => res.json()).then(data => {
            setData(data.results);
        })
    }, [get_url])

    let values = {
        menu,
        api_key,
        base_url,
        url,
        get_data,
        setData,
        get_url,
        setUrl,
        img_path,
        getData,
        search,
        setSearch
    }

    return (
        <globalContext.Provider value={values} >
            {children}
        </globalContext.Provider>
    )
}

export default GlobalContextProvider