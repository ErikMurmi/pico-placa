import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content:center;
  height: 100%;
  align-items:center;
  background-color:#EEEDDE;
  `
const Form =  styled.div`
  background-color:#141E27;
  padding: 25px 30px;
  border-radius: 25px;
  width: 700px;
`

function App() {
  return (
      <Container>
        <Form>
          Calculadora
        </Form>
      </Container>
  );
}

export default App;
