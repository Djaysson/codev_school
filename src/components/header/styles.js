import styled from 'styled-components';

export const Headers = styled.div`
background-color:#100942;
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
height:70px;

img{
 width:80px;
 height:50px;
 align-items:flex-start;
 padding-left:40px;
}
`;

export const NavItem = styled.div`
 display:flex;
 flex-direction:row;
 padding-right:40px;
 
 a {
font-size:20px;
font-family: 'Read';
color:#FFF;
text-decoration:none;
padding:10px;
margin:5px;
 }
`;

export const ButtonApp = styled.button`
display:flex;
justify-content:center;
align-items:center;
position:relative;
color:#FE6C4D;
font-weight:bold;
width:120px;
height:45px;
border-radius: 20px;
border:0;
`;