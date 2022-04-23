import styled from 'styled-components'

export const SectionS = styled.section`
      width: 296px;
      height: calc(417.69px+22.83px);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 22.83px;
`

export const FormS = styled.form`
      width: 296px;
      height: 402.69px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background-color: #212529;

      h3{
            color: #F8F9FA;
            font-size: 14px;
            font-weight: 700;
      }

      div{
            display: flex;
            flex-direction: column;
            gap: 18px;
            width:264.66px;
      }

      div label{
            font-size: 10px;
            color: #F8F9FA;
            align-self: flex-start;
      }

      div input{
            background-color: #343B41;
            height: 38.5px;
            border-radius: 3.3px;
            border: none;
            padding: 0px 13.0293px;
      }

      p{
            margin: 0;
            text-align: center;
            font-size: 10px;
            font-weight: 600;
            color: #868E96;
      }

      .link{
            background-color: #868E96;
            width: 100%;
            color: #F8F9FA;
            border: none;
            font-weight: 500;
            height: 38.5px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 13px;
      }
      .link__red{
            background-color: #FF577F;
      }
` 

export const ButtonS = styled.button`
            width: 100%;
            background-color: #FF577F;
            color: #F8F9FA;
            border: none;
            font-weight: 500;
            height: 38.5px;
            border-radius: 4px;

            :hover{
                  background-color: #FF427F;
            }
      
`