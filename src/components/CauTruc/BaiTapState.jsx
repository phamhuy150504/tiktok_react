import React, { Component } from 'react'

export default class BaiTapState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: './img/imgRedCar.jpg',
        }
    }
    changeColor = (color) => {
        console.log(color)
        let imgSource = ''
        switch(color) {
            case 'red': {
                imgSource = './img/imgRedCar.jpg';
                break;
            } 
            case 'silver': {
                imgSource = './img/imgSilverCar.jpg';
                break;
            }
            case 'black': {
                imgSource = './img/imgBlackCar.jpg'
            } break
        }
        console.log(imgSource)
        this.setState({
            img: imgSource,
        })
    }
    render() {
        const styleBTN = {
            color: '#FFFFFF',
        }
        return (
            <div className='container'>
                <div classname="row">
                    <div classname="col-md-6">
                        <h3>Please choose your favorite about car's color</h3>
                        <img src={this.state.img} width={400} height={200} />
                    </div>
                    <div classname="col-md-6">
                        <button onClick={() => this.changeColor('red')} className='btn btn-danger mt-3' style={styleBTN} >
                           Red Color 
                        </button>
                        <button onClick={() => this.changeColor('silver')}  className='btn btn-dark mt-3 mx-5' style={styleBTN} >
                           Silver Color 
                        </button>
                        <button onClick={() => this.changeColor('black')}  className='btn mt-3' style={{color: '#fff', backgroundColor: '#000'}} >
                           Black Color 
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
