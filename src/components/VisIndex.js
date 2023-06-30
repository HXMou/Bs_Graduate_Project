import Layout from 'antd/lib/layout/layout';
import React from 'react';
import '../css/home.css'
import { Divider } from 'antd';
import Vis from './Vis';
import Nav from './Nav'

function VIndex(props) {
    return(
        <Layout>
            <Nav />
            <div className="head_title">
                    <h1>基于p5.js所创建的可视化草图</h1>
                    <h1>Visualizations sketches generated by p5.js</h1>     
                </div>
            <div className="content">
                <div className="sketch"> 
                    <Vis />
                </div>
            </div>
        </Layout>
    );
}

export default VIndex;