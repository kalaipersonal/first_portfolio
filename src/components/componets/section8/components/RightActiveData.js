import React, { Component } from 'react'
import './styles/Active.scss';
export default class RightActiveData extends Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            texts: [
                "MUSIC 🎵",
                "SCOOTERING 🛵",
                "MOBILE USING 📱",
                "WAITING 🚋",
                "TRAVELLING ✈️",
                "THINKING 🤔",
                "STANDING 🧍",
                "POWER 🔋",
                "COFFEE ☕",
                "WORKING 🖥️",
            ],
        };
    }
    switchImage() {
        if (this.state.currentImage < this.state.texts.length - 1) {
            this.setState({
                currentImage: this.state.currentImage + 1,
            });
        } else {
            this.setState({
                currentImage: 0,
            });
        }
        return this.currentImage;
    }

    componentDidMount() {
        setInterval(this.switchImage, 1500);
    }
    render() {
        return (
            <div>
                <p
                    className="text-sizes mb-3 mt-5"
                // style={{ color: this.props.color }}
                >
                    {this.state.texts[this.state.currentImage]}
                </p>

                <div className='spn'>
                    <span
                        className="text-some mt-3 mb-5"
                        style={{ lineHeight: "1.8" }}
                    >
                        Loream Include these activities in{" "}
                        <span
                            style={{ color: this.props.color }}
                            className="ms-3"
                        >
                            job-related skills and maturity and they can be a
                        </span>
                        <span className="ms-2">
                            huge help when you’re looking for job experience.
                        </span>
                        <span style={{ color: this.props.color }}>
                            {" "}
                            Sports,Travelling,Movies
                        </span>
                    </span>
                </div>
                <div className='btns mt-4'>
                    <button className='btnss'>Read More...</button>
                </div>
            </div>
        )
    }
}
