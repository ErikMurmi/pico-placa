import {Formik,Form} from 'formik'
import Input from './components/Input'
import {Container,FormContainer} from './components/Containers'
import Button from './components/Button'

function App() {

  const handleSubmit=()=>{}

  return (
      <Container>
        <FormContainer>
          <h1 style={{color:"white"}}>Pico y placa predictor</h1>
          <Formik
          initialValues={{plate:'',date:'',time:''}}
          onSubmit ={handleSubmit}
          >
            <Form>
              <Input name="Plate" label='License plate'></Input>
              <Input name="Date" label='Day you are looking for'></Input>
              <Input name="Time" label='What hour?'></Input>
              <Button>Find out</Button>
            </Form>
          </Formik>
        </FormContainer>
      </Container>
  );
}

export default App;
