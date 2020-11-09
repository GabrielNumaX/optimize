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
    PageActions,
    Banner,
    TextField,
} from '@shopify/polaris';

import { useState, useCallback } from 'react';
import { set } from 'js-cookie';

//redux persist in localStorage
import store from 'store-js';

const selectTitle = () => {

    // title
    const [title, setTitle] = useState('');
    const handleTitleChange = useCallback((newValue) => setTitle(newValue), []);

    // description
    const [description, setDescription] = useState('');
    const handleDescriptionChange = useCallback((newValue) => setDescription(newValue), []);

    // title and descriptions arrays

    const [titles, setTitles] = useState([])
    const [descriptions, setDescriptions] = useState([])

    const addTitle = () => {

        setTitles([...titles, title])
        setTitle('')

    }

    const addDescription = () => {

        setDescriptions([...descriptions, description]);
        setDescription('')
    }

    store.set('optimize-titles', titles)
    store.set('optimize-descriptions', descriptions)
    console.log(titles, descriptions);

    return ( 
        <Page
            breadcrumbs={[{content: 'Select Product', url: '/selectProduct'}]}
            title="Add Variants"    
            pagination={{
            hasPrevious: true,
            hasNext: true,
            previousURL: '/selectProduct',
            nextURL: '/configPrice',
            }}
        >

            <Card>
                <Card.Section>
                    <Banner
                        title="Writing awesome title"
                        // action={{content: 'Learn more'}}
                        status="info"
                        // onDismiss={() => {}}
                        >
                        <p>Short titles mentioning catchy verbs are more efficient.</p>
                    </Banner>
                </Card.Section>

                <Card.Section>
                    <TextField label="Product Title" value={title} onChange={handleTitleChange} />

                    <div
                        style={{
                            width: '100%',
                            height: '10px',
                        }}>
                    </div>

                    <Button plain size="large"
                    onClick={addTitle}>+ Add another</Button>

                    <div
                    style={{
                        width: '100%',
                        height: '40px',
                    }}>
                    </div>

                    <TextField label="Description" 
                                value={description} 
                                onChange={handleDescriptionChange} 
                                multiline={4}/>
                    
                    <div
                    style={{
                        width: '100%',
                        height: '10px',
                    }}>
                    </div>

                    <Button plain size="large"
                    onClick={addDescription}>+ Add another</Button>
                </Card.Section>

            </Card>

            <PageActions
                primaryAction={{
                    content: 'Save and add experiment with Pricing',
                    url: '/configPrice',
                    loading: false,
                    onAction: () => { }
                }}
            />
        </Page>
     );
}
 
export default selectTitle;