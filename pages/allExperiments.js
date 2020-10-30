import React from 'react';

import { Page,Card,DataTable,Thumbnail, Link, Button, Tabs, Badge } from '@shopify/polaris';

class allExperiments extends React.Component {

    constructor(props) {
      super(props);

      this.state = { 
            tabs:  [{
                        id: 'all-experiments',
                        content: 'Current',
                        accessibilityLabel: 'All experiments',
                        panelID: 'all-experiments-content',
                    }],
            rows: [
                [<Link>Red Hood</Link>, 'Jan 2, 2020', 'Jan 12, 2020', '1 hr', <Badge status="attention">Ongoing</Badge>],
                [<Link>Black Shoe</Link>, 'Jan 13, 2020', 'Jan 29, 2020', '2 hrs', <Badge status="attention">Scheduled</Badge>]

            ]        
    }

    }
    
    render() {
        
        
        
        return (
        <Page 
            title="All Experiments"
            primaryAction={{content: 'Create new Experiment', url: '/GetStarted'}}
        ><br></br>
            <Card>
                <Tabs tabs={this.state.tabs} selected={0} >
                    <br></br><br></br>
                    <DataTable
                        columnContentTypes={[
                            'text',
                            'text',
                            'text',
                            'text',
                            'text',
                        ]}
                        headings={[
                            'Experiment',
                            'Start Date',
                            'End Date',
                            'Time Slice',
                            'Status'
                        ]}

                        rows={this.state.rows}
                        
                    />
                </Tabs>


            </Card>


       
        </Page>
      )
    }
  }
  
export default allExperiments;