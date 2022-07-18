import {Formik,Form} from 'formik'
import Input from './components/Input'
import {Container,FormContainer} from './components/Containers'
import Button from './components/Button'
import predictStatus from './utils/PredictStatus'

function App() {

  const handleSubmit=({plate,date,time})=>{
    const result = predictStatus(plate,new Date(date),time);
    console.log(result);
  }

  return (
      <Container>
        <FormContainer>
          <h1 style={{color:"white",fontSize:'2.8em'}}>PICO Y PLACA PREDICTOR</h1>
          <Formik
          initialValues={{plate:'',date:'',time:''}}
          onSubmit ={handleSubmit}
          >
            <Form>
              <Input name="plate" label='Type your license plate' placeholder='XXX-XXXX'></Input>
              <Input name="date" label='What day are you looking for?' placeholder='DD-MM-YYYY'></Input>
              <Input name="time" label='What hour?' placeholder='00:00'></Input>
              <Button type='submit'>Find out</Button>
            </Form>
          </Formik>
        </FormContainer>
      </Container>
  );
}

export default App;
