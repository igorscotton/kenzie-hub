import styled from 'styled-components'

export const ContainerS = styled.div`
      width: 100%;
      max-width: 780px;
      display: flex;
      flex-direction: column;
      min-height: 100vh;

      header{
            height: 70px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #212529;
      }

      header button{
            background-color: #212529;
            border: none;
            border-radius:4px;
            width: 55.5px;
            height: 32px;
             color: #F8F9FA;
             font-size: 12px;
             font-weight: 600;
             margin-right: 13px;
      }

      header button:hover{
            background-color: #343B41;
      }

      header img{
            margin-left: 13px;
      }

      section{
            height: 150px;
            border-bottom: 1px solid #212529;
            display: flex;
            flex-direction: column;
            justify-content: center;
      }
      
      section h1{
            color: #F8F9FA;
            font-size: 18px;
            font-weight: 700;
            margin: 0 0 10px 12px;
      }

      section span{
            color: #868E96;
            font-size: 12px;
            margin-left: 12px;
      }

      main div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
      }

      main div h2{
            margin-left: 12px;
            color: #F8F9FA;
            font-size: 16px;
            font-weight: 600;
      }

      main div button{
            margin-right: 12px;
            border: none;
            border-radius: 4px;
            background-color: #212529;
            width: 32px;
            height: 32px;
            color: #FFFFFF;
      }

      main div button:hover{
            background-color: #343B41;
      }

      main ul{
            padding: 0;
            background-color: #212529;
            margin: 0 15px 0 15px;
            padding: 5px; 
      }

      @media screen and (min-width:600px){
            section{
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
            }

            section h1{
                  margin-bottom: 0;
            }

            section span{
                  margin-left: 0;
                  margin-right: 13px;
            }
      }
`

export const LiS = styled.li`
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 22px 8.5px 16px 8.5px;
      height: 48.73px;
      background-color: #121214;
      border-radius: 4px;

      :hover{
            background-color: #343B41;
      }

      p{
            color: #F8F9FA;
            font-size: 14px;
            font-weight: 700;
            margin-left: 12px;
      }

      span{
            color: #868E96;
            font-size : 12px;
            margin-right: 12px;
      }
`