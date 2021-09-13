import React from 'react';
import { Divider, Dropdown, Menu, Space, Switch } from 'antd';
import { HeartOutlined } from "@ant-design/icons";
import './VocabularyList.css';
import { chinese_set_1, jap_set_1 } from '../constant/chapter_1';
import { chineseList, japList } from "../constant/vocabularyList";

class VocabularyList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chinese_set: chinese_set_1,
            jap_set: jap_set_1,
            selectedIndexes: this.randomNums(10, 0, chinese_set_1.length),
            selectedChapter: 0,
            showAnswer: false,
        };
    }

    isExist(arr, ran) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === ran) {
                return true;
            }
        }
        return false;
    }

    randomNums(n, min, max) {
        var arr = [];
        for (var i = 0; i < n; i++) {
            var ran = Math.ceil(Math.random() * (max - min) + min);
            while (this.isExist(arr, ran)) {
                ran = Math.ceil(Math.random() * (max - min) + min);
            }
            arr[i] = ran-1;
        }
        return arr;
    }

    updateIndexes = () => {
        this.setState({selectedIndexes: this.randomNums(10, 0, this.state.chinese_set.length)});
    };

    updateVocList = (e) => {
        this.setState({
            chinese_set: chineseList[e.key],
            jap_set: japList[e.key],
            selectedIndexes: this.randomNums(10, 0, chineseList[e.key].length),
            selectedChapter: e.key,
        });
    }

    showAnswer = () => {
        this.setState({showAnswer: !this.state.showAnswer});
    }

    renderAnswer = () => {
        return (
                <div>
                    {
                        this.state.selectedIndexes.map(
                            index => {
                                return (
                                    <div>
                                        <span>{this.state.chinese_set[index]}</span>
                                        <span className="answer">{this.state.jap_set[index]}</span>
                                    </div>
                                );
                            }
                        )
                    }
                </div>
        );
    }

    render() {

        const menu = (
            <Menu onClick={this.updateVocList}>
                <Menu.Item key="0" icon={<HeartOutlined />}>
                    第1課
                </Menu.Item>
                <Menu.Item key="1" icon={<HeartOutlined />}>
                    第2課
                </Menu.Item>
                <Menu.Item key="2" icon={<HeartOutlined />}>
                    第3課
                </Menu.Item>
                <Menu.Item key="3" icon={<HeartOutlined />}>
                    第4課
                </Menu.Item>
                <Menu.Item key="4" icon={<HeartOutlined />}>
                    第5課
                </Menu.Item>
                <Menu.Item key="5" icon={<HeartOutlined />}>
                    第6課
                </Menu.Item>
                <Menu.Item key="6" icon={<HeartOutlined />}>
                    第7課
                </Menu.Item>
                <Menu.Item key="7" icon={<HeartOutlined />}>
                    第8課
                </Menu.Item>
                <Menu.Item key="8" icon={<HeartOutlined />}>
                    第9課
                </Menu.Item>
                <Menu.Item key="9" icon={<HeartOutlined />}>
                    第10課
                </Menu.Item>
                <Menu.Item key="10" icon={<HeartOutlined />}>
                    第11課
                </Menu.Item>
                <Menu.Item key="11" icon={<HeartOutlined />}>
                    第12課
                </Menu.Item>
                <Menu.Item key="12" icon={<HeartOutlined />}>
                    第13課
                </Menu.Item>
                <Menu.Item key="13" icon={<HeartOutlined />}>
                    第14課
                </Menu.Item>
                <Menu.Item key="14" icon={<HeartOutlined />}>
                    第15課
                </Menu.Item>
                <Menu.Item key="15" icon={<HeartOutlined />}>
                    第16課
                </Menu.Item>
                <Menu.Item key="16" icon={<HeartOutlined />}>
                    第17課
                </Menu.Item>
                <Menu.Item key="17" icon={<HeartOutlined />}>
                    第18課
                </Menu.Item>
                <Menu.Item key="18" icon={<HeartOutlined />}>
                    第19課
                </Menu.Item>
                <Menu.Item key="19" icon={<HeartOutlined />}>
                    第20課
                </Menu.Item>
                <Menu.Item key="20" icon={<HeartOutlined />}>
                    第21課
                </Menu.Item>
                <Menu.Item key="21" icon={<HeartOutlined />}>
                    第22課
                </Menu.Item>
                <Menu.Item key="22" icon={<HeartOutlined />}>
                    第23課
                </Menu.Item>
                <Menu.Item key="23" icon={<HeartOutlined />}>
                    第24課
                </Menu.Item>
            </Menu>
        );

        return (
            <div>
                <Space>
                    <Dropdown.Button onClick={this.updateIndexes} overlay={menu}>
                        単語生成
                    </Dropdown.Button>
                    <Switch onChange={this.showAnswer} />
                </Space>
                <Divider orientation="left" plain>
                    第{Number(this.state.selectedChapter)+1}課
                </Divider>
                <div>
                    {
                        this.state.selectedIndexes.map(
                            index => {
                                return (
                                    <div>{this.state.chinese_set[index]}</div>
                                );
                            }
                        )
                    }
                </div>
                <Divider orientation="left" plain>
                    答え
                </Divider>
                { this.state.showAnswer && this.renderAnswer() }
            </div>
        );
    }
}

export default VocabularyList;