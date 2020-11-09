import React, { useEffect } from 'react';

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
    PageActions,
    Banner,
    TextField,
} from '@shopify/polaris';

//redux persist in localStorage
import store from 'store-js';

import { useState, useCallback } from 'react';

const configPrice = () => {

    const [price, setPrice] = useState();
    const handlePriceChange = useCallback((newValue) => setPrice(newValue), []);

    const [prices, setPrices] = useState([]);

    const addPrices = () => {

        setPrices([...prices, price]);
        setPrice()
    }

    store.set('optimize-prices', prices)

    console.log(prices);
    return ( 
        <Page
            breadcrumbs={[{content: 'Select Product', url: '/selectProduct'}]}
            title="Add Variants"    
            pagination={{
            hasPrevious: true,
            hasNext: true,
            previousURL: '/selectTitle',
            nextURL: '/configTime',
            }}
        >

            <Card>
                <Card.Section>

                    <Heading>Pricing</Heading>

                    <div style={{
                        width: '100%',
                        height: '30px',
                    }}>

                    </div>

                    <Banner
                        title="The Price is Right"
                        // action={{content: 'Learn more'}}
                        status="info"
                        // onDismiss={() => {}}
                        >
                        <p>Products with prices ending in 9 are more likely to be bought.</p>
                    </Banner>
                </Card.Section>

                <Card.Section>
                    <TextField 
                        label="Price" 
                        value={price} 
                        onChange={handlePriceChange}
                        prefix= '$'
                        type= 'number' />

                    <div
                        style={{
                            width: '100%',
                            height: '10px',
                        }}>
                    </div>

                    <Button plain size="large" 
                    onClick={addPrices}>+ Add another</Button>

                    <div
                    style={{
                        width: '100%',
                        height: '10px',
                    }}>
                    </div>

                </Card.Section>

            </Card>

            {/* <div style={{
                padding: '20px 40px'
            }}>

                <ButtonGroup spacing="loose" fullWidth={true}>
                    <Button>Go Back</Button>
                    <Button primary>Submit</Button>
                </ButtonGroup>

            </div> */}

           

            <PageActions
                primaryAction={{
                    content: 'Select Date',
                    url: '/configTime',
                    loading: false,
                    onAction: () => { }
                }}
                secondaryActions={[
                    {
                      content: 'Go Back',
                      url: '/selectTitle',
                    },
                  ]}
            />
        </Page>
     );
}
 
export default configPrice;