import styled from "styled-components";

export const FriendListContainer = styled.div`
  max-width: 40%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
`

export const FriendItemList = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
`

export const FriendItem = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  margin-top: 5vh;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
  
  &:first-child {
    margin-top: 0;
}
`

export const FriendStatus = styled.span`
  border-radius: 50%;
  margin: auto 1.7rem;
  height: 15px;
  width: 15px;
  background-color: ${ (props) => {
        return props.isOnline ? 'green' : 'red'
    } };
`

export const FriendAvatar = styled.img`
  margin: 0 auto;
`

export const FriendName = styled.p`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
`