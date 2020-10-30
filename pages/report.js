import React from 'react';

import { Page,Card,DataTable,Thumbnail, Link, Button,Pagination } from '@shopify/polaris';

class report extends React.Component {

    constructor(props) {
      super(props);

      this.state = { 
            startDate: '',
            endDate: '',
            timeSlice: 0
       }

    }
    
    render() {
        
        
        const rows = [
            ['1',  
                   [ 
                        <Thumbnail
                            source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                            alt="Black choker necklace"
                        />, 
                        <Link>Black Necklace</Link> ], 
                        [13718,<br></br> ,' ('+ 15.51 + '%)'] , [6641,<br></br> ,' ('+ 8.67 + '%)'], [5667,<br></br> ,' ('+ 6.28 + '%)'], [3221,<br></br> ,' ('+ 4.87 + '%)'],
                        <Button primary>Select as Winner</Button>
                    ],

            ['2',  
                   [   
                        <Thumbnail
                            source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                            alt="Black choker necklace"
                        />, 
                        <Link>Pearl Necklace</Link> ], 
                        [1318,<br></br> ,' (' + 1.51 + '%)'] , [8641,<br></br> ,' ('+ 68.67 + '%)'], [567,<br></br> ,' ('+ 3.28 + '%)'], [3881,<br></br> ,' ('+ 6.77 + '%)'], 
                        <Button primary>Select as Winner</Button>
                    ],

          ];

        return (
        <Page breadcrumbs={[{content: 'View Report', url: ''}]} title="Black Leather Necklace">
            <Card title="Product Variants (Layout Combinations)"><br></br>
               
                <DataTable
                    columnContentTypes={[
                        'text',
                        'text',
                        'numeric',
                        'numeric',
                        'numeric',
                        'numeric',
                    ]}
                    headings={[
                        'Variant',
                        'Product',
                        <b>Impressions</b>,
                        <b>Added to Cart</b>,
                        <b>Reached Checkout</b>,
                        <b>Purchased</b>,
                    ]}
                    rows={rows}
                    
                    />
                <div style={{float:'right'}}>   
                <Card.Section>
                    
                        <Pagination
                        hasNext
                        nextURL='/allExperiments'
                        />

                </Card.Section>
                </div>
            </Card>

            
        </Page>
      )
    }
  }
  
export default report;