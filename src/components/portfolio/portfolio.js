import React from 'react';
import { render } from 'react-snapshot';
import './portfolio.modules.scss';
import {Helmet} from 'react-helmet';

const work = [
    {
        name: 'Constellix website (new)',
        src: '../../../work/constellix-homepage.png',
        categories: 'webDev design ux',
        link: 'https://constellix.com'
    },
    {
        name: 'DNS Made Easy website',
        src: '../../../work/dnsmadeeasy-site.png',
        categories: 'webDev design ux',
        link: 'https://dnsmadeeasy.com'
    },
    {
        name: 'SPF Wizard',
        src: '../../../work/spf-wizard.png',
        categories: 'webDev design ux', 
        link: 'https://spfrecord.io'
    },
    {
        name: 'Sonar Lite web app',
        src: '../../../work/sonar-lite-webapp.png',
        categories: 'design ux', 
        link: 'https://sonar-lite.constellix.com/'
    },
    {
        name: 'Domains Made Easy',
        src: '../../../work/domains-made-easy.png',
        categories: 'webDev wordPress design', 
        link: 'https://domainsmadeeasy.com'
    },
    {
        name: 'Pricing calculator',
        src: '../../../work/pricing-calc.png',
        categories: 'design ux webdev', 
        link: 'https://constellix.com/pricing/pricing-calculator/'
    },
    {
        name: 'Constellix UI idea',
        src: '../../../work/constellix-ui-design.png',
        categories: 'design ux', 
        link: '/#/work'
    },
    {
        name: 'Constellix blog',
        src: '../../../work/constellix-blog.png',
        categories: 'webDev wordPress writing', 
        link: 'http://news.constellix.com'
    },
    {
        name: 'DNS Made Easy blog',
        src: '../../../work/dnsme-blog.png',
        categories: 'webDev wordPress writing', 
        link: 'http://social.dnsmadeeasy.com'
    },
    {
        name: 'Constellix landing page idea',
        src: '../../../work/constellix-landing-page-idea.png',
        categories: 'design', 
        link: '/#/work'
    },
    {
        name: 'Sonar Lite extension',
        src: '../../../work/rum-ext.png',
        categories: 'design', 
        link: 'https://chrome.google.com/webstore/detail/constellix-sonar-lite-net/jaoaipchgmdieejepndehhkgjihmffde?hl=en-US'
    },
    {
        name: 'What Every Web Developer Should Know About DNS',
        src: '../../../work/dzone.png',
        categories: 'writing', 
        link: 'https://dzone.com/articles/what-every-webmaster-should-know-about-dns'
    },
    {
        name: 'Constellix Knowledge Base',
        src: '../../../work/constellix-help-site.png',
        categories: 'webDev wordPress', 
        link: 'http://help.constellix.com'
    },
    {
        name: 'DNS Made Easy Knowledge Base',
        src: '../../../work/dnsme-help-site.png',
        categories: 'webDev wordPress', 
        link: 'http://help.dnsmadeeasy.com'
    },
    {
        name: 'Tiggee website',
        src: '../../../work/tiggee-site.png',
        categories: 'webDev design', 
        link: 'https://tiggee.com'
    },
    {
        name: 'Login screen',
        src: '../../../work/login-screen.png',
        categories: 'design ux', 
        link: '/#/work'
    },
    {
        name: 'Forbes article',
        src: '../../../work/forbes.png',
        categories: 'writing', 
        link: 'https://www.forbes.com/sites/forbestechcouncil/2017/07/03/the-waze-of-dns-has-arrived/'
    },
    {
        name: 'Traffic Steering 101 Video',
        src: '../../../work/rum-ito-video.png',
        categories: 'video writing', 
        link: 'https://constellix.com/solutions/rum-traffic-steering/'
    },
    {
        name: 'Constellix website',
        src: '../../../work/constellix-site.png',
        categories: 'webDev design ux',
        link: 'https://constellix.com'
    },
];

class Portfolio extends React.Component {

    filterWork(e){
        const filteredWork = work.filter(item => item.categories.includes(e.target.value));
        console.log(filteredWork);

        const GridItems = ({filteredWork}) => (
            <div className="gallery">
              {filteredWork.map(item => (
                <div className="gallery__item" key={item.name}>
                    <a href={item.link}>
                        <img src={item.src} alt={item.name} />
                    </a>
                </div>
              ))}
            </div>
          );

          render(<GridItems filteredWork={filteredWork}/> , document.getElementById('gridContainer'));

    }

    render(){

        return (
            <div className="porfolio-grid-section">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Work | Blair McKee's Portfolio</title>
                    <link rel="canonical" href="https://blairmckee.com/work/" />
                    <meta name="description" content="Check out my work: web design, front-end development, WordPress, UX design, graphic design, writing samples, and more. " />
                </Helmet>
                <div className="click-me__wrapper">
                    <div className="click-me--arrow"></div>
                    <p className="click-me--text">Click one</p>
                </div>
                <ul className="wrapper categories">
                    <button value="webDev" className="category" onClick={this.filterWork}>Web Dev</button>
                    <button value="design" className="category" onClick={this.filterWork}>Design</button>
                    <button value="ux" className="category" onClick={this.filterWork}>UX</button>
                    <button value="wordPress" className="category" onClick={this.filterWork}>WordPress</button>
                    <button value="video" className="category" onClick={this.filterWork}>Video</button>
                    <button value="writing" className="category" onClick={this.filterWork}>Writing</button>
                </ul>
                <div id="gridContainer">
                </div>
            </div>
        );
    }
}

export default Portfolio;