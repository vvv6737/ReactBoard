import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);

    const getBoardList = async () => {
        const resp = await (await axios.get('//localhost:9999/board/list?page=1&pageSize=10')).data; // 2) 게시글 목록 데이터에 할당  
        setBoardList(resp.resList); // 3) boardList 변수에 할당
        console.log(boardList)

        const pngn = resp.pagination;
    }

    useEffect(() => {
        getBoardList(); // 1) 게시글 목록 조회 함수 호출
    }, []);

    return (
        <div>
            <ul>
                {boardList.map((board) => (
                    // 4) map 함수로 데이터 출력
                    <li key={board.boardSeq}>
                        <Link to={`/board/${board.boardSeq}`}>{board.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoardList;