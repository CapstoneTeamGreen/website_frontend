import React from 'react'
import {
    ContactContainer,
    ContactContent,
    ContactHeader,
    ContactP,
    ButtonWrapper,
    ContactButton
} from './ContactElements'

const Contact = ({ body }) => {
  return (
    <ContactContainer>
      
        <ContactContent>
            <ContactHeader>Reach out</ContactHeader>
            <ContactP>{body}</ContactP>
            
            <ButtonWrapper>
                <ContactButton>email me</ContactButton>
            </ButtonWrapper>

        </ContactContent>
    </ContactContainer>
  )
}

Contact.defaultProps = {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

export default Contact
