import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
position:absolute;
width:100vw;
height:100vh;

img{
width:100%;
height:500px;
position: absolute;
z-index: -1;

}
`;
export const ContainerHome = styled.div`
width:40vw;
display:block;
line-height:20px;
margin-top:70px;
margin-left:70px;

h1{
font-size:60px;
color:#FFF;

}
h2{
font-size:60px;
color:#FE6C4D;

}

p{
font-size:15px;
color:#FFF;
}
`;
export const ButtonAp = styled.button`
display:flex;
justify-content:center;
align-items:center;
background-color:#FE6C4D;
color:#FFF;
font-weight:bold;
width:200px;
height:45px;
border-radius: 20px;
border:0;

`;
