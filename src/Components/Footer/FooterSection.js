import React from "react";

//components


//styled
import { FooterSectionWrapper,FooterHalfWrapper,FooterHeader,FooterDes} from "./FooterStyle";
import { ButtonStyle } from "../Button/LinkStyle";


const IntroSection = () => {
  return (
    <FooterSectionWrapper>
        <FooterHalfWrapper>
            <FooterHeader>Contacts Us</FooterHeader>
            <FooterDes>📍 FKLCLEANINGSERVICE <br/>199 Forest St, Westbrook, ME 04092</FooterDes>
            <FooterDes>📞 (207) 409-5286</FooterDes>
            <FooterDes>📧 fklcleaningservice@gmail.com</FooterDes>
            <FooterDes>Follow us on facebook: @facebookpage</FooterDes>
        </FooterHalfWrapper>
        <FooterHalfWrapper>
            <FooterHeader>Our Services</FooterHeader>
            <FooterDes>⭐ Janitorial Service</FooterDes>
            <FooterDes>⭐ Carpet Cleaning</FooterDes>
            <FooterDes>⭐ Disinfecting Surfaces</FooterDes>
            <FooterDes>⭐ Residential Cleaning</FooterDes>
            <FooterDes>⭐ Dishwashing</FooterDes>
            <FooterDes>⭐ Move In / Move Out Cleaning</FooterDes>
            <FooterDes>⭐ Airbnb Cleaning</FooterDes>
            <FooterDes>⭐ Floor Care</FooterDes>
            <FooterDes>⭐ Covid-19 Disinfection</FooterDes>
            <FooterDes>⭐ Commercial Cleaning</FooterDes>
        </FooterHalfWrapper>
    </FooterSectionWrapper>
  );
};

export default IntroSection;