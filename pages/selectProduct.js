import React from 'react';

import { 
    Page, 
    Card,
    Layout, 
    Stack,
    Heading,
    Button,
    Badge,
    TextContainer,
    TextStyle,
    ButtonGroup,
    Autocomplete,
    Icon,
    MediaCard,
    Thumbnail,
} from '@shopify/polaris';

import { SearchMinor } from '@shopify/polaris-icons';

import { useState, useCallback } from 'react';

//redux persist in localStorage
import store from 'store-js';


// class selectProduct extends React.Component {
const selectProduct = () => {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         show: false,
    //     }
    // }

    const deselectedOptions = [{ value: 'rustic', label: 'Rustic' }, 
                                { value: 'antique', label: 'Antique' }, 
                                { value: 'vinyl', label: 'Vinyl' }, 
                                { value: 'vintage', label: 'Vintage' }, 
                                { value: 'refurbished', label: 'Refurbished' }
                            ];
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState(deselectedOptions);

    const updateText = useCallback(value => {
        setInputValue(value);

        if (value === '') {
        setOptions(deselectedOptions);
        return;
        }

        const filterRegex = new RegExp(value, 'i');
        const resultOptions = deselectedOptions.filter(option => option.label.match(filterRegex));
        setOptions(resultOptions);
    }, [deselectedOptions]);

    const updateSelection = useCallback(selected => {
        const selectedValue = selected.map(selectedItem => {
        const matchedOption = options.find(option => {
            return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
        });

        setSelectedOptions(selected);
        setInputValue(selectedValue);
    }, []);

  const textField = <Autocomplete.TextField 
                        onChange={updateText} 
                        // label="Tags" 
                        value={inputValue} 
                        prefix={
                            <Icon source={SearchMinor} 
                            color="inkLighter" />
                            } 
                        placeholder="Start typing to search..." />;

// render() {
    return(
        <Page
            breadcrumbs={[{content: 'Start New Test', url: '/onBoarding'}]}
            title="Select a Product"    
            pagination={{
            hasPrevious: true,
            hasNext: true,
            previousURL: '/onBoarding',
            nextURL: '/selectTitle',
            }}
        >
            <Card>
                
                <Card.Section>
                    <Heading>All</Heading>
                </Card.Section>

                <Card.Section>
                    <ButtonGroup>               
                        <Button disclosure="down">Filter</Button>

                        <Autocomplete
                            options={options}
                            selected={selectedOptions}
                            onSelect={updateSelection}
                            textField={textField}                        
                        ></Autocomplete>
                    </ButtonGroup>
                </Card.Section>
                <Card.Section>
                    <Heading>Product</Heading>
                </Card.Section>

                {/* dynamic rendering */}

                <Card.Section>
                    <MediaCard title="Black T-Shirt" 
                        primaryAction={{
                            content: 'Add Variant',
                            onAction: () => {},  
                            url: '/selectTitle'
                        }} 
                        description="1600 impressions" 
                        popoverActions={[{ content: 'Dismiss', onAction: () => {} }]} 
                        size="small">

                        <img alt="product" 
                            width="100%" 
                            height="100%" 
                            style={{
                            objectFit: 'cover',
                            objectPosition: 'center'
                            }} 
                            src="https://image.freepik.com/psd-gratis/maqueta-camisetas-negras-parte-delantera-trasera-utilizadas-como-plantilla-diseno_34168-864.jpg" />
                    </MediaCard>
                </Card.Section>

                {/* <Card.Section>
                    <ButtonGroup fullWidth={true} spacing="loose">
                        
                        <Thumbnail source="https://image.freepik.com/psd-gratis/maqueta-camisetas-negras-parte-delantera-trasera-utilizadas-como-plantilla-diseno_34168-864.jpg" 
                                    alt="Black T-Shirt" 
                                    size="large" />

                        <TextContainer>
                            <Heading>Black Choker</Heading>
                            <p>1600 impressions</p>
                        </TextContainer>

                        <Button>Add Product</Button>
                    </ButtonGroup>
                </Card.Section> */}
            </Card>
  
            
        </Page>
    )
// }
}

export default selectProduct;