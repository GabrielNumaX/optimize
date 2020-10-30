import React from 'react';

import { Page,Banner,Card,FormLayout,TextField,DropZone, Button, ButtonGroup, Stack, Thumbnail, Caption } from '@shopify/polaris';

// {productTitle : 'Sample Product Title', productDescription: 'Sample Product Description', imageURL: '', editable: true}
class addVariants extends React.Component {

    constructor(props) {
      super(props);

      this.state = { 
        Title : '',
        Description: '',
        img: [],
        url: '',
        validImageTypes : ['image/gif', 'image/jpeg', 'image/png'],
        errTitle: '',
        errDescription: '',
        myObj: [],
        submitUrl: '',
        flag: false
       }

    }
    
    handleTitle(message, type){
        this.setState({ Title: message, errTitle: ''})
    }

    handleDesc(message, type){
        this.setState({ Description: message, errDescription: ''})  
    }

    render() {

        var image = this.state.flag && ( <Thumbnail size="large" alt="img" source={ this.state.url } /> );
        
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
            <Banner title="Writing awesome titles" status="info">
                <p>Short titles mentioning using catchy verbs are more efficient.</p>
            </Banner><br></br>
            <div>{
        
                this.state.myObj.map((source, index) => {
                
                return(
                    <div key = {source.id}> 
                    <Card sectioned>     
                    <FormLayout> 
                        <TextField label="Product Title" type="text" 
                                    value={source.productTitle} 
                                    onChange={(message, type)=> {
                                        this.state.myObj[index].productTitle = message;
                                        this.setState({})
                                        console.log("11: ", this.state.myObj);
                                    }} 
                                     disabled={source.editable}/> 
                        <TextField label="Description"  type="text" 
                                    value={source.productDescription} 
                                    onChange={(message, type)=> {
                                        this.state.myObj[index].productDescription = message;
                                        this.setState({})
                                        console.log("22:  ", this.state.myObj);
                                    }} 
                                    multiline={2} disabled={source.editable} /> 
                    </FormLayout>   
                    <br></br>
                    <p><b>Images</b></p>
                     <br></br>
                     <Stack>
                        <Thumbnail size="large" alt="img"
                            source={ this.state.myObj[index].imageURL }                               
                        />
                        <div style={{width: 114, height: 114}}>        
                            { !(this.state.myObj[index].editable) && ( <DropZone 
                                onDropAccepted={(myimg1)=>{  
                                            
                                    this.state.myObj[index].imageURL = global.window.URL.createObjectURL(new File(myimg1, {type: this.state.validImageTypes }));
                                    this.setState({});
                                }}> <DropZone.FileUpload /> </DropZone> ) }
                        </div>
                        </Stack>
                        <div style={{float:'right'}}>
                        <ButtonGroup>

                        <Button plain 
                            onClick={() =>{
                                this.state.myObj[index].editable = true;
                                this.setState({})
                            }} 
                            disabled={source.editable}>Save
                        </Button>
                        
                        <Button plain onClick={() =>{
                           this.state.myObj[index].editable = false;
                           this.setState({})  
                        }}>Edit</Button>

                        <Button plain onClick={() =>{
                            this.state.myObj.splice(this.state.myObj.indexOf(source.productTitle), 1);
                            this.setState({})
                            if( !(this.state.myObj && this.state.myObj.length) ){
                                this.setState({submitUrl: ''});
                            }
                            console.log("Hola: ", this.state.myObj) // object deleted from array but showing in frontend
                        }}>Delete</Button>
                        </ButtonGroup></div>
                        </Card>     
                    <br></br>  
                </div>
                )        
            })

            }</div>
            <Card sectioned>     
            <FormLayout> 
                <TextField label="Product Title" type="text" 
                            value = {this.state.Title}    align="left" 
                            onChange={this.handleTitle.bind(this)}
                            error={this.state.errTitle} /> 
                <TextField label="Description"  type="text" 
                            value = {this.state.Description} 
                            onChange={this.handleDesc.bind(this)}
                            multiline={2}
                            error={this.state.errDescription} /> 
            </FormLayout>   
            <br></br>
                <p><b>Images</b></p>
                    <br></br>

                    <Stack>
                    
                    {image}
                    <div style={{width: 114, height: 114}}>

                        <DropZone 
                            onDropAccepted={(myimg)=>{
                                this.state.img.push(myimg);
                                this.setState({flag: true});
                                this.setState({url: global.window.URL.createObjectURL(new File(myimg, {type: this.state.validImageTypes })) })
                                console.log("Beff:  ", myimg);
                                console.log("HuRR: ", this.state.img[0]);
                            }}>
                                <DropZone.FileUpload />
                        </DropZone> 
                    </div> </Stack></Card>
                <br></br>
            <Button plain 
                onClick = {() => {

                    if(!this.state.Title){
                        this.setState({errTitle: 'Required Value'})
                    }else if(!this.state.Description){
                        this.setState({errDescription: 'Required Value'})
                    }else{
                        this.state.myObj.push({productTitle: this.state.Title, productDescription: this.state.Description, imageURL: this.state.url, editable: true})   
                        this.setState({Title: '', Description: '', submitUrl: '/addDuration'});
                    }
                    this.setState({})
                    console.log("This is Something: ", this.state.myObj)
                }}
            >+ Add another<br></br><br></br><br></br></Button>
            
            <Stack alignment="center">
                <Button size="large" url="/GetStarted">Go Back</Button>
                <Button size="large" onClick = {()=> {
                    if(!this.state.submitUrl){
                        alert("Please add a variant");
                    }
                }} url={this.state.submitUrl} primary submit>Submit</Button>
            </Stack>
        </Page>    
      )
    }
  } 
export default addVariants;