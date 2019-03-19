import React from 'react';
import ReactDOM from 'react-dom';
import './portfolio.modules.scss';

const work = [
    {
        name: 'Constellix website',
        src: 'http://localhost:3000/portfolio/public/work/constellix-site.png',
        categories: 'webDev design ux'
    },
    {
        name: 'Constellix blog',
        src: 'http://localhost:3000/portfolio/public/work/constellix-blog.png',
        categories: 'webDev wordPress'
    }
];

class Portfolio extends React.Component {

    filterWork(e){
        const filteredWork = work.filter(item => item.categories.includes(e.target.value));
        console.log(filteredWork);

        const GridItems = ({filteredWork}) => (
            <div className="gallery">
              {filteredWork.map(item => (
                <div className="gallery__item" key={item.name}>
                    <img src={item.src} alt={item.name} />
                </div>
              ))}
            </div>
          );

          ReactDOM.render(<GridItems filteredWork={filteredWork}/> , document.getElementById('gridContainer'));

    }

    render(){

        return (
            <div className="porfolio-grid-section">
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