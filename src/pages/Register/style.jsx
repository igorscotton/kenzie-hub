import styled from 'styled-components'

export const SectionS = styled.section`
      width: 296px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 22.83px;
`
export const DivS = styled.div`
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: flex-end;

            button{
                  background-color: #212529;
                  width: 67.5px;
                  height: 32px;
                  font-size: 10px;
                  font-weight: 600;
            }
      
`

export const FormS = styled.form`
      width: 296px;
      height: 668.47px;
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

      div input, div select{
            background-color: #343B41;
            height: 38.5px;
            border-radius: 3.3px;
            border: none;
            padding: 0px 13.0293px;
      }

      div textarea{
            background-color: #343B41;
            resize: none;
            overflow-y: scroll;
      }

      div select, option{
            color: #868E96;
      }

      p{
            margin: 0;
            text-align: center;
            font-size: 10px;
            font-weight: 600;
            color: #868E96;
      }


` 

export const ButtonS = styled.button`
            width: 100%;
            background-color: #59323F;
            color: #F8F9FA;
            border: none;
            font-weight: 500;
            height: 38.5px;
            border-radius: 4px;

            :hover{
                  background-color: #FF427F;
            }
      
`