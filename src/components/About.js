import Layout from 'antd/lib/layout/layout';
import React from 'react';
import '../css/home.css'
import { Typography, Divider } from 'antd';
import Nav from './Nav'

function about(props) {

    return(
        <Layout>
            <Nav />
            <div className="content">
                <div className="head_title">
                    <h1>About</h1>     
                </div>
                <Divider />
                <div className="abstract">
                    {/* <div style={space}></div> */}
                    <div className="intro">
                        <Typography>
                            <Paragraph>
                                This website is generated as the Final Year Project of Hongxi Mou
                                in National University of Ireland, Maynooth.
                            </Paragraph>
                        </Typography>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default about;