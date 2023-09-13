import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Board from '../components/Board';

const BoardDetail = () => {
    const { boardSeq } = useParams(); // /board/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
    const [loading, setLoading] = useState(true);
    const [board, setBoard] = useState({});
    const getBoard = async () => {
        const resp = await (await axios.get(`//localhost:9999/board/${boardSeq}`)).data;
        setBoard(resp);
        setLoading(false);
    };

    useEffect(() => {
        getBoard();
    }, []);

    return (
        <div>
            {loading ? (
                <h2>loading...</h2>
            ) : (
                <Board
                    idx={board.BOARD_SEQ}
                    title={board.TITLE}
                    contents={board.CONTENT}
                    createdBy={board.USER_NAME}
                />
            )}
        </div>
    );
};

export default BoardDetail;