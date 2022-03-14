import React, { Component } from "react"
import  {Card, Button }  from 'react-bootstrap';

    type Props = {
        // using `interface` is also ok
        message: string;
    };
    interface State {
        Name: String;
        Initial: String;
        Region: String;
        State: String;
        RegionType: String;
        Type: String;
    };


    export default class UniversitiesItem extends Component<Props, State> {
        state: State = {
            // optional second annotation for better type inference
            Name: "ABEU - CENTRO UNIVERSITÁRIO",
            Initial: "UNIABEU",
            Region: "Sudeste",
            State: "RJ",
            RegionType: "Interior",
            Type: "Privada"
        };
        
        render() {
            return (
                <Card>
                        <Card.Header>
                        <Card.Title>
                                {this.props.message}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>

                            <Button variant="primary" style={{background: '#00DBAF', border: 0}}>Go somewhere</Button>
                            
                            
                        </Card.Body>
                    </Card>
            );
        }
    }