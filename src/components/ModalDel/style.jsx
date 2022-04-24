import styled from 'styled-components'

export const TitleModal = styled.div`
      display: flex;
      width: 100%;
      justify-content: space-between;
      background-color: #343B41;

      p{
            font-size: 12px;
            font-weight: bold;
            margin-left: 16px;
            color: #F8F9FA;      
      }

      button{
            color: #868E96;
            background-color: transparent;
            border: none;
            font-size: 13px;
            font-weight: 600;
            margin-right: 10px;
      }
`

export const FormS = styled.form`
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-around;
      background-color: #212529;

      .form--input{
            display: flex;
            flex-direction: column;
            margin: 0 14px 0 17.5px;
      }

      div label{
            color: #F8F9FA;
            font-size: 10px;
            margin-bottom: 18px;
      }

      div input, div select{
            background-color: #343B41;
            height: 38.5px;
            border-radius: 3.3px;
            border: none;
            padding: 0px 13.0293px;
      }

      div select, option{
            color: #868E96;
      }

      button{
            margin: 0 14px 0 17.5px;
            background-color: #59323F;
            color: #F8F9FA;
            border: none;
            font-weight: 500;
            height: 38.5px;
            border-radius: 4px;
      }

      button:hover{
            background-color: #FF427F;
      }
`

export const DivButton = styled.div`
      display: flex;
      flex-direction: row;
      margin: 0;
      justify-content: space-between;

      .button--path{
            width: 204px;
      }

      .button--delete{
          background-color:#868E96;
          width: 98px;  
      }

      .button--delete:hover{
            background-color: #343B41;
      }


`