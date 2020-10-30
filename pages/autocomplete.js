import React from 'react';

import { Autocomplete } from '@shopify/polaris';
import {useState, useCallback} from 'react';

const AutocompleteExample = (props) => {
    
    console.log("props.val ", props.val)
    var deselectedOptions = [];
    var selectedProducts = [];
    var media = props.val.map(function(item, index){
      deselectedOptions.push({value: String(item.title), label: String(item.title)});
      selectedProducts.push({id: item.id, title: String(item.title), image: item.image, body_html: item.body_html});
      //console.log("SS11: ", selectedProducts)
      return(
        <div key = {item.id}>
        </div>
      )
      })
    //console.log("d.title: ", deselectedOptions.value) {Doesn't work, use map}
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState(deselectedOptions);
    const updateText = useCallback(
      (value) => {
        setInputValue(value);
        if (value === '') {
          setOptions(deselectedOptions);
          props.filterProductList([], 'Empty');
          return;
        }
        const filterRegex = new RegExp(value, 'i');
        const resultOptions = deselectedOptions.filter((option) =>
          option.label.match(filterRegex),
        );

        const filteredProducts = selectedProducts.filter((option) =>
          option.title.match(filterRegex),
        );
        //console.log("Filtered Products: ",filteredProducts)
        props.filterProductList(filteredProducts,'')
        setOptions(resultOptions);
      },
      [deselectedOptions],
    );
    const updateSelection = useCallback((selected) => {
      const selectedValue = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });
      setSelectedOptions(selected);
      const filterRegex = new RegExp(String(selected), 'i');
      const finalProduct = selectedProducts.filter((option) =>
          option.title.match(filterRegex),
      );
      props.filterProductList(finalProduct,'')  
      setInputValue(selectedValue);
    }, [selectedProducts]);
    const textField = (
      <Autocomplete.TextField
        onChange={updateText}
        label="Search"
        value={inputValue}
        //prefix={<Icon source={SearchMinor} color="inkLighter" />} 
        placeholder="Start Typing to search.."
      />
    );
    return (
      <div style={{height: '75px'}}>
        <Autocomplete
          options={options}
          selected={selectedOptions}
          onSelect={updateSelection}
          textField={textField}
        />
      </div>
    );
  }
export default AutocompleteExample;  