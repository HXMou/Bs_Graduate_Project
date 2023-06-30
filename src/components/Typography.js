import React from "react";
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

function Typo() {
    const space = {
        height: "30px",
        width: "100%",
    }

    return (
        <Typography>
            <Title level={2}>基本信息 Introduction</Title>
            <div style={space}></div>
                <Paragraph>
                本网站是作为成都信息工程大学网络空间安全学院，网络工程174班的牟泓喜同学的毕业设计项目而搭建的，
                其目的是作为一个展示，和让用户能与在本项目中用p5.js设计的所以音乐可视化程序有互动的一个窗口，并且
                对每一个可视化程序给出基本的使用指示信息。
                </Paragraph>
                <Paragraph>
                This website is generated as one part of the Final Year Project of Hongxi Mou
                in Chengdu University of Information Technology. And the goal of this website is 
                as a container to dispaly all music visualization sketches I created by p5.js 
                and give the basic information about this project to users.
                </Paragraph>
                <Paragraph>
                    <Text>Click this </Text> 
                    <Link href="/VisIndex">link</Link>
                    <Text>, or </Text>
                    <Text mark>"VISUALIZATION"</Text> 
                    <Text>label on navigation to see all sketches.</Text>
                </Paragraph>
                <div style={space}></div>
            <Title level={2}>Abstruct</Title>
            <div style={space}></div>
                <Paragraph>
                p5.js是本研究中用于可视化的主要技术，它可以被理解为javaScript和Processing的结合，是个具有简单的语法和强大功能却还没有被广泛运用的JS库。
                作为p5.js的核心库，p5.sound提供了很多可以直接使用的影响声音的输出或分析声音的频率、振幅、延迟效果等
                信息的函数，同时p5.js还包括了对图形化有很大帮助的shape、color等库。本项目为了使时频分析的过程更加详细，
                还利用Processing额外创建了一个专门做傅里叶分析并绘制频谱图的程序，但其作为可视化背后的分析过程，便不会在此
                于用户交互的页面中做一并展示。
                </Paragraph>
                <Paragraph>
                P5.js could be understand as a combination of javaScript and Processing language with simple 
                grammar and powerful libraries to help user build creative sketches with drawing or sound 
                functionality, which has not been used widely yet. As the core library, p5.js sound library 
                offers a lot functionalities which can affect the output of sound or analysis sound with frequency,
                 amplitude, delay effect and so on information, and all of these functionalities are highly helpful
                  to visualizing music signals. Music signal is an abstract word for most public because it usually 
                  can only be noticed by feeling or hearing, however in fact its frequency and amplitude information 
                  can be saw in a regular wave and people are supposed to comprehend the wave to be better understand 
                  and control sounds. The goal of this project is to realize music visualization through creative 
                  sketches by p5.js and organize them inside of one web interface with some buttons allow user to 
                  manipulate the effect on music, thus can give the user a clear and intuitive experience of 
                  visualization. As introduced above, p5.js is the major technology I used for this project 
                  with numbers of inbuilt libraries and functionalities which related with web audio and graph 
                  drawing can be used directly.
                </Paragraph>
                <div style={space}></div>
                
        </Typography>
    );
}

export default Typo;