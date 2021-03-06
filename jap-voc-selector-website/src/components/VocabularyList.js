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
                    ???1???
                </Menu.Item>
                <Menu.Item key="1" icon={<HeartOutlined />}>
                    ???2???
                </Menu.Item>
                <Menu.Item key="2" icon={<HeartOutlined />}>
                    ???3???
                </Menu.Item>
                <Menu.Item key="3" icon={<HeartOutlined />}>
                    ???4???
                </Menu.Item>
                <Menu.Item key="4" icon={<HeartOutlined />}>
                    ???5???
                </Menu.Item>
                <Menu.Item key="5" icon={<HeartOutlined />}>
                    ???6???
                </Menu.Item>
                <Menu.Item key="6" icon={<HeartOutlined />}>
                    ???7???
                </Menu.Item>
                <Menu.Item key="7" icon={<HeartOutlined />}>
                    ???8???
                </Menu.Item>
                <Menu.Item key="8" icon={<HeartOutlined />}>
                    ???9???
                </Menu.Item>
                <Menu.Item key="9" icon={<HeartOutlined />}>
                    ???10???
                </Menu.Item>
                <Menu.Item key="10" icon={<HeartOutlined />}>
                    ???11???
                </Menu.Item>
                <Menu.Item key="11" icon={<HeartOutlined />}>
                    ???12???
                </Menu.Item>
                <Menu.Item key="12" icon={<HeartOutlined />}>
                    ???13???
                </Menu.Item>
                <Menu.Item key="13" icon={<HeartOutlined />}>
                    ???14???
                </Menu.Item>
                <Menu.Item key="14" icon={<HeartOutlined />}>
                    ???15???
                </Menu.Item>
                <Menu.Item key="15" icon={<HeartOutlined />}>
                    ???16???
                </Menu.Item>
                <Menu.Item key="16" icon={<HeartOutlined />}>
                    ???17???
                </Menu.Item>
                <Menu.Item key="17" icon={<HeartOutlined />}>
                    ???18???
                </Menu.Item>
                <Menu.Item key="18" icon={<HeartOutlined />}>
                    ???19???
                </Menu.Item>
                <Menu.Item key="19" icon={<HeartOutlined />}>
                    ???20???
                </Menu.Item>
                <Menu.Item key="20" icon={<HeartOutlined />}>
                    ???21???
                </Menu.Item>
                <Menu.Item key="21" icon={<HeartOutlined />}>
                    ???22???
                </Menu.Item>
                <Menu.Item key="22" icon={<HeartOutlined />}>
                    ???23???
                </Menu.Item>
                <Menu.Item key="23" icon={<HeartOutlined />}>
                    ???24???
                </Menu.Item>
            </Menu>
        );

        return (
            <div>
                <Space>
                    <Dropdown.Button onClick={this.updateIndexes} overlay={menu}>
                        ????????????
                    </Dropdown.Button>
                    <Switch onChange={this.showAnswer} />
                </Space>
                <Divider orientation="left" plain>
                    ???{Number(this.state.selectedChapter)+1}???
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
                    ??????
                </Divider>
                { this.state.showAnswer && this.renderAnswer() }
            </div>
        );
    }
}

export default VocabularyList;