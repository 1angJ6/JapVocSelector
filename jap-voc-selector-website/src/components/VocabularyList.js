import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import './VocabularyList.css';
import { chinese_set_1 } from '../constant/chapter_1';

class VocabularyList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chinese_set: [],
            jap_set: [],
            selectedIndexes: this.randomNums(10, 0, chinese_set_1.length),
            selectedChapter: 1,
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
            arr[i] = ran;
        }
        return arr;
    }

    updateIndexes = () => {
        this.setState({selectedIndexes: this.randomNums(10, 0, chinese_set_1.length)});
    };

    render() {

        return (
            <div>
                <Button type="primary" onClick={this.updateIndexes}>Update</Button>
                {
                    this.state.selectedIndexes.map(
                        index => {
                            return (
                                <div>{chinese_set_1[index]}</div>
                            );
                        }
                    )
                }
            </div>
            
        );
    }
}

export default VocabularyList;