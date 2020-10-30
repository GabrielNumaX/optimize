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
    } from '@shopify/polaris';


class onBoarding extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }
    }

    render() {
        return(
            <Page>
                <Card>
                    <div align="center">  
                        <img src="https://drive.google.com/uc?id=11tjLQ2AVQNXA4ECj1Vf4J3c8hVCVcF9_" alt="Welcome Image" width="350" height="160"></img><br></br>
                        <Heading>Welcome to OptimizeXP</Heading><br></br>
                        <p> <font size = "3">Because you should only define your catalog once </font></p>
                        <p><font size = "3"> Use OptimizeXP to Improve Content Engagement, Reduce Card Abandonments, Increase Sales </font></p><br></br>
                        <Button  url="/allExperiments" >Start new Test<br></br></Button>      
                    </div>
                </Card>

                <div style={{height: '20px', width: '100%'}}>

                </div>

                <Layout sectioned={false}>

                    {/* Heading */}

                    <Layout.Section>
                        {/* <div style={{height: '50px', 
                                    backgroundColor: '#F8FAFB',
                                    display: 'flex',
                                    alignItems: 'center'}}>
                            <TextContainer>
                                <p>Let's Get Started</p>
                            </TextContainer>
                        </div>          */}
                        {/* <TextStyle variation="strong">Let's Get Started</TextStyle> */}
                        <TextContainer>
                            <Heading>Let's Get Started</Heading>
                        </TextContainer>
                    </Layout.Section>

                    {/* step 01*/}

                    <Layout.Section>
                        <Card sectioned={true}>
                            <Card.Section>
                                <button style={{backgroundColor: '#81C853', 
                                                color: '#FFF',
                                                border: 'none',
                                                padding: '8px 24px',
                                                borderRadius: '20px'}}>
                                    Step 1
                                </button>
                            </Card.Section>

                            <Card.Section>
                                    <Heading>Connect your Shopify Store</Heading>
                                    <p>
                                        In order to improve your conversions, you first need
                                        to select a product.
                                    </p>
                            </Card.Section>
                        </Card>
                    </Layout.Section>

                    {/* step 02 */}

                    <Layout.Section>
                        <Card sectioned={true}>
                            <Card.Section>
                                <button style={{backgroundColor: '#28B7D7', 
                                                color: '#FFF',
                                                border: 'none',
                                                padding: '8px 24px',
                                                borderRadius: '20px'}}>
                                    Step 2
                                </button>
                            </Card.Section>

                            <Card.Section>

                                <Heading>
                                    Select a Product
                                </Heading>

                                <p>In order to improve your conversions you first need to 
                                    select a product.
                                </p>
                            </Card.Section>

                            <Card.Section>
                                {/* <button style={{
                                    backgroundColor: '#28B7D7',
                                    color: '#FFF',
                                    border: 'none',
                                    borderRadius: '5px',
                                    fontSize: '18px',
                                    padding: '8px 20px'
                                }}
                               >
                                   Select a Product
                                </button> */}

                                <Button url="/selectProduct" size="large">Select Product</Button>
                            </Card.Section>
                        </Card>
                    </Layout.Section>

                    {/* step 03 */}

                    <Layout.Section>
                        <Card sectioned={true}>
                            <Card.Section>
                                <button style={{backgroundColor: '#28B7D7', 
                                                color: '#FFF',
                                                border: 'none',
                                                padding: '8px 24px',
                                                borderRadius: '20px'}}>
                                    Step 3
                                </button>
                            </Card.Section>
                            <Card.Section>

                                <Heading>
                                    Add Variants
                                </Heading>

                                <p>Add *any* number of title/description, and other fields
                                    that you want to test. Use the OptimeXP tips effectively
                                    to make your title and description stand out of competition.
                                </p>
                            </Card.Section>
                        </Card>
                    </Layout.Section>

                    {/* step 04 */}

                    <Layout.Section>
                        <Card sectioned={true}>
                            <Card.Section>

                                <button style={{backgroundColor: '#28B7D7', 
                                                color: '#FFF',
                                                border: 'none',
                                                padding: '8px 24px',
                                                borderRadius: '20px'}}>
                                    Step 4
                                </button>
                            </Card.Section>

                            <Card.Section>
                                <Heading>
                                    Select Time
                                </Heading>

                                <p>Select when you want your experiment to start.
                                    Most sellers use the default time here.
                                </p>
                            </Card.Section>
                        </Card>
                    </Layout.Section>

                    {/* step 05 */}

                    <Layout.Section>
                        <Card sectioned={true}>
                            <Card.Section>

                                <button style={{backgroundColor: '#28B7D7', 
                                                color: '#FFF',
                                                border: 'none',
                                                padding: '8px 24px',
                                                borderRadius: '20px'}}>
                                    Step 5
                                </button>
                            </Card.Section>

                            <Card.Section>
                                <Heading>
                                    Go Live
                                </Heading>

                                <p>Review Combinations, sit back, and let our
                                    algorithms take over.
                                </p>
                            </Card.Section>
                        </Card>
                    </Layout.Section>
                </Layout>
            </Page>
        )
    }
}

export default onBoarding;