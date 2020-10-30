import React from 'react';

import { Page,Banner,Card,FormLayout,TextField,DropZone, Button, ButtonGroup, Stack } from '@shopify/polaris';

class addDuration extends React.Component {

    constructor(props) {
      super(props);

      this.state = { 
            startDate: '',
            endDate: '',
            timeSlice: 0
       }

    }
    
    render() {
        
        return (
        <Page
            breadcrumbs={[{content: 'Select Products\n', url: '/GetStarted'}]}
            title="Add Variants"
            pagination={{
                hasPrevious: true,
                hasNext: true,
                label: "Step 3 of 5",
                }}
        >
        <Card sectioned title="Set Duration">
            <Banner title="When do you want to run your experiment?" status="info">
                <p>Most sellers generally see fruitful results in 30 days.</p>
            </Banner><br></br>

            <FormLayout> 
                        <TextField label="Start Date" type="date"
                                    value={this.state.startDate} 
                                    onChange={(message, type)=> {     
                                    this.setState({startDate: message});    
                                    }} /> 
                        <TextField label="End Date" type="date"
                                    value={this.state.endDate} 
                                    onChange={(message, type)=> {     
                                    this.setState({endDate: message});    
                                    }} /> 
            </FormLayout>   
        </Card>    

        <Card sectioned title="Set Experiment Slice">
            <Banner title="For how long each slice should run?" status="info">
                <p>Recommended: 1 hr</p>
            </Banner><br></br>

            <FormLayout> 
                <TextField label="Time Slice" type="number" suffix="hrs"
                            value={this.state.timeSlice} 
                            onChange={(message, type)=> {     
                            this.setState({timeSlice: message});    
                            }} /> 
                       
            </FormLayout>   
        </Card><br></br>
        
        <Stack alignment="center">         
                <Button size="large" url = "/addVariants">Go Back</Button>
                <Button size="large" url="/report"   primary submit>Submit</Button>    
        </Stack>

        </Page>
      )
    }
  }
  
export default addDuration;