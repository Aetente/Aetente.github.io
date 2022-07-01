
import React, { Component, useEffect, useState } from "react";
import "./styles.css";

const PALETTE = [
    "#0D7377",
    "#32E0C4",
    "#EEEEEE"
]

const CssLines = () => {

    const [offsetY, setOffsetY] = useState(0);
    const [rects, setRects] = useState([]);
    
    const handleScroll = (e) => {
        setOffsetY(window.pageYOffset)
    }

    const genRects = () => {
        const range = [...Array(10).keys()];
        const rects = range.map((i) => {
            // let colorRangeR = Math.round(Math.random() * 40);
            // let colorRangeG = Math.round(colorRangeR / 1.6);
            // let colorRangeB = Math.round(colorRangeG / 1.6);
            // let colorString = `rgb(${200 + colorRangeR},${200 + colorRangeG},${200 + colorRangeB})`;
            const colorToChoose = Math.round(Math.random() * (PALETTE.length - 1));
            const colorString = PALETTE[colorToChoose];
            const rectSpeed = rangedRandom(0.3, 0.7);
            const rectHeight = Math.round(rangedRandom(120, 220));
            const rectWidth = Math.round(rangedRandom(15, 50));
            return {
                i,
                colorString,
                rectSpeed,
                rectHeight,
                rectWidth
            }
        });
        setRects(rects);
    }

    const rangedRandom = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const mapLines = () => {
        return rects.map((r) => {
            const windowHeight = window.innerHeight;
            const opacity = 1 - offsetY / windowHeight;
            let visibility = "visible";
            if (opacity > 0.2) {
                return (
                    <div
                        className="test-line"
                        style={{
                            opacity,
                            backgroundColor: r.colorString,
                            transform: `translateY(${offsetY * r.rectSpeed}px)`,
                            height: `${r.rectHeight}px`,
                            width: `${r.rectWidth}px`
                        }}
                    ></div>
                )
            }
            return ( 
                <div
                    style={{
                        opacity: 0,
                        height: `${r.rectHeight}px`,
                        width: `${r.rectWidth}px`
                    }}
                ></div>
            )
        })
    }

    useEffect(() => {
        genRects();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="hold-lines">
            {mapLines()}
        </div>
    );
}

export default CssLines;