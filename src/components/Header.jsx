import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from 'react';
import { globalContext } from './context/Context';

export default function Header() {

    let { getData, menu, search, setSearch, url, base_url, setUrl, api_key } = useContext(globalContext)

    const getFind = () => {
        url = `${base_url}/search/movie?api_key=baf73bb11d6b81a6179e684c79e3c09a&query=${search}`
        setUrl(url)
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
                        <input onKeyUp={getFind} onChange={(e) => { setSearch(e.target.value) }}
                            type="text" placeholder='Enter Movie Name' />
                        <AiOutlineSearch className='search-i' />
                    </div>

                </nav>
            </div>
        </div >
    )
}
