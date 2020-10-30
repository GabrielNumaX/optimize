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
    VideoThumbnail
} from '@shopify/polaris';


const review = () => {

    return ( 
        <Page
            breadcrumbs={[{content: 'Select Product', url: '/selectProduct'}]}
            title="Review"    
        >

            <Card>

                <Card.Section>

                    <TextField label="Product Title" value={'value from backend'} readOnly={true} />

                    <div
                    style={{
                        width: '100%',
                        height: '40px',
                    }}>
                    </div>

                    <TextField label="Description" 
                                value={'value from backend'} 
                                readOnly={true}
                                multiline={4}/>

                    <div
                    style={{
                        width: '100%',
                        height: '10px',
                    }}>
                    </div>
                </Card.Section>
            </Card>

            <Card>
                <Card.Section>
                    <TextField 
                        label="Start Date" 
                        value={'date from backend'} 
                        readOnly={true} />

                    <div
                        style={{
                            width: '100%',
                            height: '10px',
                        }}>
                    </div>

                    <TextField 
                        label="End Date" 
                        value={'date from backend'} 
                        readOnly={true} />

                    <div
                        style={{
                            width: '100%',
                            height: '70px',
                        }}>
                    </div>

                    <MediaCard
                        portrait
                        title="Black T-Shirt"
                        primaryAction={{
                            content: 'Learn more',
                            onAction: () => {},
                        }}
                        // description="In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business."
                        // popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
                        >
                        {/* <VideoThumbnail
                            // videoLength={80}
                            thumbnailUrl="https://image.freepik.com/psd-gratis/maqueta-camisetas-negras-parte-delantera-trasera-utilizadas-como-plantilla-diseno_34168-864.jpg"
                        /> */}
                        <img
                            alt="product" 
                            width="100%" 
                            height="100%" 
                            style={{
                            objectFit: 'cover',
                            objectPosition: 'center'
                            }} 
                            src='https://image.freepik.com/psd-gratis/maqueta-camisetas-negras-parte-delantera-trasera-utilizadas-como-plantilla-diseno_34168-864.jpg'
                        ></img>
                    </MediaCard>
                </Card.Section>
            </Card>

            <div
                style={{
                    width: '100%',
                    height: '30px',
                }}>
            </div>

            {/* <Stack distribution="center" spacing="extraLoose">
                <Button primary>Reviewing Variant</Button>
                <Button destructive>Blacklist This</Button>
            </Stack> */}

            <div style={{
                    width: '100%',
                    padding: '0 20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
            }}>
                <Layout sectioned>
                    <Layout.Section>
                        <Button primary fullWidth={true}>Reviewing 1 of 1 variant</Button>
                    </Layout.Section>
                    <Layout.Section>
                        <Button destructive fullWidth={true}>Blacklist This</Button>
                    </Layout.Section>
                </Layout>
            </div>

        </Page>
    )
}

export default review;