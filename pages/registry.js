import React, { useState } from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    CSSReset,
    Heading,
    Icon,
    Link,
    ThemeProvider,
    theme,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Checkbox,
    Progress,
    Radio,
    RadioGroup,
    Stack,
    Textarea,
    FormHelperText,
    InputControl 
  } from '@chakra-ui/core'

const Registry = () => {
    const [state, setState] = useState({ name: '', email: '', message: '' });
    const handleChange = event => {
      const { name, value } = event.target;
      setState({
        ...state,
        [name]: value
      });
    }
    const handlePress = () => {
      fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: state.name, email: state.email, message: state.message })
      });
    }
    return (
        <>
        <FormControl isRequired>
            <FormLabel htmlFor="email" mt={6}>Email address</FormLabel>
            <Input type="email" id="email" aria-describedby="email-helper-text" 
                onChange={handleChange}/>
            <FormHelperText id="email-helper-text">
                We'll never share your email.
            </FormHelperText>            
                <FormLabel htmlFor="fname" mt={5}>First name</FormLabel>
                <Input id="fname" placeholder="First name" mb={5} /><br/>
                <Textarea placeholder="Here is a sample placeholder" mb={5} />
                <Button
                    mt={4}
                    variantColor="teal"
                    type="submit"
                    onClick={handlePress}
                 >
            Submit
          </Button>
        </FormControl>
        </>
    );
}

export default Registry;