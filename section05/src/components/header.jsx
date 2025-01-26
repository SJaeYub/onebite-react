//함수 내의 html 태그를 리턴하는 부분을 컴포넌트, 함수로 컴포넌트를 리턴하는 것을 함수 컴포넌트라고 함, 반드시 첫글자가 대문자여야(리액트 룰)
export default function Header() { ////자식컴포넌트
    return (
        <header>
            <h1>header</h1>
        </header>
    );
}