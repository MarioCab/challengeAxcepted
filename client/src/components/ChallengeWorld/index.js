import React, { useState } from "react";
import {Form, Row, Col, Button} from "react-bootstrap";
import {ADD_POST} from '../../utils/mutations';
import { useMutation } from '@apollo/client';


const ChallengeWorld = () =>{
    const [formState, setFormState] = useState({
        title: '',
        body: '',
        location: '',
    });
    const [addPost, { error, data }] = useMutation(ADD_POST);
    if(error){
        console.log(error)
    }
    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addPost({
            variables: { ...formState },
            });
        } catch {
        }
    }
    return(
        <div>
            <Form onSubmit={handleFormSubmit}>
            <Col md={{ span: 6, offset: 3 }}>
                    <Form.Group >
                        <Form.Label> 
                            What is your challenge?
                        </Form.Label>
                        <input
                            className="form-input"
                            placeholder="Enter challenge title here"
                            name="title"
                            type="text"
                            value={formState.title}
                            onChange={handleChange}
                        />
                        <Form.Label> 
                            What are the details of your challenge?
                        </Form.Label>
                        <input
                            className="form-input"
                            placeholder="What do potential accepters need to know about this challenge?"
                            name="body"
                            type="text"
                            value={formState.body}
                            onChange={handleChange}
                        />                        
                        <Form.Label> 
                            Where is this challenge taking place?
                        </Form.Label>
                        <input
                            className="form-input"
                            placeholder="Please enter location of challenge"
                            name="location"
                            type="text"
                            value={formState.location}
                            onChange={handleChange}
                        />  
                    </Form.Group>
                    <button
                        className="btn btn-block btn-info"
                        style={{ cursor: 'pointer' }}
                        type="submit"
                    >
                        Submit
                    </button>
                </Col>                
            </Form>            
        </div>
    );
};

export default ChallengeWorld;