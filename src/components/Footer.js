import React, { Component } from 'react';

class Footer extends Component {
constructor(props) {
    super(props);
    this.state = {
    }
}
    render() {
        return (
            <div>
                 <div className="table-danger">
                    <footer className="footer text-center">
                        <span className="text-muted">
                        <hr/>
                            <b><p>Made by Sanchit Sharma</p></b>
                        </span>
                    </footer>
                 </div>
            </div>
        );
    }
}
export default Footer;