import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from 'react';
import { globalContext } from './context/Context';

export default function Header() {

    let { getData, menu, search, setSearch, url, base_url, setUrl } = useContext(globalContext)

    const searchMovie = (evt) => {
        if (evt.key == "Enter") {
            url = base_url + "/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=" + search;
            setUrl(url);
            setSearch(" ");
        }
    }

    return (
        <div className='header'>
            <div className="header-container">
                <nav>
                    <ul>
                        {
                            menu.map((value, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#" className="nav-link" name={value}
                                            onClick={(e) => { getData(e.target.name) }}>
                                            {value}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className="input">
                        <input type="text" placeholder="Enter Movie Name..."
                            onChange={(e) => { setSearch(e.target.value) }}
                            value={search} onKeyPress={searchMovie}>
                        </input>
                        <AiOutlineSearch className='search-i' />
                    </div>

                </nav>
            </div>
        </div >
    )
}
