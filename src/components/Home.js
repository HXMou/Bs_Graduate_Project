import Layout from 'antd/lib/layout/layout';
import React from 'react';
import '../css/home.css'
import { Divider } from 'antd';
import Typo from './Typography';
import Nav from './Nav'

function home(props) {
    const space = {
        height: "30px",
        width: "100%",
    }

    return(
        <Layout>
            <Nav />
            <div className="content">
                <div className="head_title">
                    <h1>毕业设计项目：关于音频信号时频分析后的可视化展示界面</h1>    
                    <h1>A Interface for Display Visualization of Time-Frequency Analysis of Music Signal</h1> 
                </div>
                <Divider />
                <div className="abstract">
                    {/* <div style={space}></div> */}
                    <div className="intro">
                        <Typo />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default home;