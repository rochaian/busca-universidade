import React, { Component } from "react"
import  {Card, Button }  from 'react-bootstrap';
import store from '../../store/store.json';
import UniversityItem from '../UniversityItem';


    type Props = {
        // using `interface` is also ok
        message: string;
    };
    interface State {
        count: number; // like this
    };


    export default class UniversitiesList extends Component<Props, State> {
        state: State = {
            // optional second annotation for better type inference
            count: 0,
        };

        componentDidMount(){
            const resposta = store;
            console.log(resposta);
        }

        render() {
            return (
                <>
                <div> 
                    <UniversityItem message="teste2"></UniversityItem>
                    

                </div>
                </>
            );
        }
    }