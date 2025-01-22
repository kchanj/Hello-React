import {
    SimpleInfoCard,
    PropsInfoCard,
    DestructInfoCard,
    DefaultInfoCard,
    PriceInfoCard,
    ChildrenCard,
    makeHocSimpleCard,
    makeHocWrappedCard
} from './HelloProps'

const cppCard = {
    title: "Hello C++",
    content: "C++ Basic",
    author: "Kim"
}

const javaCard = {
    title: "Hello Java",
    content: "Java Basic",
    author: "Lee"
}

const pythonCard = {
    title: "Hello Python",
    content: "Python Basic",
    author: "Park"
}

const langCards = [{
        idx: 0,
        title: "Hello C++",
        content: "C++ Basic",
        author: "Kim"
    }, {
        idx: 1,
        title: "Hello Java",
        content: "Java Basic",
        author: "Lee"
    }, {
        idx: 2,
        title: "Hello Python",
        content: "Python Basic",
        author: "Park"
    }
];

const prodCard = {
    title: "Hello Python",
    content: "Python Basic",
    price: 123.456
}

const HocSimpleCard = makeHocSimpleCard();
const HocWrappedPropsCard = makeHocWrappedCard(PropsInfoCard);
const HocWrappedPriceCard = makeHocWrappedCard(PriceInfoCard);

function HelloPropsApp() {
    return (
        <>
            <h2>Simple Card</h2>
            <SimpleInfoCard />

            <h2>props 객체 인자</h2>
            <PropsInfoCard
                title="Props in React"
                content="Props pass data from one component to another"
                author="Alice"/>
            
            <h2>props 객체의 구조분해</h2>
            <DestructInfoCard
                title="React Composition"
                content="Composition makes your components more reusable"
                author="Chalie"/>
            
            <h2>props 객체의 구조분해(Default)</h2>
            <DefaultInfoCard
                content="Composition makes your components more reusable"
                author="Chalie"/>
            <br/>

            <h2>전개구문 활용</h2>
            <DefaultInfoCard {...cppCard}/>
            <DefaultInfoCard {...javaCard}/>
            <DefaultInfoCard {...pythonCard}/>
            <br/>

            <h2>리스트 랜더링 활용</h2>
            {langCards.map(card =>
                <DefaultInfoCard key={card.idx} {...card}/>
            )}

            <h2>함수전달</h2>
            <PriceInfoCard
                title={prodCard.title}
                content={prodCard.content}
                price={prodCard.price}
                formatPrice={(p) => p.toFixed(2)}/>
            <PriceInfoCard
                {...prodCard}
                formatPrice={(p) => `${p.toFixed(2)}￦`}/>

            <h2>children 활용</h2>
            <ChildrenCard
                title="About">
                <p>Props pass data from one component to another</p>
            </ChildrenCard>
            <ChildrenCard
                title="Contact">
                <p>Email: help@example.com</p>
                <p>Phone: 010-1234-5678</p>
                <p>Address: Seoul</p>
            </ChildrenCard>

            <h2>고차 컴포넌트 활용</h2>
            <HocSimpleCard disabled={true}/>
            <HocWrappedPropsCard disabled={true}
                title="Props in React"
                content="Props pass data from one component to another"
                author="Alice"/>
            <HocWrappedPriceCard disabled={true}
                title="Props in React"
                content="Props pass data from one component to another"
                price={123.456}
                formatPrice={p => p.toFixed(2)}/>
        </>
    )
}

export default HelloPropsApp