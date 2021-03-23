import React, { Component } from 'react';


class SlideShow extends Component {

    constructor() {
        super()
        this.state = {
            width: window.innerWidth
        }
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange)
    }

    componentWillUnmount = ()  => {
        this.setState({
            width:window.innerWidth
        })
    }

    render() {
        const {width} = this.state
        const isMobile = width <= 500
        
        if (isMobile) {
            return(
                <div className="container">
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTYbHCOzBTmxaKas5EDrt0IBe1m7L3aZ7XCTTS2SBEO_0Bfwx2taZKpYI3C1xkGLVzDV3z7BUUEiNhK/embed?rm=minimal&start=true&loop=true&delayms=5000" frameborder="0" width="375" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            )
        } else {
            return(
                <div className="container">
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTYbHCOzBTmxaKas5EDrt0IBe1m7L3aZ7XCTTS2SBEO_0Bfwx2taZKpYI3C1xkGLVzDV3z7BUUEiNhK/embed?rm=minimal&start=true&loop=true&delayms=5000" frameborder="0" width="800" height="499" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            )
        }

    }

}


export default SlideShow;