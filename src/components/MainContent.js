import React from 'react'
import styled from 'styled-components'
import star from './assets/star.png'


const rates = [1,2,3,4,5];


function MainContent(props) {
    // const [choosen, setChoosen] = useState()
    function handleClick(items){
        return items
    };
        
    
  return (
    <DivCard>
        <Image src={star} alt="Logo" />;
        <H1>How did we do? </H1>
        <P>Please let us know how we did with your support request. 
            All feedback is appreciated to help us improve our offering!</P>
        <Rate>{rates.map((item)=> <Circle key={item} onClick={()=>(handleClick(item))} 
        type='button' >{item}</Circle> )} </Rate>
        <Button type="submit">Submit</Button>
    </DivCard>
  )
}

export default MainContent



const DivCard = styled.div`
    max-width: 412px;
    max-height: 416px;
    background-color: #232A34;
    border-radius: 30px;
    padding: 18px;
    width: 85%;
`;

const Image = styled.img``;

const H1 = styled.h1`
    font-family: Overpass;
    font-size: 28px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0px;
    text-align: left;
    color: #FFFFFF;
`;

const P = styled.p`
    max-width: 90%;
    font-family: Overpass;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color:#969FAD;
    @media (min-width: 450px) {
        max-width: 78%;
    }
`;
const Rate = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (min-width: 450px) {
        margin-top: 30px;
    }
`;
const Circle = styled.button`
    background: #262E38;
    width: 42px;
    height: 42px;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Overpass;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.20000000298023224px;
    text-align: center;
    color: #7C8798;
    border: none;
    &:hover{
        color: #FFFFFF;
        background: #7C8798;
        cursor: pointer;
    }
    @media (min-width: 450px) {
        width: 51px;
        height: 51px;
    }
`;
const Button = styled.button`
    background: #FC7614;
    border-radius: 22.5px;
    height: 45px;
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 2px;
    color: #FFFFFF;
    border: none;
    margin-top:30px;
    &:hover{
        color: #FC7614;
        background: #FFFFFF;
        cursor: pointer;
    }
`;