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
    DatePicker,
} from '@shopify/polaris';

import { useState, useCallback } from 'react';

//data persist in localStorage
import store from 'store-js';

const configTime = () => {

    // const [startDate, setStartDate] = useState('');

    // const handleStartDateChange = useCallback((newValue) => setStartDate(newValue), []);

    // const [endDate, setEndDate] = useState('');

    // const handleEndDateChange = useCallback((newValue) => setEndDate(newValue), []);

    const calendar = new Date()

    const [{month, year}, setDate] = useState({month: calendar.getMonth(), year: calendar.getFullYear()});
    const [selectedDates, setSelectedDates] = useState({
      start: calendar,
      end: calendar,
    });
  
    const handleMonthChange = useCallback(
      (month, year) => setDate({month, year}),
      [],
    );

    console.log(selectedDates);

    store.set('optimize-dates', selectedDates);

    return ( 
        <Page
            breadcrumbs={[{content: 'Select Product', url: '/selectProduct'}]}
            title="Add Variants"    
            pagination={{
            hasPrevious: true,
            hasNext: true,
            previousURL: '/configPrice',
            nextURL: '/review',
            }}
        >

            <Card>
                <Card.Section>

                    <Heading>Set Duration</Heading>

                    <div style={{
                        width: '100%',
                        height: '30px',
                    }}>

                    </div>

                    <Banner
                        title="When do you want to run your experiment?"
                        // action={{content: 'Learn more'}}
                        status="info"
                        // onDismiss={() => {}}
                        >
                        <p>Most sellers generally see fruitful results in 30 days.</p>
                    </Banner>
                </Card.Section>

                <Card.Section>

                    <div style={{
                        width: '100%',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',   
                    }}>
                        <div style={{
                                width: '50%',
                                display: 'flex',
                                justifyContent: 'center'}}>
                            <Heading>Start Date</Heading>
                        </div>
                        <div style={{
                                width: '50%',
                                display: 'flex',
                                justifyContent: 'center',}}>
                            <Heading>End Date</Heading>
                        </div>
                        
                    </div>

                    <DatePicker
                        month={month}
                        year={year}
                        onChange={setSelectedDates}
                        onMonthChange={handleMonthChange}
                        selected={selectedDates}
                        multiMonth
                        allowRange
                    />
                </Card.Section>

            </Card>

            <PageActions
                primaryAction={{
                    content: 'Review',
                    url: '/review',
                    loading: false,
                    onAction: () => { }
                }}
                secondaryActions={[
                    {
                      content: 'Go Back',
                      url: '/configPrice',
                    },
                  ]}
            />
        </Page>
     );
}
 
export default configTime;