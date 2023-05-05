import s from './style.module.css'
import { Search as SearchIcon } from 'react-bootstrap-icons'

export function SearchBar({onSubmit}){

    function submit(e){
        if(e.key==='Enter' && e.target.value.trim()!==""){
            onSubmit(e.target.value)
        }


    }

    return(<div>
        <SearchIcon size={20} className={s.search}/>
        <input className={s.input} onKeyUp={submit} type='text' placeholder={"Search Tv Show you may like"}/>
    </div>)
}