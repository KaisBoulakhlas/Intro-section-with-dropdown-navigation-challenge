import React from 'react'
import GridLayout from '../GridLayout/GridLayout'
import './BannerStyles.scss'
import audiophile from "../../assets/client-audiophile.svg";
import databiz from "../../assets/client-databiz.svg";
import maker from "../../assets/client-maker.svg";
import meet from "../../assets/client-meet.svg";

export default function Banner() {
    return (
        <GridLayout>
            <section className="container__left">
                <h1 className="container__left__title">Make<span>remote work</span></h1>
                <p className="container__left__text--color-medium-gray">Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.</p>
                <button className="btn btn__bg--black">Learn more</button>
                <div className='container__left__clients'>
                    <img className='image__client' alt="" src={databiz}/>
                    <img className='image__client' alt="" src={audiophile}/>
                    <img className='image__client' alt="" src={meet}/>
                    <img className='image__client' alt="" src={maker}/>
                </div>
            </section>
            <div className="container__right"></div>
        </GridLayout>
    )
}
