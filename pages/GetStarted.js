import React from 'react';

import { Card,Page,Tabs,ResourceList,ResourceItem, TextStyle,Thumbnail,Link } from '@shopify/polaris';
import SearchBox from "./autocomplete"

class GetStarted extends React.Component {

    constructor(props) {
      super(props);
      this.mytab = [
        {
          id: 'all-products',
          content: 'All',
          accessibilityLabel: 'All products',
          panelID: 'all-products-content',
        }
      ];

      this.state = {
        selected : 0,
        products : [],
        filtered_products : []
      }
    }
    
    componentDidMount() {
      console.log("MOUNTED")
      var fetchUrl = "/api/products";
      var method = "GET";
      fetch(fetchUrl, { method: method })
      .then(response => response.json())
      .then(json => this.setState({
        products : json.data.products, 
        filtered_products : json.data.products
      })
    )}
    
    changeProductList = (products, message) => {
      console.log("YOY: ",products.length)
      console.log("121:  ", products)
      if(!(message.length === 0)){
        this.setState({filtered_products : this.state.products})
      }else{
        this.setState({filtered_products : products})
      }
    }

    render() {
       
      console.log("Products: ", (this.state.products))
      //const {navigate} = this.props.navigation;
      return (
        <Page title="Select a product">
        <Card>
          <Tabs tabs={this.mytab} selected={this.state.selected}> 
          <Card.Section>
            <SearchBox val={this.state.products} filterProductList={this.changeProductList}/><br></br>
            <TextStyle variation="strong">Product</TextStyle><br></br><br></br>
              <ResourceList
                resourceName={{singular: 'customer', plural: 'customers'}}
                items={ this.state.filtered_products }
                renderItem={(item) => {
                  const {id,title, image, body_html} = item;
                  console.log("FF:  ", this.state.filtered_products)
                  console.log("Imaggg:  ", image)
                  console.log("ITITITTI:  ", item.image.src)
                  console.log("BODDOD:  ", body_html);
                  // const media = item.images.map(function(source, index){
                  // return(
                  //   <div key = {source.id}>
                  //   <img src= {String(source.src)} alt={String(source.id)} width = "40" height = "40"/>
                  //   </div>
                  // )
                  // })    
                  const media =  <Thumbnail source= {image.src} alt= {String(image.id)} />;
                  console.log("Helloo:  ", this.state.filtered_products);     
                  return (
                    <ResourceItem id={id} title={title} media={media}  url = "./addVariants">
                      {/* <Link
                          to={{
                            pathname: "/addVariants",
                            data: this.state.filtered_products // your data array of objects
                          }}
                        /> */}
                      <div>{title}</div>
                    </ResourceItem>
                  );
                }}
              />
          </Card.Section>   
          </Tabs>
        </Card>
      </Page>
        )
    }
  }
  
export default GetStarted;