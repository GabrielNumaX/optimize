import React, { Component } from 'react';

import { 
    Page, 
    Layout, 
    Button,
} from '@shopify/polaris';

import axios from 'axios'

//data persist in localStorage
import store from 'store-js';

// date format
import format  from 'date-fns/format'

import LayoutCombinations from './components/layoutCombinations';

// const review = () => {
class review extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            titles: [],
            descriptions: [],
            prices: [],
            dates: {},
            variants: [],
        }
    }

    componentDidMount() {

        // this handles localStorage
        const titles = store.get('optimize-titles');
        const descriptions = store.get('optimize-descriptions');
        const prices = store.get('optimize-prices');
        let dates = JSON.parse(localStorage.getItem('optimize-dates'));

        const startDate = new Date(dates.start);

        const endDate = new Date(dates.end);

        const parseDate = {
            start: format(startDate,'d MMM yyy'),
            end: format(endDate, 'd MMM yyyy')
        }

            this.setState({
                titles: titles,
                descriptions: descriptions,
                prices: prices,
                dates: parseDate,
            })

        // this handles layout combinations to state
        const variantsArr = [];
        
        titles.map(title => { 

            return descriptions.map(description => {

                return prices.map(price => {

                    const variantObj = {
                        title,
                        description,
                        price,
                    }

                    return variantsArr.push(variantObj);
                })
            })
        });

        this.setState({variants: [...variantsArr]});
    }

    renderLayouts = () => {    

        const layouts = this.state.variants.map((item, pos) => {

            return (
                    <LayoutCombinations key={pos} title={item.title} description={item.description}
                    price={item.price} startDate={this.state.dates.start}
                    endDate={this.state.dates.end} idToRemove={pos}
                    remove={() => this.removeVariant(pos)}/>
                )
        })

        return layouts;
    }


    // this is temporal -> POS must be changed to item.id
    removeVariant = (id) => {

        const prods = this.state.variants.filter((item, pos) => {

            if(pos === id) {
                return false;
            }

            return true;
        })

        store.set('optimize-prods', prods);

        this.setState({variants: [...prods]});
    }

    submitVariant = ('http://localhost:3000/v1/optimize') => {

        axios.post()

        console.log(this.state.variants)
    }

    render() {

        console.log(this.state);

        return ( 
            <Page
                breadcrumbs={[{content: 'Select Product', url: '/selectProduct'}]}
                title="Review"    
            >
                {this.renderLayouts()}

                <div
                    style={{
                        width: '100%',
                        height: '30px',
                    }}>
                </div>

                <div style={{
                        width: '100%',
                        padding: '0 20%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                }}>
                    <Layout sectioned>
                        <Layout.Section>
                            <Button primary fullWidth={true} onClick={this.submitVariant}>Submit Variants</Button>
                        </Layout.Section>
                        <Layout.Section>
                            <Button destructive fullWidth={true}>Blacklist This</Button>
                        </Layout.Section>
                    </Layout>
                </div>

            </Page>
        )
    }   
}

export default review;
