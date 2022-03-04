import styled, {css}from 'styled-components'

const getFontsize=({size})=>{
    switch(size){
        case 'desktop': return '26px'
        case 'tablet': return '22px'
        case 'mobile': return '18px'
        default: return '18px'
    }
}

const common = css`
background-color: pink;
border-radius: 8px;
`

export const Wrapper = styled.div`
display: flex;
flex-direction:column;
`

export const Container = styled.div`
display: ${({display})=>display ? 'flex' : 'none'};
background-color: ${({light})=>light ? 'blue' : 'red'};
border-radius: 8px;
width:200px;
height:200px;
margin-left: 8px;
`

export const Title = styled.h1`
color: coral;
font-size: ${getFontsize}; 
`

export const Content = styled.div`
display:flex;
` 