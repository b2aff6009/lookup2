import './SearchBar.css'

interface ISearchBar {
    callback : Function
}

const SearchBar = (props : ISearchBar) => {
    const changeHanlde = (event : any) => {
        props.callback(event.target.value)
    }

    return (
        <div className="body">
            <form className="InputForm">
                <input 
                    className="Input"
                    type="text"
                    placeholder='Search for your C H E A T!'
                    onChange={changeHanlde}>

                </input>
            </form>
        </div>
    )

}

export default SearchBar 