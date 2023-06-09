import { useState } from 'react'
import s from './style.module.css'
import { Search as SearchIcon } from 'react-bootstrap-icons'

export function SearchBar({ onSubmit }) {

    const [value, setValue] = useState("")

    function submit(e) {
        if (e.key === 'Enter' && e.target.value.trim() !== "") {
            onSubmit(e.target.value)
            setValue("")
        }

    }

    function handleChange(e) {
        setValue(e.target.value)
    }

    return (<div>
        <SearchIcon size={20} className={s.search} />
        <input className={s.input}
            onChange={handleChange}
            onKeyUp={submit}
            type='text'
            placeholder={"Search Tv Show you may like"}
            value={value}
        />
    </div>)
}