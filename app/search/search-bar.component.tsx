import * as React from "react";

interface SearchBarProps {
    onUserInput(value: string, checked: boolean): void;
    filterText: string;
    inStockOnly: boolean;
}


export const SearchBar: React.StatelessComponent<SearchBarProps> = (props) => {
    let filterTextInput: HTMLInputElement = null;
    let filterStockInput: HTMLInputElement = null;

    const _handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        props.onUserInput(filterTextInput.value, filterStockInput.checked)
    }
    
    return (
        <form>
            <input type="text"
                placeholder="Search..."
                value={props.filterText}
                onChange={_handleChange}
                ref={(input) => { filterTextInput = input; } }
                />
            <p>
                <input type="checkbox"
                    checked={props.inStockOnly}
                    onChange={_handleChange}
                    ref={(input) => { filterStockInput = input; } }
                    />
                {' '}
                Only show products in stock
                </p>
        </form>
    );

}
