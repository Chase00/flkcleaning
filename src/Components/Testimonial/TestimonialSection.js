import React from "react";

//components
import TestProfile from "../../Assets/christina.jpeg"

//styled
import { SessionDescription,SessionHeader,Sessionsrate, SessionsNametwo,SessionName,SessionsTitle ,TestimonialSessionsContainerDes,TestimonialSessionsContainer,TestimonialSessionsContainerFirst,TestimonialSessionsContainerImg } from "../Testimonial/TestimonialStyle";



const TestimonialSection = () => {
  return (
    <TestimonialSessionsContainer>
        <TestimonialSessionsContainerFirst>
            <TestimonialSessionsContainerImg>
            <img src={TestProfile} alt="customer profile"/>
            </TestimonialSessionsContainerImg>
            <TestimonialSessionsContainerDes>
                <SessionsTitle>Testimonials</SessionsTitle>
                <SessionHeader>What customers say about us?</SessionHeader>
                <SessionDescription>
                I ‘m an office worker who does not have free time to clean my house. I have been using FKL service for about a years now. I am very satisfied with the service that FKL has provided. Now they are serving my office too. Thank you FKL.
                </SessionDescription>
                <SessionName>Alison Walton</SessionName>
                <SessionsNametwo>PROFESSIONAL DEVELOPMENT</SessionsNametwo>
                <Sessionsrate>3.000+ Testimonials </Sessionsrate> 
            </TestimonialSessionsContainerDes>

        </TestimonialSessionsContainerFirst>

    </TestimonialSessionsContainer>
  );
};

export default TestimonialSection ;