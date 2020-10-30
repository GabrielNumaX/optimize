import React from 'react';

import { Card,Page,Heading,Button } from '@shopify/polaris';


class Index extends React.Component {

  render() {
    return (
      <Page>
        <Card>
          <div align="center">  
            <img src="https://drive.google.com/uc?id=11tjLQ2AVQNXA4ECj1Vf4J3c8hVCVcF9_" alt="Welcome Image" width="350" height="160"></img><br></br>
            <Heading>Welcome to OptimizeXP</Heading><br></br>
            <p> <font size = "3">Because you should only define your catalog once </font></p>
            <p><font size = "3"> Use OptimizeXP to Improve Content Engagement, Reduce Card Abandonments, Increase Sales </font></p><br></br>
            {/* <Button  url="/allExperiments" >Start new Test<br></br></Button>       */}
            <Button  url="/onBoarding">Start new Test<br></br></Button>
          </div>
        </Card>
      </Page>
    );
  }
}

export default Index;











