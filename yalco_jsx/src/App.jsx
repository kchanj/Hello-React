import ExpressionBasic from './ExpressionBasic'
import ExpressionArray from './ExpressionArray'
import ExpressionFunc from './ExpressionFunction'
import ExpressionJsx from './ExpressionJsx'
import ExpressionRendering from './ExpressionRendering'
import TagAttr from './TagAttr'
import TagImg from './TagImg'
import TagStyle from './TagStyle'
import TagStyleFile from './TagStyleFile'
import './App.css'

const language = "Java Script"

function App() {
  return (
    <>
      {/* JSX Practices */}

      <h1>Hello JSX</h1>

      <h2>0.중괄호 표현식</h2>
      {language}

      <h2>1.중괄호 표현식: 기본</h2>
      <ExpressionBasic/>

      <h2>2.중괄호 표현식: 배열</h2>
      <ExpressionArray/>

      <h2>3.중괄호 표현식: 함수</h2>
      <ExpressionFunc/>

      <h2>4.중괄호 표현식: JSX</h2>
      <ExpressionJsx/>

      <h2>5.조건부 랜더링</h2>
      <ExpressionRendering/>

      <h2>6.태그 속성</h2>
      <TagAttr/>

      <h2>7.이미지 태그</h2>
      <TagImg/>

      <h2>8.태그 스타일</h2>
      <TagStyle/>

      <h2>9.스타일 파일</h2>
      <TagStyleFile/>
    </>
  )
}

export default App
