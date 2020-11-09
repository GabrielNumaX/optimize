import React from 'react';
import { 
    Card,
    MediaCard,
    TextField,
} from '@shopify/polaris';


const layoutCombinations = (props) => {

    return(
        <Card>

        <Card.Section>

            <TextField label="Product Title" value={props.title} readOnly={true} />

            <div
            style={{
                width: '100%',
                height: '20px',
            }}>
            </div>

            <TextField label="Description" 
                        value={props.description} 
                        readOnly={true}
                        multiline={4}/>

            <div
            style={{
                width: '100%',
                height: '10px',
            }}>
            </div>

            <TextField 
                label="Price" 
                value={props.price} 
                prefix= '$'
                readOnly={true}
                />

            <div
                style={{
                    width: '100%',
                    height: '10px',
                }}>
            </div>
            <TextField 
                label="Start Date" 
                value={props.startDate} 
                readOnly={true} />

            <div
                style={{
                    width: '100%',
                    height: '10px',
                }}>
            </div>

            <TextField 
                label="End Date" 
                value={props.endDate} 
                readOnly={true} />

            <div
                style={{
                    width: '100%',
                    height: '10px',
                }}>
            </div>
        </Card.Section>

        <Card.Section>
            <MediaCard
                portrait
                title="Black T-Shirt"
                primaryAction={{
                    content: 'Remove Variant',
                    onAction: () => {props.remove(props.idToRemove)},
                }}>
            
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
    )
}

export default layoutCombinations;