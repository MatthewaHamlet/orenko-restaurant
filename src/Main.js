import React, { Component } from 'react';


class Main extends Component {
    render() {
        return (
            <section id="main">
            <div className="container m-0">
                <div className="row">
                    <div class="card">
                            <img className="card-img-top" src="https://www.fillmurray.com/360/540
                            " alt=""/>
                        <div class="card-body">
                            <h4 class="card-title">Title</h4>
                            <p class="card-text">Text</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container-img-bg">
                <div className="container container--copy">
                    <div className="row">
                        <div className="col-md">
                            <p>LOREM IPSUM</p>
                    </div>
                    <div className="col-md">
                        <img src="" alt="" />
                    </div>
                    <div className="col-md">
                        <button className="btn btn-primary">
                            CLICK ME
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

        export default Main;