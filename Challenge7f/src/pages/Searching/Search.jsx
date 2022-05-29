import React from "react";
import { Container } from "reactstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchingForm from "../../components/pencarianForm";
import HeroSection from "../../components/LandingPage/landingPage";


function Search() {
    return (
            <React.Fragment>
                <Header />
                <HeroSection />

                <Container>
                    <div className="box-pencarian mx-5">
                        <SearchingForm useButton={true} isDisabled={false}/>
                    </div>
                </Container>

                <Footer />
            
            </React.Fragment>
        )
    }

export default Search;