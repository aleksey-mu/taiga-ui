import type {TuiLanguageEditor} from '@taiga-ui/i18n/types';

export const TUI_KOREAN_LANGUAGE_ADDON_EDITOR: TuiLanguageEditor = {
    colorSelectorModeNames: ['단색', '구배'],
    toolbarTools: {
        undo: '끄르다',
        redo: '다시 하다',
        font: '세례반',
        fontStyle: '글꼴 스타일',
        fontSize: '글꼴 크기',
        bold: '용감한',
        italic: '이탤릭체',
        underline: '밑줄',
        strikeThrough: '취소선',
        justify: '신이 옳다고 하다',
        justifyLeft: '왼쪽 정렬',
        justifyCenter: '중앙 정렬',
        justifyRight: '오른쪽으로 정렬',
        justifyFull: '전체를 정당화하다',
        list: '목록',
        indent: '톱니 모양',
        outdent: '내어쓰기',
        unorderedList: '순서 없는 목록',
        orderedList: '정렬된 목록',
        quote: '인용하다',
        foreColor: '색상',
        backColor: '배경색',
        hiliteColor: '하이라이트 색상',
        clear: '분명한',
        link: '링크',
        attach: '파일 첨부',
        tex: 'TeX 삽입',
        code: '암호',
        image: '이미지 삽입',
        insertHorizontalRule: '수평선 삽입',
        superscript: '어깨 기호',
        subscript: '아래첨자',
        insertTable: '테이블 삽입',
        insertGroup: '그룹 삽입',
        hiliteGroup: '하이라이트 그룹',
        removeGroup: '그룹 제거',
        insertAnchor: '앵커 삽입',
        mergeCells: '셀 병합',
        splitCells: '세포 분할',
        rowsColumnsManaging: '행과 열 관리',
        cellColor: '셀 색상',
        setDetails: '세부',
        removeDetails: '세부 정보 제거',
    },
    editorEditLink: {
        urlExample: 'example.com',
        anchorExample: '닻',
    },
    editorTableCommands: [
        ['열을 삽입하기 전에', '다음에 열 삽입'],
        ['행을 삽입하기 전에', '행 삽입'],
        ['열 삭제', '행 삭제'],
    ],
    editorCodeOptions: ['텍스트의 코드', '블록 내 코드'],
    editorFontOptions: {
        small: '작은',
        large: '크기가 큰',
        normal: '정상',
        title: '제목',
        subtitle: '부제',
    },
};
