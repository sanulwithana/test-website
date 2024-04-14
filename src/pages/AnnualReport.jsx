import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import About1 from '../components/about/About1';
import Partner from '../components/partner/Partner';
import Footer2 from '../components/footer/Footer2';
import dataAbout from '../assets/fake-data/data-about';
import dataPartner from '../assets/fake-data/data-partner';
import Team2 from '../components/team/Team2';
import dataTeam from '../assets/fake-data/data-team';
import ARItem from '../components/annual_report/AR_item';

const data = [
    {
        title : "hello",

}
] 

function AnnualReport(props) {
    return (
        <div className='page-about home-1'>
            <PageTitle title='Annual Report' />
            <ARItem/>
            <ARItem/>
            <ARItem/>
            <ARItem/>
            <ARItem/>
            <ARItem/>
            <ARItem/>
            <Footer2 />

            
        </div>
    );
}

export default AnnualReport;
