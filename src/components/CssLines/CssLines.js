
import React, { Component } from "react";
import "./styles.css";

class CssLines extends Component {

    constructor() {
        super();
        this.state = {
            offsetY: 0,
            rects: [],
            handleScroll: (e) => {
                this.setState({ offsetY: window.pageYOffset })
            }
        };
        this.mapLines = this.mapLines.bind(this);
        this.rangedRandom = this.rangedRandom.bind(this);
        this.genRects = this.genRects.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.state.handleScroll)
        this.genRects()
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.state.handleScroll)
    }

    rangedRandom = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    genRects = () => {
        let range = [...Array(10).keys()];
        let rangeLength = range.length;
        let rects = range.map((i) => {
            let colorRangeR = Math.round(Math.random() * 40);
            let colorRangeG = Math.round(colorRangeR / 1.6);
            let colorRangeB = Math.round(colorRangeG / 1.6);
            let colorString = `rgb(${200 + colorRangeR},${200 + colorRangeG},${200 + colorRangeB})`;
            let rectSpeed = this.rangedRandom(0.3, 0.7);
            let rectHeight = Math.round(this.rangedRandom(80, 120));
            let rectWidth = Math.round(this.rangedRandom(15, 50));
            return {
                i,
                colorString,
                rectSpeed,
                rectHeight,
                rectWidth
            }
        });
        this.setState({rects});
    }

    mapLines = () => {
        let {rects} = this.state;
        return rects.map((r) => {
            return (
                <div
                    className="test-line"
                    style={{
                        backgroundColor: r.colorString,
                        transform: `translateY(${this.state.offsetY * r.rectSpeed}px)`,
                        height: `${r.rectHeight}px`,
                        width: `${r.rectWidth}px`
                    }}
                ></div>
            )
        })
    }

    render() {
        return (
            <div className="hold-lines">
                {this.mapLines()}
            </div>
        );
    }
}

export default CssLines;