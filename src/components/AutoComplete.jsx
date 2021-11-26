
import './AutoComplete.css'
import React from 'react';
// options should be object with key 'name'
const AutoComplete = ({ options }) => {
    const [inputState, setInputState] = React.useState("");
    const [suggestions, setSuggestions] = React.useState([]);
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [showSuggestions, setShowSuggestionList] = React.useState(false)

    const updateInput = (e) => {
        setInputState(e.target.value)
        setShowSuggestionList(!!e.target.value)
        setSelectedIndex(0)
    }

    const selectCountry = (index) => {
        setShowSuggestionList(false)
        setInputState(suggestions[index].name)
    }

    const selectFromSuggestions = (e) => {
        switch (e.keyCode) {
            // enter
            case 13:
                selectCountry(selectedIndex)
                break;
            // arrow up
            case 38:
                setSelectedIndex(selectedIndex === 0 ? suggestions.length - 1 : selectedIndex - 1)
                break;
            // arrow down
            case 40:
                setSelectedIndex(selectedIndex === suggestions.length - 1 ? 0 : selectedIndex + 1)
                break;
            default:
                break;
        }
    }

    const onMouseOverEvent = (e) => {
        if (suggestions[parseInt(e.target.id)]) setSelectedIndex(parseInt(e.target.id))
    }

    React.useEffect(() => {
        setSuggestions(inputState ? options.filter(c => c.name.toLowerCase().startsWith(inputState.toLowerCase())) : [])
    }, [inputState, options])

    return <div>
        <input type="text" value={inputState} onChange={updateInput} onKeyDown={selectFromSuggestions} />
        {showSuggestions &&
            <ul>
                {suggestions.map(({ name }, i) =>
                    <li key={i} id={i} onClick={() => selectCountry(i)} onMouseOver={onMouseOverEvent} className={selectedIndex === i ? 'active' : 'inactive'}>{name}</li>)}
            </ul>}
    </div>
}

export default AutoComplete;