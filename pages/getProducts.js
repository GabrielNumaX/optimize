import React from 'react';
import { useState } from 'react';


import {
    Page,
    Card,
    Heading,
    Button,
    Spinner,
    Stack,
    Banner,
    Toast,
    Frame,

} from '@shopify/polaris';

const GetProducts = () => {

    const [showLoad, setShowLoad] = useState(true);
    const [products, setProducts] = useState([]);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [toastOk, setToastOk] = useState(false);
    const [toastWrong, setToastWrong] = useState(false);

    const onSuccess = () => {

        setShowLoad(false);
        setSuccess(true);
        setToastOk(true)
    }

    const onError = () => {


        setShowLoad(false);
        setError(true);
        setToastWrong(true);

        // this is just to show functionality
        setSuccess(false);
    }

    return(

        <Page>
        <Frame>
            <Card>
                <div align="center">
                    <img src="https://drive.google.com/uc?id=11tjLQ2AVQNXA4ECj1Vf4J3c8hVCVcF9_" alt="Welcome Image" width="350" height="160"></img><br></br>
                    <Heading>Synchronize Products</Heading><br></br>
                    <p> <font size="3">Because you should only define your catalog once </font></p>
                    <p><font size="3"> Use OptimizeXP to Improve Content Engagement, Reduce Card Abandonments, Increase Sales </font></p><br></br>
                </div>
            </Card>
            <div style={{height: '10px'}}>

            </div>

           { showLoad ? 
            <Banner
                    title="We are Synchronizing your Store"
                    status="info"
                >
                    <p>Please wait, this may take a few minutes.</p>
                </Banner>
            : 
            null
            }

            {success ? 
                <Banner
                    title="All done, press the button to select a product and
                        add Variants."
                    status="success"
                    action={{ content: 'Add Variant', url:'/onBoarding' }}
                />
                :
                null
            }

            {
                error ? 
                <Banner title="Something went Wrong" 
                    action={{ content: 'Try Again', url:'/getProducts' }} 
                    status="critical"
                    >
                </Banner>
                :
                null
            }

            <div style={{height: '10px'}}>

            </div>


            {
                showLoad ?
                <Stack distribution="center" alignment="center">
                    <Spinner accessibilityLabel="Spinner example" size="large" color="teal" />
                </Stack>
                :
                null
            }

            <div style={{height: '10px'}}>

            </div>
            

            <Card>
                <Button onClick={onSuccess}>Done</Button>
                <Button onClick={onError}>Error</Button>
            </Card> 
            { toastOk ?
                <Toast content="Synchronize success" onDismiss={() => setToastOk(false)}></Toast>
                :
                null
            }
            {
                toastWrong ?
                    <Toast content="Server error" error onDismiss={() => setToastWrong(false)} />
                    :
                    null
            }
        
        </Frame>
        </Page>
    )
}

export default GetProducts;
