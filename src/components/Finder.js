const Finder = () => {
    return (
        <div className="camera-frame">
            {/*focus-line*/}
            <div className="focus-line-top">
                <div className="line-mini-vertical"></div>
                <div className="line-horizontal-top "></div>
                <div className="line-mini-vertical"></div>
            </div>
            <div className="focus-line-bottom">
                <div className="line-mini-vertical"></div>
                <div className="line-horizontal-bottom"></div>
                <div className="line-mini-vertical"></div>
            </div>
            <div className="focus-line-left">
                <div className="line-mini-horizontal"></div>
                <div className="line-vertical-left"></div>
                <div className="line-mini-horizontal"></div>
            </div>
            <div className="focus-line-right">
                <div className="line-mini-horizontal"></div>
                <div className="line-vertical-right"></div>
                <div className="line-mini-horizontal"></div>
            </div>

            {/*focus-point*/}
            <div className="focus-point"></div>

            {/*grid-line*/}
            <div className="grid-top"></div>
            <div className="grid-bottom"></div>
            <div className="grid-left"></div>
            <div className="grid-right"></div>


            <div></div>
        </div>

    )

}


export default Finder