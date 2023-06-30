import Layout from 'antd/lib/layout/layout';
import React from 'react';
import '../css/home.css'
import Nav from './Nav'
import { Typography, Image } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

function SCode(props) {
    const space = {
        height: "30px",
        width: "100%",
    }
    return(
        <Layout>
            <Nav />
            <div className="content">
                <div className="head_title">
                    <h1>可视化程序的源代码</h1>
                    <h1>The source code of each sketches</h1>     
                </div>
                <div className="abstract">
                    <div style={space}></div>
                        <Typography>
                            <Paragraph>
                                <Text>点击下列链接，将跳转至对应项目的源代码。</Text>
                                <Text>Click the following links, will jump into the source code page.</Text>
                                <div style={space}></div>
                                <Title>Delay Circle: </Title>
                                <Link href="https://editor.p5js.org/HXMou/sketches/5LOoD5I4a"> link</Link>
                                <Title>Frequency Wave</Title>
                                <Link href="https://editor.p5js.org/HXMou/sketches/y0ruVGAPx"> link</Link>
                                <Title>Mouse Trace</Title>
                                <Link href="https://editor.p5js.org/HXMou/sketches/cMNgGu8hY"> link</Link>
                                <Title>Jumping Ball</Title>
                                <Link href="https://editor.p5js.org/HXMou/sketches/xjSOBGUeH"> link</Link>
                            </Paragraph>
                        </Typography>
                </div>
            </div>
        </Layout>
    );
}

export default SCode;